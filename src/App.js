import { useEffect, useState } from "react";
import {
    ArrowDownRight,
    ArrowRight,
    ArrowUpRight,
    BriefcaseBusiness,
    Building2,
    Check,
    ChevronDown,
    Compass,
    GraduationCap,
    HandHeart,
    Menu,
    Plane,
    Sparkles,
    Users,
    X
} from "lucide-react";
import "./App.css";

const images = {
    hero: "https://images.unsplash.com/photo-1758413355194-353da4fa09c1?auto=format&fit=crop&w=1800&q=85",
    korea: "https://images.unsplash.com/photo-1570191913384-7b4ff11716e7?auto=format&fit=crop&w=1200&q=85",
    office: "https://images.unsplash.com/photo-1758599543129-5269a8f29e68?auto=format&fit=crop&w=1200&q=85",
    london: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=80",
    usa: "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?auto=format&fit=crop&w=900&q=80",
    canada: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=900&q=80",
    australia: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=900&q=80",
    europe: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=900&q=80",
    dubai: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85",
    study: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
    scholarship: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80",
    business: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80"
};

const services = [
    [GraduationCap, "Study Abroad", "Explore international education opportunities, university research, and application preparation."],
    [Compass, "Immigration Guidance", "Understand available pathways, eligibility considerations, and preparation requirements."],
    [BriefcaseBusiness, "Work Abroad", "Explore international employment opportunities and the processes that shape your next move."],
    [Building2, "Business Setup Abroad", "An informed introduction to overseas business establishment and company formation support."]
];
const destinations = [
    ["United Kingdom", "Academic heritage, new perspectives", images.london], ["United States", "Ambition with global reach", images.usa],
    ["Canada", "A welcoming path forward", images.canada], ["Australia", "Learn, work, discover", images.australia], ["Europe", "Many cultures, one journey", images.europe]
];
const faqs = [
    ["What services does Global Pass Consultants offer?", "We provide guidance across international education, immigration pathways, overseas work opportunities, and business setup exploration. Your options depend on your destination and circumstances."],
    ["Can you help me explore study opportunities in South Korea?", "Yes. We can help you understand study options, prepare questions, and explore relevant documentation for South Korean universities and programs."],
    ["What is the Korean Government Scholarship Program?", "GKS is a scholarship program offered by the Korean government. We can provide guidance on understanding the program and preparing an application; selection is determined by the relevant authorities."],
    ["Can you guide me through immigration requirements?", "We can help you understand the process and organize your preparation. Requirements vary by destination, program, and individual circumstances."],
    ["How do I begin a consultation?", "Use any Book a Consultation button to email our team or call us directly. We will listen to your goals and outline useful next steps."],
    ["Do you provide UAE business setup guidance?", "We can introduce you to the relevant support through our sister company, Marsos Business Management. Business setup requirements vary by activity and jurisdiction."]
];

function Button({ children, href = "#contact", secondary = false, ...props }) {
    return <a href={href} className={`button ${secondary ? "button-outline" : "button-gold"}`} data-testid={props["data-testid"] || "cta-link"} {...props}>{children}<ArrowRight size={16} /></a>;
}

