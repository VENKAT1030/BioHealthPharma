import { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Search, X } from "lucide-react";
import Logo from "./Logo";
import medicines from "../data/medicines.json";
import { easeOut } from "../animations/variants";

const LINKS = [{ to: "/", label: "Home" }, { to: "/products", label: "Products" }, { to: "/about", label: "About" }, { to: "/contact", label: "Contact" }];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const suggestions = useMemo(() => {
    const term = query.trim().toLowerCase();
    return term ? medicines.filter((medicine) => `${medicine.name} ${medicine.composition}`.toLowerCase().includes(term)).slice(0, 6) : [];
  }, [query]);

  useEffect(() => { if (searchOpen) inputRef.current?.focus(); }, [searchOpen]);
  const closeSearch = () => { setSearchOpen(false); setMobileOpen(false); setQuery(""); };
  const submitSearch = (event) => { event.preventDefault(); if (!query.trim()) return; navigate(`/products?q=${encodeURIComponent(query.trim())}`); closeSearch(); };
  const openMedicine = (medicine) => { navigate(`/products/${medicine.id}`); closeSearch(); };

  return <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-white/95 shadow-glass backdrop-blur-md">
    <div className="container-app flex h-20 items-center justify-between">
      <div className="rounded-lg bg-white p-1"><Logo linked size={42} /></div>
      <nav className="hidden items-center gap-10 md:flex">{LINKS.map((link) => <NavLink key={link.to} to={link.to} end={link.to === "/"} className={({ isActive }) => `relative text-sm font-medium transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:bg-medgreen after:transition-all ${isActive ? "after:w-full text-navy" : "after:w-0 text-ink/70 hover:text-navy hover:after:w-full"}`}>{link.label}</NavLink>)}</nav>
      <div className="relative flex items-center gap-3">
        <div className="hidden items-center md:flex"><AnimatePresence initial={false}>{searchOpen && <motion.div initial={{ width: 0, opacity: 0 }} animate={{ width: 280, opacity: 1 }} exit={{ width: 0, opacity: 0 }} transition={{ duration: .3, ease: easeOut }} className="relative mr-2"><form onSubmit={submitSearch}><input ref={inputRef} value={query} onChange={(event) => setQuery(event.target.value)} onBlur={() => window.setTimeout(() => setSearchOpen(false), 160)} placeholder="Search medicines..." className="w-full rounded-full border border-line bg-white px-4 py-2 text-sm outline-none focus:border-medgreen" /></form><Suggestions items={suggestions} onChoose={openMedicine} className="left-0 top-12 w-full" /></motion.div>}</AnimatePresence><button onClick={() => setSearchOpen((open) => !open)} aria-label="Search medicines" className="flex h-10 w-10 items-center justify-center rounded-full text-navy transition hover:bg-black/5"><Search size={18} /></button></div>
        <button onClick={() => setMobileOpen((open) => !open)} aria-label="Toggle menu" className="flex h-10 w-10 items-center justify-center rounded-full text-navy transition hover:bg-black/5 md:hidden">{mobileOpen ? <X size={22} /> : <Menu size={22} />}</button>
      </div>
    </div>
    <AnimatePresence>{mobileOpen && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .35, ease: easeOut }} className="overflow-visible border-t border-line bg-white md:hidden"><div className="container-app flex flex-col gap-1 py-4">{LINKS.map((link) => <NavLink key={link.to} to={link.to} end={link.to === "/"} onClick={() => setMobileOpen(false)} className={({ isActive }) => `rounded-lg px-3 py-3 text-sm font-medium ${isActive ? "bg-medgreen/10 text-medgreen" : "text-ink"}`}>{link.label}</NavLink>)}<div className="relative mt-2 px-3"><form onSubmit={submitSearch} className="flex items-center gap-2"><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search medicines..." className="w-full rounded-full border border-line px-4 py-2.5 text-sm outline-none focus:border-medgreen" /><button type="submit" aria-label="Submit search" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-white"><Search size={16} /></button></form><Suggestions items={suggestions} onChoose={openMedicine} className="left-3 right-3 top-14" /></div></div></motion.div>}</AnimatePresence>
  </header>;
}

function Suggestions({ items, onChoose, className }) {
  if (!items.length) return null;
  return <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className={`absolute z-[70] overflow-hidden rounded-xl border border-line bg-white py-2 shadow-lg ${className}`}><p className="px-4 py-2 text-[10px] font-semibold uppercase tracking-[.14em] text-ink/45">Matching medicines</p>{items.map((medicine) => <button type="button" key={medicine.id} onMouseDown={(event) => event.preventDefault()} onClick={() => onChoose(medicine)} className="block w-full px-4 py-2.5 text-left transition hover:bg-medgreen/10"><span className="block text-sm font-semibold text-navy">{medicine.name}</span><span className="mt-0.5 block truncate text-xs text-ink/55">{medicine.composition}</span></button>)}</motion.div>;
}
