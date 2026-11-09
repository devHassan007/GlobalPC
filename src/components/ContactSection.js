import { useRef, useState } from "react";
import { Check } from "lucide-react";
import { images } from "../data/siteData";
import "../contactSection.css";

// ---- Settings -------------------------------------------------------------------------------
// Where the form is sent. Create a free form at https://formspree.io (or any service that accepts a JSON POST),
// then paste its URL here, e.g. "https://formspree.io/f/abcdwxyz". Leave it empty and the form opens the
// visitor's email app with the message filled in instead.
const FORM_ENDPOINT = "https://formspree.io/f/moeeoyln";
const TO_EMAIL = "tahiracca11@gmail.com";
// ---------------------------------------------------------------------------------------------

// Dropdown choices. Edit these lists freely.
const destinationOptions = ["South Korea", "Austria", "Europe (Schengen)", "United Kingdom", "United States", "Canada", "Australia", "New Zealand", "Not sure yet"];
const startOptions = ["As soon as possible", "Within 3 months", "In 3 to 6 months", "In 6 to 12 months", "Next year", "Not sure yet"];
const counsellingOptions = ["In person at our office", "Phone call", "WhatsApp", "Video call", "Email"];
const fundingOptions = ["Personal / family savings", "Scholarship", "Education loan", "Sponsor", "Not sure yet"];
const levelOptions = ["Language course", "Associate / vocational", "Bachelor's degree", "Master's degree", "Doctorate (PhD)", "Not sure yet"];

const empty = { firstName: "", lastName: "", email: "", code: "+92", phone: "", destination: "", start: "", counselling: "", funding: "", level: "", agree: false, consent: false, updates: false, company: "" }; // "company" is a hidden spam trap

function Field({ label, error, children }) {
    return <label className={`cf-field ${error ? "has-error" : ""}`}><span>{label}</span>{children}{error && <em className="cf-error">{error}</em>}</label>;
}

