import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Arrow, Badge, Star } from './ui';
import { profile } from '../data/content';

const lines = [['I DESIGN', '', 'text-white'], ['DIGITAL', 'pl-[10%]', 'text-white'], ['EXPERIENCES', '', 'text-white'], ['THAT GET', 'pl-[8%]', 'text-white'], ['REMEMBERED.', 'pl-[3%]', 'text-sun']];

function ProfileCard({ className = '' }: { className?: string }) {
  const [bad, setBad] = useState(false);
  return (
    <div className={`rounded-[2rem] border-2 border-ink bg-white p-3 text-ink shadow-[4px_4px_0_#2E0070] ${className}`}>
      <div className="grid aspect-square place-items-center overflow-hidden rounded-2xl bg-brand">
        {profile.photo && !bad
          ? <img src={profile.photo} alt={profile.name} onError={() => setBad(true)} className="h-full w-full object-cover object-top" />
          : <Star className="h-10 w-10 text-sun" />}
      </div>
      <p className="mt-3 font-display text-base font-extrabold leading-none md:text-lg">{profile.name}</p>
      <p className="mt-1 text-xs text-black/60">UI/UX • Digital • Data</p>
    </div>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const float = reduce ? {} : { y: [0, -10, 0] };
  return (
    <section className="grid-bg relative overflow-hidden bg-brand px-5 pb-12 pt-28 md:min-h-screen md:px-10 md:pt-32">
      <div className="relative mx-auto max-w-[1440px]">
        <motion.div animate={float} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="mx-auto mb-8 w-44 rotate-3 md:hidden"><ProfileCard /></motion.div>
        <h1 className="head relative">
          <span className="sr-only">{profile.name}: I design digital experiences that get remembered.</span>
          {lines.map(([t, pad, c], i) => (
            <span key={t} aria-hidden className="-mb-[.06em] block overflow-hidden pb-[.12em] pr-[.1em]">
              <motion.span initial={reduce ? false : { y: '115%' }} animate={{ y: 0 }} transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
                className={`stack block text-[min(11.5vw,9rem)] md:text-[min(9.5vw,9rem)] ${pad} ${c}`}>{t}</motion.span>
            </span>
          ))}
          <span aria-hidden className="absolute left-1/2 top-[40%] z-10 -translate-x-1/2 -translate-y-1/2 -rotate-6 rounded-full border-2 border-ink bg-pop px-3 py-1.5 font-sans text-xs font-bold normal-case leading-none tracking-normal text-white shadow-[3px_3px_0_#14001F] md:-rotate-12 md:px-5 md:py-2 md:text-sm">UI/UX + Data</span>
        </h1>
        <motion.div animate={float} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="absolute right-0 top-0 hidden w-48 rotate-6 md:block lg:w-60">
          <ProfileCard />
        </motion.div>
        <Arrow className="absolute left-[72%] top-[60%] hidden h-24 w-12 text-sun md:block" />
        <Star className="absolute right-[3%] top-[44%] hidden h-14 w-14 text-sun md:block" />
        <div className="mt-8 grid gap-8 md:flex md:flex-wrap md:items-end md:justify-between md:gap-6">
          <div className="max-w-md"><p className="text-sm font-bold uppercase tracking-widest text-sun">{profile.role}</p><p className="mt-3 text-lg text-white/90">{profile.intro}</p></div>
          <div className="flex items-center justify-between gap-4 md:contents">
            <a href="#work" className="inline-flex min-h-12 w-fit items-center gap-2 rounded-full border-2 border-ink bg-sun px-6 text-sm font-bold text-ink transition-transform hover:scale-105">View work <ArrowRight size={16} /></a>
            <Badge />
          </div>
        </div>
      </div>
    </section>
  );
}
