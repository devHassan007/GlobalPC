import DestinationPage from "../components/DestinationPage";
import { images } from "../data/siteData";

// NOTE: Austria is not covered in the company profile PDF, so this page keeps to general Schengen-route guidance
// and to services described elsewhere in the profile. Add Austria-specific figures (fees, funds, language levels) once confirmed.
export default function Austria() {
    return <DestinationPage
        name="Austria"
        eyebrow="SCHENGEN DESTINATION"
        title="Study and visit in the heart of"
        titleEm="Europe."
        lead="Guidance for applications to Austrian universities and for Schengen visits, with documents and interview preparation handled by one team."
        image={images.austria}
        imageAlt="Austria destination"
        facts={[["Region", "Schengen Area"], ["Study support", "Admissions and visa filing"], ["Documents", "Attestation, apostille, bank audit"], ["Preparation", "SOP and mock interview"]]}
        article={{
            category: "AUSTRIA GUIDE",
            title: "Planning to study or visit Austria: where to begin",
            readTime: "5 min read",
            intro: "Austria is a Schengen country in central Europe with a strong university tradition. Whether you are comparing programs or planning a short visit, a well-prepared file makes the process clearer. This guide explains how we approach Austria and what to start preparing.",
            sections: [
                {
                    heading: "Why consider Austria",
                    paragraphs: [
                        "Austria sits within the Schengen Area, which gives students and visitors access to the wider European region. Many students are drawn by its universities, its central location and its mix of culture and everyday liveability.",
                        "Programs, entry requirements and costs differ between universities, so the first step is a careful look at your academic record and your goals."
                    ]
                },
                {
                    heading: "How we support Austrian applications",
                    list: [
                        ["Program research.", "We help you compare courses and universities against your marks, language level and budget."],
                        ["Admissions filing.", "We prepare and file your university applications and track the replies."],
                        ["Visa processing.", "We compile and file your visa application and cover letter for the embassy."],
                        ["Statement of Purpose.", "We draft personal statements and study plans that match what universities and visa officers expect."]
                    ]
                },
                {
                    heading: "Language and academic preparation",
                    paragraphs: [
                        "Teaching language matters. Many Austrian programs are taught in German, while some are offered in English, so the right course depends on your language level. We help you map out a study roadmap and register for the relevant language tests.",
                        "Check each program's own requirements early. Language certificates and academic documents often take the longest to arrange."
                    ]
                },
                {
                    heading: "Documents and legalization",
                    paragraphs: ["Documents for any Schengen study application are checked closely. Our team handles the full chain in one place."],
                    list: [
                        "MOFA, HEC and IBCC attestation of degrees and certificates",
                        "Apostille and embassy legalization for degrees, birth certificates and police clearance",
                        "Bank statement and proof of funds audit, including source-of-income documentation and FBR active taxpayer proof"
                    ]
                },
                {
                    heading: "Preparing for your embassy interview",
                    paragraphs: ["We run one-to-one mock interviews that mirror real visa officer questioning, so you can answer clearly and consistently about your study plan, finances and plans after your studies."]
                },
                {
                    heading: "Visiting Austria",
                    paragraphs: ["For a short visit, a Schengen visa needs a clear itinerary, verifiable bookings, travel insurance and a well-written cover letter. We prepare the full file with you."],
                    callout: { title: "Get Austria-specific figures", text: "Funds required, fees and language levels vary by program and can change. Book a consultation and we will confirm the current requirements for your chosen course in writing." }
                }
            ]
        }}
    />;
}
