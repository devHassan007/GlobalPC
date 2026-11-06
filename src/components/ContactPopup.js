import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, Phone, X } from "lucide-react";
import "../contactPopup.css";

// ---- Settings -------------------------------------------------------------------------------
// Where the form is sent. Create a free form at https://formspree.io (or any service that accepts a JSON POST),
// then paste its URL here, e.g. "https://formspree.io/f/abcdwxyz". Leave it empty and the form opens the
// visitor's email app with the message filled in instead.
const FORM_ENDPOINT = "https://formspree.io/f/xgaaqbkv";
const TO_EMAIL = "hassanshahbaz738@gmail.com";
const SHOW_DELAY_MS = 1200;       // how long after the page loads before the popup appears
const SESSION_KEY = "gpc-contact-popup-seen"; // popup shows once per browser session; change the key to show it again
// ---------------------------------------------------------------------------------------------

const interests = ["Study in South Korea", "Study in Europe / Schengen", "Study in the UK", "Study in the USA", "Study in Canada", "Study in Australia / New Zealand", "Work abroad", "Visit / tourist visa", "UAE business setup", "Something else"];
const empty = { name: "", phone: "", email: "", interest: "", message: "", company: "" }; // "company" is a hidden spam trap

export default function ContactPopup() {
    const [open, setOpen] = useState(false);
    const [values, setValues] = useState(empty);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("idle"); // idle | sending | sent | failed
    const firstField = useRef(null);

    // Show once per session, shortly after the visitor arrives.
    useEffect(() => {
        let seen = false;
        try { seen = sessionStorage.getItem(SESSION_KEY) === "1"; } catch { /* storage blocked: show anyway */ }
        if (seen) return;
        const t = setTimeout(() => setOpen(true), SHOW_DELAY_MS);
        return () => clearTimeout(t);
    }, []);

    const close = () => {
        setOpen(false);
        try { sessionStorage.setItem(SESSION_KEY, "1"); } catch { /* ignore */ }
    };

    // While open: lock page scroll, focus the first field, close on Escape.
    useEffect(() => {
        if (!open) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        firstField.current?.focus();
        const onKey = (e) => { if (e.key === "Escape") close(); };
        window.addEventListener("keydown", onKey);
        return () => { document.body.style.overflow = prev; window.removeEventListener("keydown", onKey); };
    }, [open]);

    if (!open) return null;

    const set = (field) => (e) => { setValues({ ...values, [field]: e.target.value }); if (errors[field]) setErrors({ ...errors, [field]: "" }); };

    const validate = () => {
        const next = {};
        if (values.name.trim().length < 2) next.name = "Please enter your name.";
        if (values.phone.replace(/\D/g, "").length < 7) next.phone = "Please enter a phone or WhatsApp number.";
        if (values.email && !/^\S+@\S+\.\S+$/.test(values.email)) next.email = "That email address doesn't look right.";
        return next;
    };

    const submit = async (e) => {
        e.preventDefault();
        if (values.company) return; // spam bot filled the hidden field
        const found = validate();
        setErrors(found);
        if (Object.keys(found).length) return;

        const lines = [`Name: ${values.name}`, `Phone / WhatsApp: ${values.phone}`, `Email: ${values.email || "-"}`, `Interested in: ${values.interest || "-"}`, "", values.message || "(no message)"];

        if (!FORM_ENDPOINT) {
            window.location.href = `mailto:${TO_EMAIL}?subject=${encodeURIComponent("Website enquiry from " + values.name)}&body=${encodeURIComponent(lines.join("\n"))}`;
            setStatus("sent");
            return;
        }
        setStatus("sending");
        try {
            const res = await fetch(FORM_ENDPOINT, {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({ name: values.name, phone: values.phone, email: values.email, interest: values.interest, message: values.message, _subject: `Website enquiry from ${values.name}` })
            });
            if (!res.ok) throw new Error("Request failed");
            setStatus("sent");
            setValues(empty);
        } catch {
            setStatus("failed");
        }
    };

    return <div className="cp-overlay" onMouseDown={(e) => { if (e.target === e.currentTarget) close(); }} data-testid="contact-popup">
        <div className="cp-modal" role="dialog" aria-modal="true" aria-labelledby="cp-title">
            <button type="button" className="cp-close" onClick={close} aria-label="Close contact form" data-testid="contact-popup-close"><X size={20} /></button>

            <aside className="cp-side">
                <p className="eyebrow light"><span /> LET’S TALK</p>
                <h2 id="cp-title">Start your <em>global journey.</em></h2>
                <p>Tell us a little about your plans and our team will get back to you with clear next steps.</p>
                <a className="cp-call" href="tel:+923007277495"><Phone size={16} /> +92 300 7277495</a>
                <small>Monday to Saturday, 09:00 AM to 07:00 PM (PKT)</small>
            </aside>

            <div className="cp-body">
                {status === "sent" ? <div className="cp-success" role="status" data-testid="contact-popup-success">
                    <span className="cp-tick"><Check size={26} /></span>
                    <h3>{FORM_ENDPOINT ? "Thank you, we have your message." : "Almost done."}</h3>
                    <p>{FORM_ENDPOINT ? "A member of our team will contact you shortly." : "Your email app should have opened with your message ready. Press send there to reach us."}</p>
                    <button type="button" className="button button-gold" onClick={close}>Continue to the website</button>
                </div> : <form onSubmit={submit} noValidate data-testid="contact-popup-form">
                    <label className="cp-field"><span>Full name *</span><input ref={firstField} type="text" name="name" autoComplete="name" value={values.name} onChange={set("name")} aria-invalid={!!errors.name} />{errors.name && <em className="cp-error">{errors.name}</em>}</label>
                    <div className="cp-row">
                        <label className="cp-field"><span>Phone / WhatsApp *</span><input type="tel" name="phone" autoComplete="tel" value={values.phone} onChange={set("phone")} aria-invalid={!!errors.phone} />{errors.phone && <em className="cp-error">{errors.phone}</em>}</label>
                        <label className="cp-field"><span>Email</span><input type="email" name="email" autoComplete="email" value={values.email} onChange={set("email")} aria-invalid={!!errors.email} />{errors.email && <em className="cp-error">{errors.email}</em>}</label>
                    </div>
                    <label className="cp-field"><span>I’m interested in</span><select name="interest" value={values.interest} onChange={set("interest")}><option value="">Select an option</option>{interests.map((o) => <option key={o} value={o}>{o}</option>)}</select></label>
                    <label className="cp-field"><span>Message</span><textarea name="message" rows="3" value={values.message} onChange={set("message")} placeholder="Your goals, timeline or any questions" /></label>
                    <input className="cp-trap" type="text" name="company" tabIndex="-1" autoComplete="off" aria-hidden="true" value={values.company} onChange={set("company")} />
                    {status === "failed" && <p className="cp-fail" role="alert">Sorry, that didn’t go through. Please try again or call +92 300 7277495.</p>}
                    <button type="submit" className="button button-gold cp-submit" disabled={status === "sending"} data-testid="contact-popup-submit">{status === "sending" ? "Sending..." : "Send my enquiry"} <ArrowRight size={16} /></button>
                    <button type="button" className="cp-skip" onClick={close}>Maybe later, let me browse</button>
                </form>}
            </div>
        </div>
    </div>;
}
