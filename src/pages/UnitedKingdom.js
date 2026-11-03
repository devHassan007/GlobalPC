import DestinationPage from "../components/DestinationPage";
import { images } from "../data/siteData";

export default function UnitedKingdom() {
    return <DestinationPage
        name="United Kingdom"
        eyebrow="UNITED KINGDOM"
        title="Academic heritage,"
        titleEm="new perspectives."
        lead="Student Route and Standard Visitor visa support, from CAS procurement to financial statement checks and health filings."
        image={images.london}
        imageAlt="London street scene"
        facts={[["Student visa", "Student Route (UKVI)"], ["Visitor visa", "6-month, 2-year and 5-year"], ["Funds check", "28-day financial statement"], ["Health filings", "TB test and IHS surcharge"]]}
        article={{
            category: "UNITED KINGDOM GUIDE",
            title: "Student and visitor visas for the UK: what to prepare",
            readTime: "5 min read",
            intro: "UK visa applications are document-heavy, and small gaps in your financial evidence can cause delays. This guide explains the Student Route and Standard Visitor visas and the steps we handle with you.",
            sections: [
                {
                    heading: "The Student Route",
                    paragraphs: ["The Student Route is for full-time study at a UK institution. Your application starts with an offer from a university and a Confirmation of Acceptance for Studies (CAS)."],
                    list: [
                        ["CAS procurement.", "We help you secure your CAS from your chosen institution."],
                        ["UKVI financial statement verification.", "UKVI checks your funds over a 28-day period, so we review your statements before you apply."],
                        ["TB test booking.", "We help you book the tuberculosis test where it is required."],
                        ["IHS health surcharge.", "We file the Immigration Health Surcharge as part of your application."]
                    ]
                },
                {
                    heading: "The Standard Visitor visa",
                    paragraphs: ["Standard Visitor visas cover tourism, family visits and business trips. We process 6-month, 2-year and 5-year visitor visas."],
                    list: ["Clear financial justification for your trip", "Family sponsorship ties and supporting evidence", "A realistic itinerary that matches your stated purpose"]
                },
                {
                    heading: "Interview and statement preparation",
                    paragraphs: ["For appointments, we run mock interviews that mirror real questioning. We also draft statements of purpose, cover letters and study plans that match what universities and visa officers expect."],
                    callout: { title: "Start your financial evidence early", text: "Because UKVI looks at a 28-day window of funds, it helps to plan your statements well before your application date. We will review yours at your initial audit." }
                }
            ]
        }}
    />;
}
