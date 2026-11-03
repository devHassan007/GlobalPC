import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// New page: jump to the top. Link with a #hash: scroll to that section once the page has rendered.
export default function ScrollManager() {
    const { pathname, hash } = useLocation();
    useEffect(() => {
        if (hash) {
            const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" }), 50);
            return () => clearTimeout(t);
        }
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, [pathname, hash]);
    return null;
}
