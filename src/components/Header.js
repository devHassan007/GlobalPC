import { useEffect, useState } from "react";
import { ChevronDown, Menu, Sparkles, X } from "lucide-react";
import { CONSULT_LINK, LOGO, navItems } from "../data/siteData";
import "../logo.css";
import SmartLink from "./SmartLink";
import Button from "./Button";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [mobileGroup, setMobileGroup] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", fn);
        return () => window.removeEventListener("scroll", fn);
    }, []);
    const closeMenu = () => setMenuOpen(false);

    return <>
        <div className="announcement" data-testid="announcement-bar"><span><Sparkles size={14} /> Your global journey starts here</span><span className="announcement-note">Personalized guidance. Clear direction. Global possibilities.</span></div>
        <header className={`site-header ${scrolled ? "is-scrolled" : ""}`} data-testid="site-header">
            <SmartLink href="/" className="brand" data-testid="brand-link"><span className="brand-mark"><img src={LOGO} alt="Global Pass Consultants" /></span></SmartLink>
            <nav className="desktop-nav" aria-label="Primary navigation">
                {navItems.map(({ label, href, children }) => <div className="nav-item" key={label}>
                    <SmartLink href={href} className="nav-link" data-testid={`nav-${label.toLowerCase()}`}>{label}<ChevronDown size={12} /></SmartLink>
                    <div className="nav-dropdown" data-testid={`nav-dropdown-${label.toLowerCase()}`}>{children.map(([childLabel, childHref]) => <SmartLink key={childLabel} href={childHref}>{childLabel}</SmartLink>)}</div>
                </div>)}
            </nav>
            <Button href={CONSULT_LINK} data-testid="header-consultation-button">Book a Consultation</Button>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} data-testid="mobile-menu-button">{menuOpen ? <X /> : <Menu />}</button>
            {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">
                {navItems.map(({ label, href, children }) => {
                    const key = label.toLowerCase();
                    const open = mobileGroup === label;
                    return <div className={`mobile-group ${open ? "is-open" : ""}`} key={label}>
                        <div className="mobile-group-head">
                            <SmartLink onClick={closeMenu} href={href} data-testid={`mobile-nav-${key}`}>{label}</SmartLink>
                            <button type="button" onClick={() => setMobileGroup(open ? null : label)} aria-expanded={open} aria-label={`${open ? "Collapse" : "Expand"} ${label} menu`} data-testid={`mobile-toggle-${key}`}><ChevronDown size={16} /></button>
                        </div>
                        {open && <div className="mobile-sub" data-testid={`mobile-dropdown-${key}`}>{children.map(([childLabel, childHref]) => <SmartLink onClick={closeMenu} key={childLabel} href={childHref}>{childLabel}</SmartLink>)}</div>}
                    </div>;
                })}
                <Button href={CONSULT_LINK} data-testid="mobile-consultation-button">Book a Consultation</Button>
            </nav>}
        </header>
    </>;
}