import { Link } from "react-router-dom";

export default function Logo({ size = 48, linked = false, className = "" }) {
  const content = (
    <img
      src="/bio-health-pharma-logo.png"
      alt="Bio Health Pharma"
      className={`block h-auto w-auto max-w-full rounded-md ${className}`}
      style={{ height: size }}
    />
  );

  if (!linked) return content;

  return <Link to="/" aria-label="Bio Health Pharma home" className="inline-flex">{content}</Link>;
}
