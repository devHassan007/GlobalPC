import { useEffect, useState } from "react";
import "../splash.css";

const TOTAL_MS = 5000; // how long the logo screen stays up
const FADE_MS = 600;   // fade-out at the end (included in TOTAL_MS)

// Full-screen logo screen shown on every page load. `onDone` is called when it has finished fading out.
export default function Splash({ onDone }) {
    const [leaving, setLeaving] = useState(false);

    useEffect(() => {
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const fade = setTimeout(() => setLeaving(true), TOTAL_MS - FADE_MS);
        const done = setTimeout(onDone, TOTAL_MS);
        return () => { clearTimeout(fade); clearTimeout(done); document.body.style.overflow = prev; };
    }, [onDone]);

    return <div className={`splash ${leaving ? "is-leaving" : ""}`} role="status" aria-label="Loading Global Pass Consultants" data-testid="splash-screen" style={{ "--splash-ms": `${TOTAL_MS}ms`, "--fade-ms": `${FADE_MS}ms` }}>
        <div className="splash-logo">
            <div className="splash-mark">
                <svg viewBox="0 0 84 84" aria-hidden="true"><rect x="2" y="2" width="80" height="80" pathLength="1" /></svg>
                <span>GP</span>
            </div>
            <div className="splash-name">GLOBAL PASS</div>
            <div className="splash-sub">CONSULTANTS</div>
        </div>
        <div className="splash-bar" aria-hidden="true"><i /></div>
    </div>;
}
