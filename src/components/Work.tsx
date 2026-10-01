import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowRight, X } from 'lucide-react';
import { projects, type Project, type Tone } from '../data/content';
import { Cover, Reveal, Star } from './ui';

const tones: Record<Tone, string> = { brand: 'bg-brand text-white', sun: 'bg-sun text-ink', ink: 'bg-ink text-white' };
const stars: Record<Tone, string> = { brand: 'text-sun', sun: 'text-pop', ink: 'text-brand' };

function ProjectCard({ p, onOpen }: { p: Project; onOpen: () => void }) {
  return (
    <button onClick={onOpen} aria-label={`Open case study: ${p.title}`} className={`group relative flex w-full flex-col justify-between overflow-hidden rounded-[2rem] p-6 text-left md:p-8 ${tones[p.tone]} ${p.h}`}>
      {p.coverImage ? <img src={p.coverImage} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /> : <><div className="grid-bg absolute inset-0" /><Star className={`absolute -right-8 -top-8 h-48 w-48 transition-transform duration-500 group-hover:rotate-45 md:h-64 md:w-64 ${stars[p.tone]}`} /></>}
      <p className="relative w-fit rounded-full bg-black/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest">{p.category} · {p.year}</p>
      <div className="relative">
        <p className="mb-3 max-w-sm text-sm">{p.description}</p>
        <h3 className="head text-[clamp(2.25rem,5.5vw,4.5rem)]">{p.title}</h3>
        <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-ink transition-transform group-hover:translate-x-1">View case study <ArrowRight size={14} /></span>
      </div>
    </button>
  );
}

const Block = ({ n, t, c }: { n: string; t: string; c: string }) => (
  <div className="grid gap-3 border-t-2 border-ink/10 py-8 md:grid-cols-[12rem_1fr] md:gap-10"><h3 className="head text-2xl text-brand"><span className="mr-2 text-pop">{n}</span>{t}</h3><p className="max-w-2xl text-lg">{c}</p></div>
);

function ProjectPreview({ i, onClose, onNext }: { i: number; onClose: () => void; onNext: () => void }) {
  const p = projects[i];
  const reduce = useReducedMotion();
  const box = useRef<HTMLDivElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  useEffect(() => { document.body.style.overflow = 'hidden'; closeBtn.current?.focus(); return () => { document.body.style.overflow = ''; }; }, []);
  useEffect(() => { box.current?.scrollTo(0, 0); }, [i]);
  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if (e.key === 'Escape') return onClose();
      if (e.key !== 'Tab' || !box.current) return;
      const f = box.current.querySelectorAll<HTMLElement>('button,a[href]');
      if (!f.length) return;
      const [a, z] = [f[0], f[f.length - 1]];
      if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); } else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
    };
    window.addEventListener('keydown', key);
    return () => window.removeEventListener('keydown', key);
  }, [onClose]);
  const gallery = p.galleryImages.length ? p.galleryImages : ['', '', ''];
  return (
    <motion.div ref={box} role="dialog" aria-modal="true" aria-label={`${p.title} case study`} onClick={(e) => e.target === e.currentTarget && onClose()}
      initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] overflow-y-auto bg-ink/80 md:p-6">
      <motion.div initial={reduce ? false : { y: 60 }} animate={{ y: 0 }} exit={{ y: 60 }} transition={{ duration: 0.4, ease: 'easeOut' }} className="mx-auto min-h-full max-w-6xl bg-paper md:min-h-0 md:rounded-[2rem]">
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 bg-paper/95 px-5 py-4 backdrop-blur md:rounded-t-[2rem] md:px-10">
          <p className="text-xs font-bold uppercase tracking-widest text-brand">{p.category} · {p.year}</p>
          <button ref={closeBtn} onClick={onClose} aria-label="Close project" className="grid h-12 w-12 place-items-center rounded-full bg-ink text-white transition-transform hover:rotate-90"><X /></button>
        </div>
        <div className="px-5 pb-12 md:px-10">
          <h2 className="head stack text-[clamp(3rem,11vw,9rem)] text-brand">{p.title}</h2>
          <Cover src={p.coverImage} alt={`${p.title} cover`} label="Cover image" className="mt-8 aspect-[16/10] w-full rounded-[2rem]" />
          <dl className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-5">
            {[['Project', p.title], ['Role', p.role], ['Category', p.category], ['Tools', p.tools.join(', ')], ['Year', p.year]].map(([k, v]) => (
              <div key={k}><dt className="text-[10px] font-bold uppercase tracking-widest text-pop">{k}</dt><dd className="mt-1 font-bold">{v}</dd></div>
            ))}
          </dl>
          <p className="mt-10 max-w-3xl font-display text-2xl font-extrabold leading-tight md:text-4xl">{p.description}</p>
          <div className="mt-10"><Block n="01" t="Challenge" c={p.challenge} /><Block n="02" t="Approach" c={p.approach} /><Block n="03" t="Solution" c={p.solution} /></div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">{gallery.map((g, k) => <Cover key={k} src={g} alt={`${p.title} gallery ${k + 1}`} label={`Gallery ${k + 1}`} className={`aspect-[4/3] w-full rounded-[2rem] ${k === 0 ? 'md:col-span-2 md:aspect-[16/9]' : ''}`} />)}</div>
          <Block n="04" t="Outcome" c={p.outcome} />
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <button onClick={onNext} className="inline-flex min-h-14 items-center gap-3 rounded-full border-2 border-ink bg-sun px-8 text-lg font-bold transition-transform hover:scale-105">Next project <ArrowRight /></button>
            <button onClick={onClose} className="min-h-12 rounded-full border-2 border-ink px-6 font-bold hover:bg-ink hover:text-white">Close project</button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Work() {
  const [active, setActive] = useState<number | null>(null);
  const opener = useRef<HTMLElement | null>(null);
  const open = (i: number) => { opener.current = document.activeElement as HTMLElement; setActive(i); };
  const close = () => { setActive(null); opener.current?.focus({ preventScroll: true }); };
  return (
    <section id="work" className="bg-paper px-5 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1440px]">
        <Reveal className="mb-12 flex items-end justify-between"><h2 className="head text-[clamp(2.75rem,8vw,7rem)] text-brand">Selected work</h2><p className="hidden rounded-full bg-pop px-4 py-2 text-xs font-bold text-white sm:block">{projects.length} projects</p></Reveal>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
          {projects.map((p, i) => <Reveal key={p.id} className={p.cls} delay={i * 0.06}><ProjectCard p={p} onOpen={() => open(i)} /></Reveal>)}
        </div>
      </div>
      <AnimatePresence>{active !== null && <ProjectPreview key="preview" i={active} onClose={close} onNext={() => setActive((active + 1) % projects.length)} />}</AnimatePresence>
    </section>
  );
}
