import { useEffect } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { CONSULT_MAIL, destinations } from "../data/siteData";
import Header from "./Header";
import Footer from "./Footer";
import Button from "./Button";
import SmartLink from "./SmartLink";
import "../destination.css";

const idFor = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// Shared layout for every page in src/pages. Each page file only supplies its content.
// article.sections: [{ heading, paragraphs?, list?, table?: { head, rows, note? }, callout?: { title, text } }]
// list items: "plain text" or ["Bold lead-in", "rest of the sentence"]
export default function DestinationPage({ name, eyebrow, title, titleEm, lead, image, imageAlt, facts = [], article, mailSubject }) {
    useEffect(() => { document.title = `${name} | Global Pass Consultants`; }, [name]);
    const index = destinations.findIndex(([n]) => n === name);
    const others = [1, 2, 3, 4].map((step) => destinations[(index + step) % destinations.length]);
    const mail = `mailto:tahiracca11@gmail.com?subject=${encodeURIComponent(mailSubject || `${name} Enquiry`)}`;

    return <div className="site-shell">
        <Header />
        <main id="top" className="dest-main">
            <section className="dest-hero" data-testid="destination-hero">
                <img className="hero-image" src={image} alt={imageAlt || `${name} destination`} />
                <div className="hero-shade" />
                <div className="container dest-hero-content">
                    <nav className="breadcrumb" aria-label="Breadcrumb"><SmartLink href="/">Home</SmartLink><span>/</span><SmartLink href="/#destinations">Destinations</SmartLink><span>/</span><b>{name}</b></nav>
                    <p className="eyebrow light"><span /> {eyebrow}</p>
                    <h1>{title} <em>{titleEm}</em></h1>
                    <p className="hero-copy">{lead}</p>
                    <div className="hero-actions"><Button href={mail} data-testid="destination-consultation-button">Book a Consultation</Button><a className="text-link light-link" href="#article">Read the guide <ArrowRight size={17} /></a></div>
                </div>
            </section>

            {facts.length > 0 && <section className="dest-facts" data-testid="destination-facts"><div className="container dest-facts-grid">{facts.map(([label, value]) => <div key={label}><small>{label}</small><strong>{value}</strong></div>)}</div></section>}

            <section className="section dest-article-section" id="article">
                <div className="container dest-article">
                    <header className="article-head">
                        <p className="eyebrow"><span /> {article.category || "THE GUIDE"}</p>
                        <h2>{article.title}</h2>
                        <p className="article-meta">{article.readTime} · By Global Pass Consultants</p>
                        <p className="article-intro">{article.intro}</p>
                        <nav className="article-toc" aria-label="In this guide"><h3>In this guide</h3><ol>{article.sections.map((s) => <li key={s.heading}><a href={`#${idFor(s.heading)}`}>{s.heading}</a></li>)}</ol></nav>
                    </header>

                    {article.sections.map((s) => <section className="article-block" id={idFor(s.heading)} key={s.heading}>
                        <h3>{s.heading}</h3>
                        {s.paragraphs?.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
                        {s.list && <ul className="article-list">{s.list.map((item) => Array.isArray(item) ? <li key={item[0]}><strong>{item[0]}</strong> {item[1]}</li> : <li key={item}>{item}</li>)}</ul>}
                        {s.table && <div className="table-wrap"><table><thead><tr>{s.table.head.map((h) => <th key={h}>{h}</th>)}</tr></thead><tbody>{s.table.rows.map((row) => <tr key={row[0]}>{row.map((cell, i) => i === 0 ? <th scope="row" key={cell}>{cell}</th> : <td key={cell + i}>{cell}</td>)}</tr>)}</tbody></table>{s.table.note && <p className="table-note">{s.table.note}</p>}</div>}
                        {s.callout && <aside className="article-callout"><strong>{s.callout.title}</strong><p>{s.callout.text}</p></aside>}
                    </section>)}

                    <p className="article-disclaimer">{article.disclaimer || "This guide is for general information. Requirements, fees and processing times are set by each university, embassy and government authority and can change, so we confirm current figures in writing at your initial audit."}</p>
                </div>
            </section>

            <section className="dest-cta" data-testid="destination-cta"><div className="container final-cta-inner"><p className="eyebrow light"><span /> YOUR NEXT CHAPTER</p><h2>Planning your move to <em>{name}?</em></h2><p>Tell us about your goals and we will outline the pathways that may suit you, and the documents to prepare.</p><div className="hero-actions"><Button href={mail} data-testid="destination-cta-button">Book a Consultation</Button><a className="text-link light-link" href="tel:+923007277495">Call +92 300 7277495 <ArrowRight size={17} /></a></div></div></section>

            <section className="section dest-more"><div className="container"><div className="section-head"><div><p className="eyebrow"><span /> KEEP EXPLORING</p><h2>Other <em>destinations.</em></h2></div><SmartLink className="text-link" href="/#destinations">All destinations <ArrowRight size={17} /></SmartLink></div>
                <div className="destination-list" style={{ "--cols": 4 }}>{others.map(([n, copy, img, href]) => <SmartLink className="destination-card" href={href} key={n}><img src={img} alt={`${n} destination`} /><div><h3>{n}</h3><p>{copy}</p></div><ArrowUpRight size={17} /></SmartLink>)}</div>
            </div></section>
        </main>
        <Footer />
    </div>;
}