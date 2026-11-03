import DestinationPage from "../components/DestinationPage";
import { images } from "../data/siteData";

export default function Europe() {
    return <DestinationPage
        name="Europe"
        eyebrow="EUROPE AND THE SCHENGEN ZONE"
        title="One application path to"
        titleEm="many cultures."
        lead="Admissions, scholarships and visas across Germany, Italy, Poland, Spain, France, Hungary and the wider Schengen Area."
        image={images.europe}
        imageAlt="European city street"
        facts={[["Schengen Area", "29 European countries"], ["Study stay-back", "9 to 18 months, by country"], ["Scholarships", "DSU (Italy), Stipendium Hungaricum"], ["Visit visas", "Itinerary, insurance, cover letter"]]}
        article={{
            category: "EUROPE GUIDE",
            title: "Studying and visiting Europe: pathways across the Schengen Area",
            readTime: "7 min read",
            intro: "The Schengen Area offers world-class education, post-study stay-back options and borderless travel across 29 European countries. This guide compares the main study routes, explains what each country asks for, and covers the documents most applicants need.",
            sections: [
                {
                    heading: "Choosing a country",
                    paragraphs: ["Each country rewards a different kind of applicant. Germany suits students aiming for tuition-free public universities, Italy and Hungary offer scholarship routes, and Poland combines affordable living with strong job growth. The right choice depends on your marks, budget and long-term plans."],
                    table: {
                        head: ["Country", "Top advantage", "Financial proof", "Post-study stay"],
                        rows: [
                            ["Germany", "Tuition-free public universities", "EUR 11,904 per year (blocked account)", "18 months"],
                            ["Italy", "Regional need scholarships (DSU)", "EUR 6,000 to 7,000 per year (bank statement)", "12 months"],
                            ["Poland", "Affordable living and high job growth", "EUR 4,000 to 5,000 (bank statement)", "12 months"],
                            ["Hungary", "100% fully funded scholarships", "EUR 5,000 (for self-funded)", "9 months"]
                        ],
                        note: "Figures are indicative and are updated by each country's authorities. We confirm current requirements at your initial audit."
                    }
                },
                {
                    heading: "Germany",
                    paragraphs: ["We support tuition-free public university admissions, blocked account setup through Coracle or Expatrio, APS certificate guidance, and the Chancenkarte (Opportunity Card) job seeker permit."]
                },
                {
                    heading: "Italy",
                    paragraphs: ["Italian applications start with pre-enrollment on Universitaly. We help with DOV and CIMEA statements of comparability, regional scholarship (DSU) filings and the National Study Visa."]
                },
                {
                    heading: "Poland",
                    paragraphs: ["We handle admissions into Polish state universities, ZUS insurance proof, and National Type-D work permit documentation for skilled industrial and IT roles."]
                },
                {
                    heading: "Spain and France",
                    paragraphs: ["For Spain and France we place students in language programs and in undergraduate or graduate courses, process Campus France dossiers, and prepare tourist and business visit filings."]
                },
                {
                    heading: "Hungary",
                    paragraphs: ["We prepare the complete Stipendium Hungaricum scholarship dossier, and we also arrange direct admission into medical, engineering and business programs for self-funded students."]
                },
                {
                    heading: "Visiting the Schengen Area",
                    paragraphs: ["Multi-country tourist and business visas need a clear itinerary and verifiable bookings."],
                    list: ["Itinerary planning and verifiable flight reservations", "Hotel vouchers", "International travel health insurance (EUR 30,000 minimum cover)", "Embassy cover letter drafting"]
                },
                {
                    heading: "Documents most applicants prepare",
                    table: {
                        head: ["Visa stream", "Education documents", "Financial requirements", "Legalization"],
                        rows: [
                            ["Germany student", "HEC attested degree and transcript", "Coracle or Expatrio blocked account (about EUR 11.9k)", "APS certificate and German Embassy stamp"],
                            ["Schengen tourist", "Employment or business proof", "Six-month bank statement and FBR tax returns", "Travel insurance (EUR 30,000 minimum)"]
                        ]
                    },
                    callout: { title: "Looking at Austria?", text: "Austria is part of the Schengen Area. See our dedicated Austria page for how we can support your plans there." }
                }
            ]
        }}
    />;
}
