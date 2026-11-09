import { useRef, useState } from "react";
import { ArrowRight, Check, Clock, Mail, MapPin, Phone } from "lucide-react";
import "../contactSection.css";

// ---- Settings -------------------------------------------------------------------------------
// Where the form is sent. Create a free form at https://formspree.io (or any service that accepts a JSON POST),
// then paste its URL here, e.g. "https://formspree.io/f/abcdwxyz". Leave it empty and the form opens the
// visitor's email app with the message filled in instead.
const FORM_ENDPOINT = "";
const TO_EMAIL = "tahiracca11@gmail.com";
// ---------------------------------------------------------------------------------------------

const interests = ["Study in South Korea", "Study in Europe / Austria", "Study in the UK", "Study in the USA", "Study in Canada", "Study in Australia / New Zealand", "Work abroad", "Visit / tourist visa", "UAE business setup", "Something else"];
const empty = { name: "", phone: "", email: "", interest: "", message: "", company: "" }; // "company" is a hidden spam trap

export default function ContactSection() {
    const [values, setValues] = useState(empty);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("idle"); // idle | sending | sent | failed
    const formTop = useRef(null);

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

    const another = () => { setStatus("idle"); setTimeout(() => formTop.current?.focus(), 0); };

    return <section className="contact-section" id="contact" data-testid="contact-section">
        <div className="container">
            <div className="contact-head">
                <p className="eyebrow"><span /> GET IN TOUCH <span /></p>
                <h2>Ready to take the <em>next step?</em></h2>
                <p>Fill in the form and our team will get back to you with clear next steps.</p>
            </div>

            <div className="contact-box">
                <aside className="contact-side">
                    <p className="eyebrow light"><span /> LET’S TALK</p>
                    <h3>Start your <em>global journey.</em></h3>
                    <p className="contact-lead">Tell us a little about your plans. There is no obligation, and we reply as soon as we can.</p>
                    <ul className="contact-details">
                        <li><Phone size={17} /><span><a href="tel:+923007277495" data-testid="contact-phone-one">+92 300 7277495</a><br /><a href="tel:+923016640828" data-testid="contact-phone-two">+92 301 6640828</a></span></li>
                        <li><Mail size={17} /><a href="mailto:tahiracca11@gmail.com" data-testid="contact-email">tahiracca11@gmail.com</a></li>
                        <li><MapPin size={17} /><span>Hafizabad Road, Pindi Bhattian,<br />Punjab, Pakistan</span></li>
                        <li><Clock size={17} /><span>Monday to Saturday<br />09:00 AM to 07:00 PM (PKT)</span></li>
                    </ul>
                </aside>

                <div className="contact-formpanel">
                    {status === "sent" ? <div className="contact-success" role="status" data-testid="contact-success">
                        <span className="contact-tick"><Check size={26} /></span>
                        <h3>{FORM_ENDPOINT ? "Thank you, we have your message." : "Almost done."}</h3>
                        <p>{FORM_ENDPOINT ? "A member of our team will contact you shortly." : "Your email app should have opened with your message ready. Press send there to reach us."}</p>
                        <button type="button" className="contact-again" onClick={another}>Send another enquiry</button>
                    </div> : <form onSubmit={submit} noValidate data-testid="contact-form">
                        <label className="contact-field"><span>Full name *</span><input ref={formTop} type="text" name="name" autoComplete="name" value={values.name} onChange={set("name")} aria-invalid={!!errors.name} />{errors.name && <em className="contact-error">{errors.name}</em>}</label>
                        <div className="contact-row">
                            <label className="contact-field"><span>Phone / WhatsApp *</span><input type="tel" name="phone" autoComplete="tel" value={values.phone} onChange={set("phone")} aria-invalid={!!errors.phone} />{errors.phone && <em className="contact-error">{errors.phone}</em>}</label>
                            <label className="contact-field"><span>Email</span><input type="email" name="email" autoComplete="email" value={values.email} onChange={set("email")} aria-invalid={!!errors.email} />{errors.email && <em className="contact-error">{errors.email}</em>}</label>
                        </div>
                        <label className="contact-field"><span>I’m interested in</span><select name="interest" value={values.interest} onChange={set("interest")}><option value="">Select an option</option>{interests.map((o) => <option key={o} value={o}>{o}</option>)}</select></label>
                        <label className="contact-field"><span>Message</span><textarea name="message" rows="4" value={values.message} onChange={set("message")} placeholder="Your goals, timeline or any questions" /></label>
                        <input className="contact-trap" type="text" name="company" tabIndex="-1" autoComplete="off" aria-hidden="true" value={values.company} onChange={set("company")} />
                        {status === "failed" && <p className="contact-fail" role="alert">Sorry, that didn’t go through. Please try again or call +92 300 7277495.</p>}
                        <button type="submit" className="button button-gold contact-submit" disabled={status === "sending"} data-testid="contact-submit">{status === "sending" ? "Sending..." : "Send my enquiry"} <ArrowRight size={16} /></button>
                    </form>}
                </div>
            </div>
        </div>
    </section>;
}