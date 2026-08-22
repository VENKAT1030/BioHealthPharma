import { ArrowRight, BadgeCheck, Building2, CheckCircle2, FlaskConical, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import categories from "../data/categories.json";
import medicines from "../data/medicines.json";
import CategoryCard from "../components/CategoryCard";
import Counter from "../components/Counter";
import MoleculeBackground from "../components/MoleculeBackground";
import ProductCard from "../components/ProductCard";
import Reveal from "../components/Reveal";
import { fadeUp, staggerContainer } from "../animations/variants";

const strengths = [
  [ShieldCheck, "Quality-focused", "A commitment to dependable pharmaceutical standards."],
  [FlaskConical, "Therapy-led", "Thoughtful product choices across essential care areas."],
  [Building2, "Patient-centred", "Solutions developed with everyday healthcare needs in mind."],
];

export default function Home() {
  const featured = medicines.filter((medicine) => medicine.featured).slice(0, 4);
  const categoryById = Object.fromEntries(categories.map((category) => [category.id, category]));
  return <>
    <section className="relative isolate overflow-hidden bg-navy pb-16 pt-28 text-white md:pb-20 md:pt-32">
      <MoleculeBackground className="-right-28 top-8 w-[580px] text-white/[0.07]" />
      <div className="container-app relative grid items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
        <motion.div initial="hidden" animate="show" variants={staggerContainer(0.13)}>
          <motion.p variants={fadeUp} className="eyebrow text-[#72c76b]">Bio Health Pharma</motion.p>
          <motion.h1 variants={fadeUp} style={{ color: "#ffffff" }} className="mt-4 max-w-2xl text-3xl font-medium leading-[1.2] sm:text-4xl lg:text-5xl">Reliable care, thoughtfully delivered.</motion.h1>
          <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">A quality-focused pharmaceutical company helping healthcare professionals and patients access trusted therapeutic solutions.</motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-4"><Link to="/products" className="btn-primary bg-medgreen hover:bg-[#338839]">Explore medicines <ArrowRight size={17} /></Link><Link to="/about" className="btn-secondary border-white/30 bg-transparent text-white hover:border-white hover:text-white">Our commitment</Link></motion.div>
        </motion.div>
        <Reveal className="relative mx-auto w-full max-w-sm lg:justify-self-end"><div className="absolute -inset-6 rounded-[2.5rem] bg-medgreen/15 blur-2xl" /><div className="relative rounded-[2rem] border border-white/15 bg-white/10 p-7 shadow-2xl backdrop-blur-sm"><div className="rounded-2xl bg-white p-3"><img src="/bio-health-pharma-logo.png" alt="Bio Health Pharma logo" className="mx-auto w-full max-w-[250px] rounded-lg" /></div><p className="mt-6 text-center text-xs font-semibold uppercase tracking-[.18em] text-[#72c76b]">Built on trusted care</p><div className="mt-5 grid grid-cols-2 gap-3 border-t border-white/15 pt-5"><div className="rounded-xl bg-white/5 p-3"><BadgeCheck className="text-[#72c76b]" size={19} /><p className="mt-3 text-sm font-medium text-white">Quality-focused</p></div><div className="rounded-xl bg-white/5 p-3"><ShieldCheck className="text-[#72c76b]" size={19} /><p className="mt-3 text-sm font-medium text-white">Patient-centred</p></div></div></div></Reveal>
      </div>
    </section>

    <section className="border-b border-line bg-white"><div className="container-app grid grid-cols-2 divide-x divide-line md:grid-cols-4">{[["16", "Products in catalogue"], ["8", "Therapeutic areas"], ["100", "Quality-focused care"], ["1", "Trusted partner"]].map(([value, label]) => <div key={label} className="px-4 py-8 text-center sm:px-6"><Counter to={Number(value)} suffix={value === "100" ? "%" : "+"} className="font-heading text-3xl font-semibold text-navy" /><p className="mt-1 text-xs text-ink/60">{label}</p></div>)}</div></section>

    <section className="section-pad"><div className="container-app grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><Reveal><p className="eyebrow">Our approach</p><h2 className="mt-4 max-w-md text-3xl font-semibold leading-tight sm:text-4xl">Healthcare begins with dependable choices.</h2></Reveal><Reveal delay={0.1}><div className="space-y-5 text-base leading-8 text-ink/70"><p>Bio Health Pharma brings a measured, quality-conscious approach to pharmaceutical care. Our product portfolio is shaped around practical therapeutic needs and clear product information.</p><p>We believe trust is earned through consistency - in every formulation, every interaction, and every step towards better health.</p><Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-medgreen">Learn about Bio Health Pharma <ArrowRight size={16} /></Link></div></Reveal></div></section>

    <section className="section-pad bg-[#f3f7f6]"><div className="container-app"><Reveal><p className="eyebrow">Therapeutic areas</p><div className="mt-3 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><h2 className="max-w-xl text-3xl font-semibold sm:text-4xl">Focused care across key health needs.</h2><Link to="/products" className="text-sm font-semibold text-navy hover:text-medgreen">View all medicines</Link></div></Reveal><motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: .15 }} variants={staggerContainer(.08)} className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{categories.map((category) => <motion.div variants={fadeUp} key={category.id}><CategoryCard category={category} /></motion.div>)}</motion.div></div></section>

    <section className="section-pad"><div className="container-app"><Reveal><p className="eyebrow">Featured medicines</p><div className="mt-3 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><h2 className="text-3xl font-semibold sm:text-4xl">Explore our product portfolio.</h2><Link to="/products" className="text-sm font-semibold text-navy hover:text-medgreen">Browse products</Link></div></Reveal><div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{featured.map((medicine) => <Reveal key={medicine.id}><ProductCard medicine={medicine} category={categoryById[medicine.category]} /></Reveal>)}</div></div></section>

    <section className="section-pad bg-navy text-white"><div className="container-app"><Reveal><p className="eyebrow text-[#72c76b]">Why Bio Health Pharma</p><h2 className="mt-4 max-w-2xl text-3xl font-semibold text-white sm:text-4xl">A professional standard of care, from portfolio to partnership.</h2></Reveal><div className="mt-12 grid gap-8 md:grid-cols-3">{strengths.map(([Icon, title, text]) => <Reveal key={title}><div className="border-t border-white/15 pt-6"><Icon className="text-[#72c76b]" size={28} strokeWidth={1.6} /><h3 className="mt-5 text-xl font-semibold text-white">{title}</h3><p className="mt-3 leading-7 text-white/65">{text}</p></div></Reveal>)}</div></div></section>

    <section className="section-pad"><Reveal className="container-app"><div className="rounded-[2rem] bg-medgreen px-7 py-12 text-center text-white sm:px-12 md:py-16"><CheckCircle2 className="mx-auto" size={28} /><h2 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold text-white sm:text-4xl">Looking for a reliable pharmaceutical partner?</h2><p className="mx-auto mt-4 max-w-xl leading-7 text-white/80">Connect with our team to learn more about our products and therapeutic areas.</p><Link to="/contact" className="btn-secondary mt-8 border-white bg-white text-navy hover:border-white hover:text-navy">Contact us <ArrowRight size={17} /></Link></div></Reveal></section>
  </>;
}
