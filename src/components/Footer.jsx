import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import categories from "../data/categories.json";

const links = [["Home", "/"], ["Products", "/products"], ["About", "/about"], ["Contact", "/contact"]];

export default function Footer() {
  return <footer className="bg-navy pt-16 text-white"><div className="container-app grid gap-12 pb-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_.7fr_.9fr_1.15fr]"><div><Logo size={76} /><p className="mt-5 max-w-xs text-sm leading-6 text-white/65">Quality-focused pharmaceutical solutions developed with care for healthier communities.</p></div><div><h2 className="footer-title">Navigation</h2><ul className="footer-list">{links.map(([label, to]) => <li key={to}><Link to={to}>{label}</Link></li>)}</ul></div><div><h2 className="footer-title">Therapeutic areas</h2><ul className="footer-list">{categories.slice(0, 5).map((category) => <li key={category.id}><Link to={`/products?category=${category.id}`}>{category.name}</Link></li>)}</ul></div><div><h2 className="footer-title">Contact</h2><ul className="space-y-4 text-sm text-white/70"><li className="flex gap-3"><Mail size={17} className="mt-0.5 shrink-0 text-medgreen" />info@biohealthpharma.com</li><li className="flex gap-3"><Phone size={17} className="mt-0.5 shrink-0 text-medgreen" />+91 00000 00000</li><li className="flex gap-3"><MapPin size={17} className="mt-0.5 shrink-0 text-medgreen" />India</li></ul></div></div><div className="border-t border-white/10"><div className="container-app flex flex-col gap-3 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} Bio Health Pharma. All rights reserved.</span><span>Trusted pharmaceutical solutions.</span></div></div></footer>;
}
