import DestinationPage from "../components/DestinationPage";
import { images } from "../data/siteData";

export default function Canada() {
    return <DestinationPage
        name="Canada"
        eyebrow="CANADA"
        title="A welcoming path"
        titleEm="forward."
        lead="Study permit, visitor visa and Super Visa support, with clear guidance on the route from study to permanent residency."
        image={images.canada}
        imageAlt="Canadian landscape"
        facts={[["Study", "Study permit and PAL"], ["Funds", "GIC account setup"], ["Family visits", "Visitor visa and Super Visa"], ["After study", "PGWP and Express Entry"]]}
        article={{
            category: "CANADA GUIDE",
            title: "Studying and visiting Canada: permits, PALs and pathways",
            readTime: "5 min read",
            intro: "Canada combines respected institutions with a route from study to work and, for many, permanent residency. Migration policy changes often, so a careful, current approach matters. This guide covers the study permit steps, family visits and the long-term pathway.",
            sections: [
                {
                    heading: "Study permits and the Provincial Attestation Letter",
                    paragraphs: ["A Canadian study permit application starts with admission to a Designated Learning Institution (DLI)."],
                    list: [
                        ["DLI admissions.", "We help you apply to a Designated Learning Institution that fits your goals."],
                        ["Provincial Attestation Letter (PAL).", "We help you procure the PAL that many applications now need."],
                        ["GIC account setup.", "We guide you through opening a Guaranteed Investment Certificate account as part of your funds proof."],
                        ["GCKey portal submission.", "We prepare and submit your application through the GCKey portal."]
                    ]
                },
                {
                    heading: "Visitor visa and Super Visa",
                    paragraphs: ["For family and business travel we prepare tourist visa filings, family sponsorship visits and business delegation permits. We also support the 10-year Super Visa for parents and grandparents."]
                },
                {
                    heading: "From study to permanent residency",
                    paragraphs: [
                        "Canada offers a post-graduation work permit (PGWP) after eligible study, which can lead toward permanent residency through Express Entry.",
                        "Rules and eligibility are updated regularly. We follow the changes and adjust your plan so you are working from current requirements."
                    ],
                    callout: { title: "Plan the whole route early", text: "Your choice of program and institution can affect your options after graduation. Book a consultation before you apply so the study plan and the long-term plan fit together." }
                }
            ]
        }}
    />;
}