export default function ContactSection() {
    const [values, setValues] = useState(empty);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("idle"); // idle | sending | sent | failed
    const firstField = useRef(null);

    const set = (field) => (e) => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setValues({ ...values, [field]: value });
        if (errors[field]) setErrors({ ...errors, [field]: "" });
    };

    const validate = () => {
        const next = {};
        if (!values.firstName.trim()) next.firstName = "Please enter your first name.";
        if (!values.lastName.trim()) next.lastName = "Please enter your last name.";
        if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = "Please enter a valid email address.";
        if (values.phone.replace(/\D/g, "").length < 7) next.phone = "Please enter your mobile number.";
        if (!values.destination) next.destination = "Please choose a destination.";
        if (!values.start) next.start = "When would you like to start studying?";
        if (!values.counselling) next.counselling = "Please choose a counselling mode.";
        if (!values.funding) next.funding = "How would you fund your education?";
        if (!values.level) next.level = "Please choose a study level.";
        if (!values.agree) next.agree = "Please accept the Terms and Privacy Policy.";
        if (!values.consent) next.consent = "Please allow us to contact you about your enquiry.";
        return next;
    };

    const submit = async (e) => {
        e.preventDefault();
        if (values.company) return; // spam bot filled the hidden field
        const found = validate();
        setErrors(found);
        if (Object.keys(found).length) return;

        const fullName = `${values.firstName.trim()} ${values.lastName.trim()}`;
        const phone = `${values.code} ${values.phone}`;
        const details = { name: fullName, email: values.email, phone, destination: values.destination, start: values.start, counselling: values.counselling, funding: values.funding, level: values.level, updates: values.updates ? "Yes" : "No" };

        if (!FORM_ENDPOINT) {
            const lines = [`Name: ${fullName}`, `Email: ${values.email}`, `Mobile: ${phone}`, `Preferred study destination: ${values.destination}`, `Start studying: ${values.start}`, `Preferred counselling: ${values.counselling}`, `Funding: ${values.funding}`, `Study level: ${values.level}`, `Wants updates and offers: ${details.updates}`];
            window.location.href = `mailto:${TO_EMAIL}?subject=${encodeURIComponent("Website enquiry from " + fullName)}&body=${encodeURIComponent(lines.join("\n"))}`;
            setStatus("sent");
            return;
        }
        setStatus("sending");
        try {
            const res = await fetch(FORM_ENDPOINT, {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({ ...details, _subject: `Website enquiry from ${fullName}` })
            });
            if (!res.ok) throw new Error("Request failed");
            setStatus("sent");
            setValues(empty);
        } catch {
            setStatus("failed");
        }
    };

    const another = () => { setStatus("idle"); setTimeout(() => firstField.current?.focus(), 0); };

    const select = (field, options) => <select name={field} value={values[field]} onChange={set(field)} aria-invalid={!!errors[field]}><option value="">Select</option>{options.map((o) => <option key={o} value={o}>{o}</option>)}</select>;

    return <section className="contact-section" id="contact" data-testid="contact-section">
        <div className="container contact-layout">
            <div className="contact-main">
                <h2>Global Pass can <em>help you</em></h2>
                <span className="contact-rule" aria-hidden="true" />
                <p className="contact-intro">Enter your details and one of our expert counsellors will reach out to you, so we can connect you to the right course, country and university, and even scholarships. Prefer to talk now? Call <a href="tel:+923007277495" data-testid="contact-phone-one">+92 300 7277495</a>.</p>

                {status === "sent" ? <div className="contact-success" role="status" data-testid="contact-success">
                    <span className="contact-tick"><Check size={26} /></span>
                    <h3>{FORM_ENDPOINT ? "Thank you, we have your enquiry." : "Almost done."}</h3>
                    <p>{FORM_ENDPOINT ? "A member of our team will contact you shortly." : "Your email app should have opened with your enquiry ready. Press send there to reach us."}</p>
                    <button type="button" className="contact-again" onClick={another}>Send another enquiry</button>
                </div> : <form className="cf-form" onSubmit={submit} noValidate data-testid="contact-form">
                    <div className="cf-grid">
                        <Field label="First name*" error={errors.firstName}><input ref={firstField} type="text" name="firstName" autoComplete="given-name" value={values.firstName} onChange={set("firstName")} aria-invalid={!!errors.firstName} /></Field>
                        <Field label="Last name*" error={errors.lastName}><input type="text" name="lastName" autoComplete="family-name" value={values.lastName} onChange={set("lastName")} aria-invalid={!!errors.lastName} /></Field>
                        <div className="cf-full"><Field label="Email address*" error={errors.email}><input type="email" name="email" autoComplete="email" value={values.email} onChange={set("email")} aria-invalid={!!errors.email} /></Field></div>
                        <div className="cf-full"><div className={`cf-field ${errors.phone ? "has-error" : ""}`}><span id="cf-mobile-label">Mobile number*</span><div className="cf-phone"><input className="cf-code" type="text" name="code" inputMode="tel" aria-label="Country code" value={values.code} onChange={set("code")} /><input type="tel" name="phone" autoComplete="tel-national" aria-labelledby="cf-mobile-label" value={values.phone} onChange={set("phone")} aria-invalid={!!errors.phone} /></div>{errors.phone && <em className="cf-error">{errors.phone}</em>}</div></div>
                        <Field label="Your preferred study destination*" error={errors.destination}>{select("destination", destinationOptions)}</Field>
                        <Field label="When would you like to start studying?*" error={errors.start}>{select("start", startOptions)}</Field>
                        <Field label="Preferred mode of counselling*" error={errors.counselling}>{select("counselling", counsellingOptions)}</Field>
                        <Field label="How would you fund your education?*" error={errors.funding}>{select("funding", fundingOptions)}</Field>
                        <Field label="Preferred study level*" error={errors.level}>{select("level", levelOptions)}</Field>
                    </div>

                    <div className="cf-checks">
                        <label className={`cf-check ${errors.agree ? "has-error" : ""}`}><input type="checkbox" checked={values.agree} onChange={set("agree")} /><span>I agree to the Global Pass <a href="/#contact">Terms</a> and <a href="/#contact">Privacy Policy</a> *</span></label>
                        <label className={`cf-check ${errors.consent ? "has-error" : ""}`}><input type="checkbox" checked={values.consent} onChange={set("consent")} /><span>Please contact me by phone, email, WhatsApp or SMS to assist with my enquiry *</span></label>
                        <label className="cf-check"><input type="checkbox" checked={values.updates} onChange={set("updates")} /><span>I would like to receive updates and offers from Global Pass</span></label>
                        {(errors.agree || errors.consent) && <em className="cf-error">{errors.agree || errors.consent}</em>}
                    </div>

                    <input className="cf-trap" type="text" name="company" tabIndex="-1" autoComplete="off" aria-hidden="true" value={values.company} onChange={set("company")} />
                    {status === "failed" && <p className="cf-fail" role="alert">Sorry, that didn’t go through. Please try again or call +92 300 7277495.</p>}
                    <button type="submit" className="cf-submit" disabled={status === "sending"} data-testid="contact-submit">{status === "sending" ? "Sending..." : "Enquire now"}</button>
                </form>}
            </div>

            <div className="contact-visual" aria-hidden="true">
                <span className="cv-leaf cv-gold" />
                <img src={images.office} alt="" />
                <span className="cv-leaf cv-navy" />
                <span className="cv-leaf cv-chip" />
            </div>
        </div>
    </section>;
}