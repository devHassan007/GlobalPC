import DestinationPage from "../components/DestinationPage";
import { images } from "../data/siteData";

export default function UnitedStates() {
    return <DestinationPage
        name="United States"
        eyebrow="UNITED STATES"
        title="Ambition with"
        titleEm="global reach."
        lead="Student and visitor visa preparation for the United States, from I-20 procurement to interview coaching."
        image={images.usa}
        imageAlt="United States city skyline"
        facts={[["Student visa", "F-1 academic"], ["Visitor visa", "B1/B2 tourist and business"], ["Key forms", "I-20, SEVIS I-901, DS-160"], ["Preparation", "One-to-one mock interviews"]]}
        article={{
            category: "UNITED STATES GUIDE",
            title: "F-1 and B1/B2 visas for the United States: how to prepare",
            readTime: "5 min read",
            intro: "A United States visa is decided largely by how well your file and your interview answers fit together. This guide explains the two visas we support most, the steps in each, and the documents to line up.",
            sections: [
                {
                    heading: "The F-1 academic student visa",
                    paragraphs: ["The F-1 visa is for full-time study at an accredited U.S. college or university. Our support covers the whole path from admission to the visa interview."],
                    list: [
                        ["I-20 procurement.", "We help you secure your I-20 from accredited U.S. colleges and universities."],
                        ["SEVIS I-901 fee filing.", "We handle the SEVIS fee filing so your receipt is ready for the interview."],
                        ["DS-160 drafting.", "We draft the online application carefully so it matches your supporting documents."],
                        ["Mock interview coaching.", "Intensive one-to-one practice that mirrors real visa officer questions."]
                    ]
                },
                {
                    heading: "The B1/B2 tourist and business visa",
                    paragraphs: ["The B1/B2 visa covers short visits for tourism, family or business. Officers look closely at your ties to your home country, so your documents need to tell a consistent story."],
                    list: [
                        "DS-160 preparation and appointment scheduling",
                        "Business conference invitation structuring",
                        "A ties-to-home-country documentation strategy"
                    ]
                },
                {
                    heading: "Documents to line up",
                    table: {
                        head: ["Visa stream", "Education documents", "Financial requirement", "Confirmation"],
                        rows: [["USA F-1 student", "Unattested or attested transcripts", "I-20 liquidity proof (first-year cost)", "SEVIS receipt and DS-160 confirmation"]]
                    },
                    callout: { title: "Prepare for the interview, not just the file", text: "We run mock interviews for F-1 and B1 appointments so you can explain your study plan or travel purpose clearly and confidently." }
                },
                {
                    heading: "How to get started",
                    paragraphs: ["Begin with an initial audit of your marks, test scores and budget. From there we shortlist programs, complete your admission, and prepare your visa file and interview practice step by step."]
                }
            ]
        }}
    />;
}
