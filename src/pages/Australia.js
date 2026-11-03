import DestinationPage from "../components/DestinationPage";
import { images } from "../data/siteData";

export default function Australia() {
    return <DestinationPage
        name="Australia"
        eyebrow="AUSTRALIA"
        title="Learn, work,"
        titleEm="discover."
        lead="Subclass 500 student visa and Subclass 600 visitor visa support, with a clear view of the study-to-residency route."
        image={images.australia}
        imageAlt="Australian coastline"
        facts={[["Student visa", "Subclass 500"], ["Visitor visa", "Subclass 600"], ["Health cover", "OSHC setup"], ["After study", "Subclass 485 and SkillSelect"]]}
        article={{
            category: "AUSTRALIA GUIDE",
            title: "Australian student and visitor visas: a practical guide",
            readTime: "5 min read",
            intro: "Australian applications reward a clear, honest study plan and well-documented finances. This guide covers the Subclass 500 student visa, the Subclass 600 visitor visa, and how study can lead toward residency.",
            sections: [
                {
                    heading: "Subclass 500 student visa",
                    paragraphs: ["The Subclass 500 visa is for full-time study with an Australian provider."],
                    list: [
                        ["CoE procurement.", "We help you secure your Confirmation of Enrolment from your institution."],
                        ["Genuine Student (GS) statement.", "We help you draft a clear statement about why you chose your course and provider."],
                        ["OSHC health insurance.", "We set up Overseas Student Health Cover for your stay."],
                        ["Financial proof verification.", "We verify your funds documents before filing."]
                    ]
                },
                {
                    heading: "Subclass 600 visitor visa",
                    paragraphs: ["For tourism and family visits we file Subclass 600 applications, including the Sponsored Family stream, through ImmiAccount, with verified financial evidence and a clear itinerary."]
                },
                {
                    heading: "From study to permanent residency",
                    paragraphs: [
                        "After study, a post-study work visa (Subclass 485) can lead toward permanent residency through SkillSelect.",
                        "Migration policy changes, so we keep your plan aligned with current rules instead of working from old information."
                    ],
                    callout: { title: "Write your GS statement with care", text: "Your Genuine Student statement should reflect your own reasons and plans. We help you structure it, but it must be accurate and in your own words." }
                }
            ]
        }}
    />;
}
