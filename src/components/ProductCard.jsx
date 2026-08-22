import { ArrowRight, ImageOff } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProductCard({ medicine, category }) {
  const [imageError, setImageError] = useState(false);
  return <article className="group card-surface flex h-full flex-col overflow-hidden"><div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-[#edf3f4] p-7">{!imageError ? <img src={medicine.image} alt={medicine.name} onError={() => setImageError(true)} className="h-full w-full object-contain transition duration-500 group-hover:scale-105" /> : <div className="flex flex-col items-center gap-3 text-center text-navy/45"><ImageOff size={28} strokeWidth={1.5} /><span className="max-w-36 text-xs font-medium">Product image coming soon</span></div>}<span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-navy shadow-sm">{category?.name || "Medicine"}</span></div><div className="flex flex-1 flex-col p-6"><p className="text-xs font-medium text-medgreen">{medicine.composition}</p><h3 className="mt-2 text-xl font-semibold">{medicine.name}</h3><p className="mt-3 text-sm leading-6 text-ink/65">{medicine.dosageForm}</p><Link to={`/products/${medicine.id}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-medgreen">View details <ArrowRight size={16} /></Link></div></article>;
}
