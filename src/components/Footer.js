import socialIconPaths from "../socialIcons";
import { LOGO, socials } from "../data/siteData";
import "../logo.css";
import SmartLink from "./SmartLink";

function SocialIcon({ name }) {
    return <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true" focusable="false"><path d={socialIconPaths[name]} /></svg>;
}

export default function Footer() {
    return <footer className="footer" data-testid="footer">
        <div className="container footer-grid">
            <div className="footer-brand">
                <SmartLink href="/" className="brand" data-testid="footer-brand-link"><span className="brand-mark"><img src={LOGO} alt="Global Pass Consultants" /></span></SmartLink>
                <p>Helping you navigate global opportunities with clarity, care, and confidence.</p>
                <div className="footer-sister"><small>SISTER COMPANY</small><strong>Marsos Business Management</strong></div>
            </div>
            <div>
                <h4>Explore</h4>
                <SmartLink href="/#about" data-testid="footer-about-link">About us</SmartLink>
                <SmartLink href="/#services" data-testid="footer-services-link">Services</SmartLink>
                <SmartLink href="/#destinations" data-testid="footer-destinations-link">Destinations</SmartLink>
                <SmartLink href="/#insights" data-testid="footer-insights-link">Insights</SmartLink>
            </div>
            <div>
                <h4>Connect</h4>
                <a href="tel:+923007277495" data-testid="footer-phone-one">+92 300 7277495</a>
                <a href="tel:+923016640828" data-testid="footer-phone-two">+92 301 6640828</a>
                <a href="mailto:tahiracca11@gmail.com" data-testid="footer-email">tahiracca11@gmail.com</a>
                <p className="address" data-testid="footer-address">Hafizabad Road, Pindi Bhattian,<br />Punjab, Pakistan</p>
                <div className="footer-social" data-testid="footer-social">{socials.map(([label, icon, href]) => <a key={label} className="social-link" href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label} data-testid={`social-${icon}`}><SocialIcon name={icon} /></a>)}</div>
            </div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Global Pass Consultants. All rights reserved.</span><span><SmartLink href="/#contact" data-testid="privacy-link">Privacy Policy</SmartLink><SmartLink href="/#contact" data-testid="terms-link">Terms & Conditions</SmartLink></span></div>
    </footer>;
}
