import DestinationPage from "../components/DestinationPage";
import { images } from "../data/siteData";

// NOTE: New Zealand is not covered in the company profile PDF, so this page keeps to general guidance and to
// services described elsewhere in the profile. Add New Zealand-specific figures and visa names once confirmed.
export default function NewZealand() {
    return <DestinationPage
        name="New Zealand"
        eyebrow="NEW ZEALAND"
        title="Space to learn,"
        titleEm="room to grow."
        lead="Guidance for study and visit applications to New Zealand, with your documents, statements and interview preparation handled with care."
        image={images.newzealand}
        imageAlt="New Zealand landscape"
        facts={[["Study support", "Course and provider research"], ["Visa support", "Application preparation and filing"], ["Documents", "Attestation and bank audit"], ["Preparation", "SOP and mock interview"]]}
        article={{
            category: "NEW ZEALAND GUIDE",
            title: "Thinking about New Zealand: how to prepare",
            readTime: "4 min read",
            intro: "New Zealand attracts students and visitors who want a calmer pace of life and an international education. Requirements differ by course and visa type, so the best start is a clear picture of your goals and a well-prepared file.",
            sections: [
                {
                    heading: "Start with your goals",
                    paragraphs: ["We begin with an initial audit of your academic marks, English test results and budget. That shows which courses and providers are realistic, and which gaps to close before you apply."]
                },
                {
                    heading: "How we support your application",
                    list: [
                        ["Course and provider research.", "We help you compare options against your profile."],
                        ["Admission filing.", "We prepare and file your applications and follow up on offers."],
                        ["Visa preparation.", "We compile your visa file, including your cover letter and supporting evidence."],
                        ["Statement of Purpose.", "We draft personal statements and study plans that explain your choices clearly."]
                    ]
                },
                {
                    heading: "Documents and finances",
                    paragraphs: ["Immigration offices check documents closely. We support attestation through MOFA, HEC and IBCC, apostille and embassy legalization, and an audit of your bank statements and source-of-income evidence."]
                },
                {
                    heading: "Interview and language preparation",
                    paragraphs: ["If your application needs an interview, we run one-to-one mock sessions. We also help you plan and register for English tests such as IELTS Academic or PTE Academic."],
                    callout: { title: "Get New Zealand-specific requirements", text: "Funds, fees and visa conditions vary and change. Book a consultation and we will confirm the current requirements for your chosen course in writing." }
                }
            ]
        }}
    />;
}
