import { ArrowRight } from "lucide-react";
import SmartLink from "./SmartLink";

export default function Button({ children, href = "/#contact", secondary = false, ...props }) {
    return <SmartLink href={href} className={`button ${secondary ? "button-outline" : "button-gold"}`} data-testid={props["data-testid"] || "cta-link"} {...props}>{children}<ArrowRight size={16} /></SmartLink>;
}
