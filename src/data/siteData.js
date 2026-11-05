import { BriefcaseBusiness, Building2, Compass, GraduationCap } from "lucide-react";

// Logo file in the public/images folder. Change the name here if yours is different (for example logo.png).
export const LOGO = "/images/logo.jpeg";

export const CONSULT_MAIL = "mailto:tahiracca11@gmail.com?subject=Book%20a%20Consultation";

export const images = {
    hero: "https://images.unsplash.com/photo-1758413355194-353da4fa09c1?auto=format&fit=crop&w=1800&q=85",
    korea: "https://images.unsplash.com/photo-1570191913384-7b4ff11716e7?auto=format&fit=crop&w=1200&q=85",
    office: "https://images.unsplash.com/photo-1758599543129-5269a8f29e68?auto=format&fit=crop&w=1200&q=85",
    london: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=80",
    usa: "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?auto=format&fit=crop&w=900&q=80",
    canada: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=900&q=80",
    australia: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=900&q=80",
    newzealand: "https://images.unsplash.com/photo-1591640040362-f55d95a6b2bc?auto=format&fit=crop&w=900&q=80",
    europe: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=900&q=80",
    // TODO: swap in a Vienna / Austria photo (a local file in public/images works too). Reuses the Europe image for now.
    austria: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=900&q=80",
    dubai: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85",
    study: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
    scholarship: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80",
    business: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80"
};

export const slugify = (text) => text.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// [Icon, title, copy, extra items listed on the card]
export const services = [
    [GraduationCap, "Study Abroad", "Explore international education opportunities, university research, and application preparation.", []],
    [Compass, "Immigration Guidance", "Understand available pathways, eligibility considerations, and preparation requirements.", ["Passport Guidance", "Brochures"]],
    [BriefcaseBusiness, "Work Abroad", "Explore international employment opportunities and the processes that shape your next move.", []],
    [Building2, "Business Setup Abroad", "An informed introduction to overseas business establishment and company formation support.", []]
];

// [name, tagline, image, page route]. Each destination has its own page in src/pages.
export const destinations = [
    ["South Korea", "Innovation, culture, and new possibilities", images.korea, "/destinations/south-korea"],
    ["United Kingdom", "Academic heritage, new perspectives", images.london, "/destinations/united-kingdom"],
    ["United States", "Ambition with global reach", images.usa, "/destinations/united-states"],
    ["Canada", "A welcoming path forward", images.canada, "/destinations/canada"],
    ["Australia", "Learn, work, discover", images.australia, "/destinations/australia"],
    ["New Zealand", "Space to learn, room to grow", images.newzealand, "/destinations/new-zealand"],
    ["Europe", "Many cultures, one journey", images.europe, "/destinations/europe"],
    ["Austria", "Heritage, music, and open doors", images.austria, "/destinations/austria"]
];

export const insights = [
    [images.study, "STUDY ABROAD", "How to prepare for studying abroad", "A clear starting point for researching destinations, programs, and your preparation."],
    [images.scholarship, "SOUTH KOREA", "Understanding scholarship opportunities in South Korea", "An introduction to the questions worth asking as you explore scholarship pathways."],
    [images.business, "UAE BUSINESS", "What to consider before setting up a business in the UAE", "The early considerations that help turn a big idea into a more informed conversation."]
];

export const faqs = [
    ["What services does Global Pass Consultants offer?", "We provide guidance across international education, immigration pathways, overseas work opportunities, and business setup exploration. Your options depend on your destination and circumstances."],
    ["Can you help me explore study opportunities in South Korea?", "Yes. We can help you understand study options, prepare questions, and explore relevant documentation for South Korean universities and programs."],
    ["What is the Korean Government Scholarship Program?", "GKS is a scholarship program offered by the Korean government. We can provide guidance on understanding the program and preparing an application; selection is determined by the relevant authorities."],
    ["Can you guide me through immigration requirements?", "We can help you understand the process and organize your preparation. Requirements vary by destination, program, and individual circumstances."],
    ["How do I begin a consultation?", "Use any Book a Consultation button to email our team or call us directly. We will listen to your goals and outline useful next steps."],
    ["Do you provide UAE business setup guidance?", "We can introduce you to the relevant support through our sister company, Marsos Business Management. Business setup requirements vary by activity and jurisdiction."]
];

// [label, icon key, link]. The links are dummy placeholders: replace each one with the real profile URL.
export const socials = [
    ["WhatsApp", "whatsapp", "https://www.whatsapp.com"],
    ["LinkedIn", "linkedin", "https://www.linkedin.com"],
    ["Facebook", "facebook", "https://www.facebook.com"],
    ["Instagram", "instagram", "https://www.instagram.com"],
    ["Snapchat", "snapchat", "https://www.snapchat.com"],
    ["TikTok", "tiktok", "https://www.tiktok.com"]
];

// Single source of truth for the navbar. Links starting with "/" are routes (they also work from inside destination pages).
export const navItems = [
    { label: "About", href: "/#about", children: [["Our Approach", "/#about"], ["How We Guide You", "/#journey"], ["Why Global Pass", "/#trust"]] },
    { label: "Services", href: "/#services", children: services.map(([, title]) => [title, `/#${slugify(title)}`]) },
    { label: "Destinations", href: "/#destinations", children: [...destinations.map(([name, , , href]) => [name, href]), ["UAE Business Setup", "/#marsos"]] },
    { label: "Insights", href: "/#insights", children: insights.map(([, , title]) => [title, `/#insight-${slugify(title)}`]) },
    { label: "Stories", href: "/#stories", children: [["Stories in the Making", "/#stories"], ["Share Your Story", "mailto:tahiracca11@gmail.com?subject=Share%20your%20story"]] },
    { label: "Contact", href: "/#contact", children: [["Book a Consultation", CONSULT_MAIL], ["Call +92 300 7277495", "tel:+923007277495"], ["Email Us", "mailto:tahiracca11@gmail.com"], ["FAQs", "/#faq"]] }
];
