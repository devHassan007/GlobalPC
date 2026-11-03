import { Link } from "react-router-dom";

// Hrefs that start with "/" are routes (client-side navigation); everything else (#anchors, mailto:, tel:, https:) is a plain link.
export default function SmartLink({ href, children, ...props }) {
    if (href.startsWith("/")) return <Link to={href} {...props}>{children}</Link>;
    return <a href={href} {...props}>{children}</a>;
}
