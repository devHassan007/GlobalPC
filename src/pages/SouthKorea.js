import DestinationPage from "../components/DestinationPage";
import { images } from "../data/siteData";

export default function SouthKorea() {
    return <DestinationPage
        name="South Korea"
        eyebrow="OUR SIGNATURE DESTINATION"
        title="Study, work and settle in"
        titleEm="South Korea."
        lead="University admissions, visa filings and scholarship applications, handled from your first consultation to your arrival in Korea."
        image={images.korea}
        imageAlt="Seoul city view from Namsan Tower"
        facts={[["Study visas", "D-2 and D-4 categories"], ["Scholarship", "Global Korea Scholarship (GKS)"], ["Work visas", "E-7, D-10 and F-2-R"], ["After you land", "ARC, housing and bank setup"]]}
        article={{
            category: "SOUTH KOREA GUIDE",
            title: "Studying and working in South Korea: a complete guide",
            readTime: "8 min read",
            intro: "South Korea offers affordable tuition, generous scholarships, a strong route from study into work, and a safe environment to live in. This guide walks through the study visas, the Global Korea Scholarship, the work and residency visas, and the documents you should start preparing now.",
            sections: [
                {
                    heading: "Why students choose South Korea",
                    paragraphs: [
                        "South Korea is one of the leading study destinations in Asia. Tuition is affordable compared with many Western countries, scholarships are widely available, and graduates can move into skilled work through a defined visa path.",
                        "We manage university admissions, visa applications and scholarship filings for South Korea, so one team follows your file from the first conversation until you arrive."
                    ]
                },
                {
                    heading: "Study pathways and visa categories",
                    paragraphs: ["Korean study visas are grouped by the level of program you join. Choosing the right category at the start saves time later."],
                    list: [
                        ["D-4-1 Korean language training.", "One to two years at a university-affiliated language institute. It is an ideal foundation for the TOPIK exam and a smooth move into a degree."],
                        ["D-2-1 Associate degree and vocational study.", "Placement in technical colleges offering practical engineering, hospitality, IT and automotive design degrees, with industry internships."],
                        ["D-2-2 Bachelor's degree.", "Four-year undergraduate admission in English-taught tracks (IELTS 5.5 or higher) or Korean-taught tracks (TOPIK Level 3 or higher), across STEM and business fields."],
                        ["D-2-3 and D-2-4 Master's and doctorate.", "Research-focused graduate placements, professor lab invitations, research and teaching assistantships (RA/TA) and tuition-waiver scholarships."],
                        ["D-2-6 Exchange and dual degree.", "Short academic exchanges and dual-degree transfers with credit recognition."]
                    ]
                },
                {
                    heading: "Study visa reference chart",
                    paragraphs: ["Use this chart as a starting point when you compare programs. Your exact requirements depend on the university and the embassy."],
                    table: {
                        head: ["Visa code", "Program level", "Language", "Minimum bank proof", "Processing"],
                        rows: [
                            ["D-4-1", "Language institute", "None required", "USD 10,000 (Korean bank / local)", "4 to 8 weeks"],
                            ["D-2-1", "Associate degree", "TOPIK 2 or IELTS 5.0", "USD 10,000 to 15,000", "4 to 6 weeks"],
                            ["D-2-2", "Undergraduate (BS/BA)", "TOPIK 3 or IELTS 5.5", "USD 16,000 to 20,000", "4 to 6 weeks"],
                            ["D-2-3", "Master's (MS/MA)", "TOPIK 4 or IELTS 6.0", "USD 16,000 to 20,000", "3 to 5 weeks"],
                            ["D-2-4", "Doctorate (PhD)", "TOPIK 4 or IELTS 6.5", "USD 16,000 to 20,000", "3 to 5 weeks"]
                        ],
                        note: "Financial amounts and processing windows are indicative and can change by university and embassy. We confirm them in writing at your initial audit."
                    }
                },
                {
                    heading: "The Global Korea Scholarship (GKS)",
                    paragraphs: [
                        "The Global Korea Scholarship can cover full tuition, a monthly stipend and airfare. There is an Embassy track and a University track, and both need a carefully prepared application.",
                        "We guide you through each track end to end: understanding the program, preparing documents and drafting your study plan. Selection is decided by the relevant authorities, so we never promise an outcome."
                    ]
                },
                {
                    heading: "Working in South Korea",
                    paragraphs: ["After your studies, or if you are applying as a skilled professional, there are several work and residency routes."],
                    list: [
                        ["E-7-1 Special occupation professional.", "A work visa for IT engineers, software architects, corporate executives, natural science researchers and foreign trade specialists hired by registered Korean firms."],
                        ["E-7-4 K-Point skilled worker transition.", "A points-based route that lets general workforce (E-9 and E-10) holders move to long-term skilled status, based on salary, age and TOPIK score."],
                        ["D-10-1 Job seeker visa.", "A points-based visa (60 out of 190 points minimum) for overseas degree holders and Korean university graduates looking for work."],
                        ["F-2-R Regional specialized residency.", "A five-year residency visa for foreign talent willing to live and work in designated population-declining regions."],
                        ["C-3-1 and C-3-9 Business and short visitor.", "Short stays for trade conferences, corporate consultations, machinery procurement and travel."],
                        ["F-3 Family dependent visa.", "Family reunification for spouses and minor children of E-7, D-2 (doctorate) and F-2 visa holders."]
                    ]
                },
                {
                    heading: "How the E-7-4 K-Point matrix works",
                    paragraphs: ["The E-7-4 route scores applicants across four areas. Understanding the weighting early helps you decide where to improve your profile."],
                    table: {
                        head: ["Criteria", "Maximum points", "Key requirement"],
                        rows: [
                            ["Annual income", "120 points", "Taxable income proof over the past one to two years in Korea."],
                            ["Korean language (TOPIK / KIIP)", "30 points", "TOPIK Level 2 to 5+, or the Korea Immigration and Integration Program (KIIP)."],
                            ["Age", "25 points", "Highest points go to applicants aged 18 to 35."],
                            ["Work experience and recommendation", "35 points", "Years of service in Korea plus a Korean Ministry or Governor recommendation."]
                        ],
                        note: "Scoring rules are set by the Korean authorities and are updated from time to time."
                    }
                },
                {
                    heading: "Documents to prepare",
                    list: [
                        ["Education:", "Matric, FSc or degree certificates, apostilled or attested through MOFA."],
                        ["Finance:", "A bank statement of USD 10,000 to 20,000 depending on the program, plus proof of the source of income."],
                        ["Legalization:", "Korean Embassy verification seal on your attested documents."]
                    ],
                    callout: { title: "Our service does not end at visa issuance", text: "We help with alien registration card (ARC) booking, housing and lease guidance, bank account setup and Korean immigration extension filings, so you can settle in with confidence." }
                },
                {
                    heading: "How we work with you",
                    paragraphs: ["Every South Korea file follows the same five stages: an initial audit of your marks, IELTS or TOPIK results and budget; placement with a university or employer; attestation; embassy filing with a bank audit, SOP and mock interview; and pre-departure help with ticketing, housing and currency exchange."]
                }
            ]
        }}
    />;
}
