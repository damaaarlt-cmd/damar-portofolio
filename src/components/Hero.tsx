import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Arrow, Badge, Star } from './ui';
import { profile } from '../data/content';

const lines = [['I DESIGN', '', 'text-white'], ['DIGITAL', 'pl-[10%]', 'text-white'], ['EXPERIENCES', '', 'text-white'], ['THAT GET', 'pl-[8%]', 'text-white'], ['REMEMBERED.', 'pl-[3%]', 'text-sun']];
export default function Hero() {
  const reduce = useReducedMotion();
  const float = reduce ? {} : { y: [0, -10, 0] };
  return (
    <section className="grid-bg relative min-h-screen overflow-hidden bg-brand px-5 pb-12 pt-28 md:px-10 md:pt-32">
      <div className="relative mx-auto max-w-[1440px]">
        <h1 className="head">
          <span className="sr-only">{profile.name}: I design digital experiences that get remembered.</span>
          {lines.map(([t, pad, c], i) => (
            <span key={t} aria-hidden className="-mb-[.06em] block overflow-hidden pb-[.12em] pr-[.1em]">
              <motion.span initial={reduce ? false : { y: '115%' }} animate={{ y: 0 }} transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
                className={`stack block text-[min(11.5vw,9rem)] md:text-[min(9.5vw,9rem)] ${pad} ${c}`}>{t}</motion.span>
            </span>
          ))}
        </h1>
        <motion.div animate={float} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="absolute right-0 top-0 hidden w-48 rotate-6 rounded-[2rem] border-2 border-ink bg-white p-4 text-ink shadow-[4px_4px_0_#2E0070] md:block lg:w-60">
          <div className="grid aspect-[16/9] place-items-center rounded-2xl bg-brand"><Star className="h-10 w-10 text-sun" /></div>
          <p className="mt-3 font-display text-lg font-extrabold leading-none">{profile.name}</p><p className="mt-1 text-xs text-black/60">UI/UX • Digital • Data</p>
        </motion.div>
        <div className="absolute left-[62%] top-[22%] hidden -rotate-12 rounded-full border-2 border-ink bg-pop px-5 py-2 text-sm font-bold text-white shadow-[3px_3px_0_#14001F] md:block">UI/UX + Data</div>
        <Arrow className="absolute left-[72%] top-[60%] hidden h-24 w-12 text-sun md:block" />
        <Star className="absolute right-[3%] top-[44%] hidden h-14 w-14 text-sun md:block" />
        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-md"><p className="text-sm font-bold uppercase tracking-widest text-sun">{profile.role}</p><p className="mt-3 text-lg text-white/90">{profile.intro}</p></div>
          <a href="#work" className="inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-ink bg-sun px-6 text-sm font-bold text-ink transition-transform hover:scale-105">View work <ArrowRight size={16} /></a>
          <Badge />
        </div>
      </div>
    </section>
  );
}
