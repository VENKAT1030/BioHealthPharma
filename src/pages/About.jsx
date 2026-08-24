import { Award, HeartHandshake, ShieldCheck, Target } from "lucide-react";
import Reveal from "../components/Reveal";

const principles = [[Target, "Our mission", "To contribute to better healthcare through dependable pharmaceutical solutions and responsible partnerships."], [HeartHandshake, "Our vision", "To be a trusted name in healthcare, recognised for quality, integrity and patient-centred thinking."], [ShieldCheck, "Quality focus", "We value consistency, clear information and standards that support confidence in every product."], [Award, "Our commitment", "We strive to serve therapeutic needs with professionalism, care and long-term accountability."]];

export default function About() {
  return <main className="bg-surface pb-24 pt-20">
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <div className="container-app grid items-center gap-10 py-16 md:py-20 lg:grid-cols-[1.15fr_.85fr]">
        <Reveal><p className="eyebrow text-[#72c76b]">About us</p><h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl">A dependable partner in everyday healthcare.</h1><p className="mt-6 max-w-2xl leading-8 text-white/70">BIOHEALTH PHARMA is built around a clear purpose: to offer pharmaceutical solutions with care, responsibility and a strong quality focus.</p></Reveal>
        <Reveal delay={.12} className="hidden lg:block"><div className="relative mx-auto max-w-sm rounded-[2rem] border border-white/15 bg-white/[.07] p-7 shadow-2xl"><div className="absolute -right-7 -top-7 h-28 w-28 rounded-full border border-[#72c76b]/40" /><div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-medgreen/15 blur-2xl" /><div className="relative rounded-2xl bg-white p-5"><img src="/bio-health-pharma-logo.png" alt="BIOHEALTH PHARMA logo" className="mx-auto w-full max-w-[240px]" /></div><p className="relative mt-5 text-center text-xs font-semibold uppercase tracking-[.18em] text-[#72c76b]">Trusted pharmaceutical solutions</p></div></Reveal>
      </div>
    </section>
    <section className="section-pad"><div className="container-app grid gap-12 lg:grid-cols-[.85fr_1.15fr]"><Reveal><p className="eyebrow">Who we are</p><h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">Healthcare deserves clarity, consistency and care.</h2></Reveal><Reveal delay={.1}><div className="space-y-5 leading-8 text-ink/70"><p>We present a focused portfolio across important therapeutic areas, with product information designed to be clear and accessible for healthcare professionals and patients.</p><p>Our work is guided by long-term thinking: listening to healthcare needs, maintaining a professional standard of service, and building trust through every interaction.</p></div></Reveal></div></section>
    <section className="section-pad bg-[#f3f7f6]"><div className="container-app"><Reveal><p className="eyebrow">What guides us</p><h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Principles that shape our work.</h2></Reveal><div className="mt-10 grid gap-5 sm:grid-cols-2">{principles.map(([Icon, title, copy]) => <Reveal key={title}><div className="card-surface h-full p-7"><Icon className="text-medgreen" size={28} strokeWidth={1.6} /><h3 className="mt-6 text-xl font-semibold">{title}</h3><p className="mt-3 leading-7 text-ink/65">{copy}</p></div></Reveal>)}</div></div></section>
  </main>;
}
