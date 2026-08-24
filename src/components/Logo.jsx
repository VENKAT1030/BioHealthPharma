import { Link } from "react-router-dom";

export default function Logo({ size = 48, linked = false, className = "" }) {
  const content = (
    <img
      src="/bio-health-pharma-logo.png"
      alt="BIOHEALTH PHARMA"
      className={`block h-auto w-auto max-w-full rounded-md ${className}`}
      style={{ height: size }}
    />
  );

  if (!linked) return content;

  return <Link to="/" aria-label="BIOHEALTH PHARMA home" className="inline-flex">{content}</Link>;
}
