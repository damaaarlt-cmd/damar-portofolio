import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { experience, process, profile, skills } from '../data/content';
import { Reveal, Star } from './ui';

export function Intro() {
  return (
    <section className="bg-white px-5 py-20 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 md:grid-cols-12">
        <Reveal className="md:col-span-8"><p className="head text-[clamp(2.25rem,6vw,5.5rem)] !leading-[0.98]">I turn ideas, problems and possibilities into <span className="rounded-3xl bg-sun px-3">digital experiences.</span></p></Reveal>
        <Reveal className="md:col-span-3 md:col-start-10" delay={0.1}>
          <Star className="mb-6 h-12 w-12 text-pop md:ml-[40%]" />
          <p className="max-w-xs text-black/70">I combine business thinking, design and technology to create digital experiences that are useful, clear and visually distinctive.</p>
        </Reveal>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="grid-bg bg-brand px-5 py-20 text-white md:px-10 md:py-32">
      <div className="mx-auto max-w-[1440px]">
        <Reveal><h2 className="head stack text-[clamp(2.75rem,10vw,9rem)]">Digital business.<br /><span className="text-sun md:pl-[8%]">Design mindset.</span></h2></Reveal>
        <Reveal delay={0.1} className="mt-12 max-w-xl md:ml-[40%]">
          <p className="text-xl">Digital Business graduate with an interest in UI/UX, digital products, creative technology and data.</p>
          <div className="mt-6 flex flex-wrap gap-2">{['UI/UX', 'Digital products', 'Web', 'Data'].map((t, i) => <span key={t} className={`rounded-full border-2 border-ink px-4 py-2 text-sm font-bold ${i % 2 ? 'bg-pop text-white' : 'bg-sun text-ink'}`}>{t}</span>)}</div>
        </Reveal>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="bg-ink px-5 py-20 text-white md:px-10 md:py-32">
      <div className="mx-auto max-w-[1440px]">
        <Reveal><h2 className="head text-[clamp(2.75rem,8vw,7rem)]">What I <span className="text-sun">use</span></h2></Reveal>
        <div className="mt-12 border-t border-white/20">
          {skills.map(([cat, items], i) => (
            <Reveal key={cat} delay={i * 0.05} className="grid gap-4 border-b border-white/20 py-8 md:grid-cols-[1fr_1.4fr] md:items-center">
              <h3 className="head text-[clamp(1.75rem,4vw,3.5rem)]"><span className="mr-3 text-sm text-pop">{String(i + 1).padStart(2, '0')}</span>{cat}</h3>
              <ul className="flex flex-wrap gap-2">{items.map((s) => <li key={s} className="rounded-full border border-white/30 px-4 py-2 text-sm transition-colors hover:border-sun hover:bg-sun hover:text-ink">{s}</li>)}</ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section className="bg-paper px-5 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1440px]">
        <Reveal><h2 className="head text-[clamp(2.75rem,8vw,7rem)] text-brand">Background</h2></Reveal>
        <ul className="mt-12">
          {experience.map((e, i) => (
            <Reveal key={e.role} delay={i * 0.05}>
              <li className="flex flex-wrap items-center justify-between gap-3 border-t-2 border-ink/10 py-6">
                <div><p className="head text-[clamp(1.5rem,3.5vw,2.75rem)] !leading-none">{e.role}</p>{e.org && <p className="mt-2 text-black/60">{e.org}</p>}</div>
                <span className="rounded-full bg-pop px-4 py-2 text-xs font-bold text-white">{e.type}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="bg-white px-5 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1440px]">
        <Reveal><h2 className="head mb-14 text-[clamp(2.75rem,8vw,7rem)]">How I <span className="text-brand">work</span></h2></Reveal>
        <ol className="grid gap-10 border-l-[3px] border-brand pl-8 md:grid-cols-5 md:gap-6 md:border-l-0 md:border-t-[3px] md:pl-0 md:pt-8">
          {process.map(([t, d], i) => (
            <li key={t} className="relative">
              <span className="absolute -left-[2.6rem] top-1 h-5 w-5 rounded-full bg-sun ring-4 ring-brand md:-top-[2.75rem] md:left-0" />
              <p className="text-xs font-bold text-pop">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="head text-3xl !leading-none">{t}</h3>
              <p className="mt-2 max-w-[15rem] text-sm text-black/70">{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Contact() {
  const reduce = useReducedMotion();
  return (
    <section id="contact" className="grid-bg relative overflow-hidden bg-brand px-5 py-24 text-white md:px-10 md:py-40">
      <motion.div animate={reduce ? {} : { rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }} className="absolute -right-20 top-6 h-60 w-60 text-sun md:-right-12 md:top-10 md:h-96 md:w-96"><Star className="h-full w-full" /></motion.div>
      <div className="relative mx-auto max-w-[1440px]">
        <h2 className="head stack text-[clamp(2.75rem,11.5vw,10rem)]">Let's make<br />something<br /><span className="text-sun">memorable.</span></h2>
        <p className="mt-8 max-w-sm text-lg">Have a project, idea or opportunity? Let's talk.</p>
        <a href={`mailto:${profile.email}`} className="group mt-6 inline-flex min-h-14 items-center gap-3 rounded-full border-2 border-ink bg-sun px-8 text-lg font-bold text-ink transition-transform hover:scale-105">Let's talk <ArrowRight className="transition-transform group-hover:translate-x-1" /></a>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink px-5 py-12 text-white md:px-10">
      <div className="mx-auto grid max-w-[1440px] gap-10 md:grid-cols-3">
        <div><p className="text-2xl font-bold">{profile.name}<span className="text-sun">.</span></p><p className="mt-2 max-w-xs text-sm text-white/60">UI/UX, digital products, web and data.</p></div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm md:flex-col md:gap-y-1">{['Work', 'About', 'Skills', 'Contact'].map((l) => <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-sun">{l}</a>)}</nav>
        <div className="md:text-right">
          <a href={`mailto:${profile.email}`} className="text-xl font-bold hover:text-sun md:text-2xl">{profile.email}</a>
          <div className="mt-4 flex flex-wrap gap-2 md:justify-end">{profile.socials.map(([n, h]) => <a key={n} href={h} className="rounded-full border border-white/30 px-4 py-2 text-sm hover:border-sun hover:text-sun">{n}</a>)}</div>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-[1440px] border-t border-white/10 pt-6 text-xs text-white/50">© 2026 {profile.name}. All rights reserved.</p>
    </footer>
  );
}