function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => { const fn = () => setScrolled(window.scrollY > 20); window.addEventListener("scroll", fn); return () => window.removeEventListener("scroll", fn); }, []);
    const closeMenu = () => setMenuOpen(false);
    return <div className="site-shell">
        <div className="announcement" data-testid="announcement-bar"><span><Sparkles size={14} /> Your global journey starts here</span><span className="announcement-note">Personalized guidance. Clear direction. Global possibilities.</span></div>
        <header className={`site-header ${scrolled ? "is-scrolled" : ""}`} data-testid="site-header"><a href="#top" className="brand" data-testid="brand-link"><span className="brand-mark">GP</span><span>GLOBAL PASS<small>CONSULTANTS</small></span></a>
            <nav className="desktop-nav" aria-label="Primary navigation">{[["About", "#about"], ["Services", "#services"], ["Destinations", "#destinations"], ["Insights", "#insights"], ["Stories", "#stories"], ["Contact", "#contact"]].map(([label, href]) => <a key={label} href={href} data-testid={`nav-${label.toLowerCase()}`}>{label}</a>)}</nav>
            <Button href="mailto:tahiracca11@gmail.com?subject=Book%20a%20Consultation" data-testid="header-consultation-button">Book a Consultation</Button>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} data-testid="mobile-menu-button">{menuOpen ? <X /> : <Menu />}</button>
            {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{[["About", "#about"], ["Services", "#services"], ["Destinations", "#destinations"], ["Insights", "#insights"], ["Stories", "#stories"], ["Contact", "#contact"]].map(([label, href]) => <a onClick={closeMenu} key={label} href={href} data-testid={`mobile-nav-${label.toLowerCase()}`}>{label}</a>)}<Button href="mailto:tahiracca11@gmail.com?subject=Book%20a%20Consultation" data-testid="mobile-consultation-button">Book a Consultation</Button></nav>}
        </header>

        <main id="top">
            <section className="hero" data-testid="hero-section"><img className="hero-image" src={images.hero} alt="Historic international university building at dusk" /><div className="hero-shade" /><div className="container hero-content"><p className="eyebrow light"><span /> GLOBAL GUIDANCE, PERSONALLY LED</p><h1>Your gateway to<br /><em>global opportunities.</em></h1><p className="hero-copy">Explore international education, immigration pathways, and overseas business opportunities with personalized guidance from Global Pass Consultants.</p><div className="hero-actions"><Button href="mailto:tahiracca11@gmail.com?subject=Book%20a%20Consultation" data-testid="hero-consultation-button">Book a Consultation</Button><a className="text-link light-link" href="#services" data-testid="hero-services-link">Explore our services <ArrowDownRight size={18} /></a></div><div className="hero-foot"><span>01 <i /> 04</span><span>Pakistan <ArrowRight size={14} /> The world</span></div></div><div className="hero-side-label">GPC / 2025</div></section>

            <section className="intro-section section" id="about" data-testid="about-section"><div className="container intro-grid"><div><p className="eyebrow"><span /> OUR APPROACH</p><h2>Big plans deserve<br /><em>clear direction.</em></h2></div><div className="intro-copy"><p>Moving across borders is a meaningful decision. We make the process easier to understand, so you can focus on the opportunity ahead.</p><a className="text-link" href="#journey" data-testid="approach-link">How we guide you <ArrowRight size={17} /></a></div></div></section>

            <section className="section services-section" id="services" data-testid="services-section"><div className="container"><div className="section-head"><div><p className="eyebrow"><span /> WHAT WE DO</p><h2>Guidance for your<br /><em>global ambitions.</em></h2></div><p>Thoughtful support for the decisions that shape your next chapter — wherever it takes you.</p></div><div className="service-grid">{services.map(([Icon, title, copy], i) => <article className="service-card" key={title} data-testid={`service-card-${i}`}><span className="service-number">0{i + 1}</span><Icon className="service-icon" size={30} strokeWidth={1.4} /><h3>{title}</h3><p>{copy}</p><a href="#contact" className="card-link" data-testid={`service-link-${i}`}>Learn more <ArrowRight size={15} /></a></article>)}</div></div></section>

            <section className="section destination-section" id="destinations" data-testid="destinations-section"><div className="container"><div className="section-head destination-head"><div><p className="eyebrow"><span /> WHERE COULD YOU GO?</p><h2>Explore your next<br /><em>destination.</em></h2></div><p>Explore opportunities across popular international destinations, with guidance shaped around your goals.</p></div><div className="destination-grid"><a className="destination-feature" href="#korea" data-testid="destination-south-korea"><img src={images.korea} alt="Seoul skyline with Namsan Tower" /><div className="destination-overlay"><span className="destination-tag">FEATURED DESTINATION</span><h3>South Korea</h3><p>Innovation, culture, and new possibilities</p><ArrowRight size={23} /></div></a><div className="destination-list">{destinations.map(([name, copy, image], i) => <a className="destination-card" href="#contact" key={name} data-testid={`destination-card-${i}`}><img src={image} alt={`${name} destination`} /><div><h3>{name}</h3><p>{copy}</p></div><ArrowUpRight size={17} /></a>)}</div></div><a className="text-link destination-cta" href="#contact" data-testid="explore-destinations-link">Explore all destinations <ArrowRight size={17} /></a></div></section>

            <section className="korea-section" id="korea" data-testid="korea-section"><div className="container korea-grid"><div className="korea-image"><img src={images.korea} alt="Seoul city view from Namsan Tower" /><span className="image-caption">SEOUL / SOUTH KOREA</span></div><div className="korea-copy"><p className="eyebrow light"><span /> A SIGNATURE FOCUS</p><h2>Your future in<br /><em>South Korea</em><br />starts here.</h2><p>Explore study opportunities, scholarship information, and work-related pathways in South Korea with guidance tailored to your goals.</p><div className="korea-points"><div><GraduationCap size={19} /><span>Study in South Korea</span></div><div><Sparkles size={19} /><span>GKS guidance, clearly explained</span></div><div><BriefcaseBusiness size={19} /><span>Work opportunities & pathway information</span></div></div><Button href="mailto:tahiracca11@gmail.com?subject=South%20Korea%20Enquiry" data-testid="korea-explore-button">Explore South Korea</Button><small>GKS guidance is informational only; selection is determined by the relevant authorities.</small></div></div></section>

            <section className="section trust-section" data-testid="trust-section"><div className="container"><div className="section-head"><div><p className="eyebrow"><span /> WHY GLOBAL PASS</p><h2>Guidance you<br /><em>can trust.</em></h2></div><p>Clarity at every step. A considered approach to the choices that matter most.</p></div><div className="trust-grid">{[[Users, "Personalized Guidance", "Recommendations shaped around your individual goals and circumstances."], [Check, "Clear Process", "Understand the stages, requirements, and next steps without the guesswork."], [Plane, "International Opportunities", "Explore education, immigration, employment, and business options."], [HandHeart, "Ongoing Support", "Receive thoughtful guidance throughout the relevant preparation process."]].map(([Icon, title, copy], i) => <div className="trust-card" key={title} data-testid={`trust-card-${i}`}><div className="trust-icon"><Icon size={21} /></div><h3>{title}</h3><p>{copy}</p></div>)}</div></div></section>

            <section className="section journey-section" id="journey" data-testid="journey-section"><div className="container"><div className="journey-title"><p className="eyebrow"><span /> A SIMPLE START</p><h2>Your journey,<br /><em>made clear.</em></h2></div><div className="journey-grid">{[["01", "Share Your Goals", "Tell us about your plans and aspirations."], ["02", "Explore Your Options", "Discuss relevant destinations and potential pathways."], ["03", "Prepare Your Plan", "Understand requirements and prepare documentation."], ["04", "Move Forward", "Take your next steps with informed guidance."]].map(([num, title, copy], i) => <div className="journey-step" key={num} data-testid={`journey-step-${i}`}><span>{num}</span><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div></div></section>

            <section className="marsos-section section" data-testid="marsos-section"><div className="container marsos-grid"><div className="marsos-copy"><p className="eyebrow"><span /> SISTER COMPANY FEATURE</p><h2>Planning to establish<br />your business in the <em>UAE?</em></h2><p>Explore UAE business setup options and get introduced to the relevant business formation support through our sister company.</p><div className="marsos-brand"><span>MBM</span><div><strong>Marsos Business Management</strong><small>Business formation support</small></div></div><a className="text-link" href="mailto:tahiracca11@gmail.com?subject=UAE%20Business%20Setup" data-testid="uae-business-link">Explore UAE business setup <ArrowRight size={17} /></a></div><div className="marsos-image"><img src={images.dubai} alt="Dubai skyline at sunset" /><div className="marsos-stamp">UAE<br /><span>01</span></div></div></div></section>

            <section className="section insights-section" id="insights" data-testid="insights-section"><div className="container"><div className="section-head"><div><p className="eyebrow"><span /> FROM THE JOURNAL</p><h2>Insights for your<br /><em>next move.</em></h2></div><a className="text-link" href="#contact" data-testid="all-insights-link">View all insights <ArrowRight size={17} /></a></div><div className="insights-grid">{[[images.study, "STUDY ABROAD", "How to prepare for studying abroad", "A clear starting point for researching destinations, programs, and your preparation."], [images.scholarship, "SOUTH KOREA", "Understanding scholarship opportunities in South Korea", "An introduction to the questions worth asking as you explore scholarship pathways."], [images.business, "UAE BUSINESS", "What to consider before setting up a business in the UAE", "The early considerations that help turn a big idea into a more informed conversation."]].map(([image, category, title, copy], i) => <article className="insight-card" key={title} data-testid={`insight-card-${i}`}><a href="#contact"><img src={image} alt={title} /><span className="insight-category">{category}</span></a><h3>{title}</h3><p>{copy}</p><a className="card-link" href="#contact" data-testid={`read-insight-${i}`}>Read article <ArrowRight size={15} /></a></article>)}</div></div></section>

            <section className="stories-section" id="stories" data-testid="stories-section"><div className="container stories-grid"><div><p className="eyebrow light"><span /> STORIES IN THE MAKING</p><h2>Every journey<br />begins with a <em>yes.</em></h2><p>We are building a collection of future stories from people taking their next step. Yours could be one of them.</p><Button href="mailto:tahiracca11@gmail.com?subject=Share%20your%20story" secondary data-testid="stories-link">Explore stories</Button></div><div className="story-collage"><img src={images.study} alt="Students collaborating on campus" /><img src={images.office} alt="Professionals in a consultation" /><div className="collage-note"><Sparkles size={16} /> Future stories, thoughtfully told</div></div></div></section>

            <section className="section faq-section" id="faq" data-testid="faq-section"><div className="container faq-grid"><div><p className="eyebrow"><span /> QUESTIONS, ANSWERED</p><h2>Start with<br /><em>what you know.</em></h2><p className="faq-intro">The first step is often a conversation. Here are a few useful starting points.</p><a className="text-link" href="mailto:tahiracca11@gmail.com" data-testid="faq-contact-link">Ask our team directly <ArrowRight size={17} /></a></div><div className="faq-list">{faqs.map(([question, answer], i) => <div className={`faq-item ${openFaq === i ? "faq-open" : ""}`} key={question}><button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i} data-testid={`faq-question-${i}`}><span>0{i + 1}</span><strong>{question}</strong><ChevronDown size={19} /></button>{openFaq === i && <p data-testid={`faq-answer-${i}`}>{answer}</p>}</div>)}</div></div></section>

            <section className="final-cta" id="contact" data-testid="final-cta"><div className="container final-cta-inner"><p className="eyebrow light"><span /> YOUR NEXT CHAPTER</p><h2>Ready to take<br />the <em>next step?</em></h2><p>Tell us about your goals and let’s explore the opportunities that may be right for you.</p><div className="hero-actions"><Button href="mailto:tahiracca11@gmail.com?subject=Book%20a%20Consultation" data-testid="final-consultation-button">Book a Consultation</Button><a className="text-link light-link" href="tel:+923007277495" data-testid="final-contact-button">Contact our team <ArrowRight size={17} /></a></div></div></section>
        </main>
        <footer className="footer" data-testid="footer"><div className="container footer-grid"><div className="footer-brand"><a href="#top" className="brand" data-testid="footer-brand-link"><span className="brand-mark">GP</span><span>GLOBAL PASS<small>CONSULTANTS</small></span></a><p>Helping you navigate global opportunities with clarity, care, and confidence.</p><div className="footer-sister"><small>SISTER COMPANY</small><strong>Marsos Business Management</strong></div></div><div><h4>Explore</h4><a href="#about" data-testid="footer-about-link">About us</a><a href="#services" data-testid="footer-services-link">Services</a><a href="#destinations" data-testid="footer-destinations-link">Destinations</a><a href="#insights" data-testid="footer-insights-link">Insights</a></div><div><h4>Connect</h4><a href="tel:+923007277495" data-testid="footer-phone-one">+92 300 7277495</a><a href="tel:+923016640828" data-testid="footer-phone-two">+92 301 6640828</a><a href="mailto:tahiracca11@gmail.com" data-testid="footer-email">tahiracca11@gmail.com</a><p className="address" data-testid="footer-address">Hafizabad Road, Pindi Bhattian,<br />Punjab, Pakistan</p></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Global Pass Consultants. All rights reserved.</span><span><a href="#contact" data-testid="privacy-link">Privacy Policy</a><a href="#contact" data-testid="terms-link">Terms & Conditions</a></span></div></footer>
    </div>;
}

export default App;