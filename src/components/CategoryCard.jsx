import * as Icons from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
  const Icon = Icons[category.icon] || Icons.Stethoscope;
  return <Link to={`/products?category=${category.id}`} className="group card-surface block h-full p-6 focus-visible:outline-none"><div className="mb-8 flex items-start justify-between"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-medgreen/10 text-medgreen"><Icon size={23} strokeWidth={1.8} /></span><ArrowUpRight size={19} className="text-navy/35 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-medgreen" /></div><h3 className="text-lg font-semibold">{category.name}</h3><p className="mt-3 text-sm leading-6 text-ink/65">{category.description}</p><span className="mt-6 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-navy">Explore therapy</span></Link>;
}
