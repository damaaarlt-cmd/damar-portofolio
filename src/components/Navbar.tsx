import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { profile } from '../data/content';

const links = ['Work', 'About', 'Skills', 'Contact'];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const clip = (r: string) => ({ clipPath: `circle(${r} at 90% 6%)` });
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 text-white md:grid md:grid-cols-3 md:px-10 md:py-6">
        <a href="#" className="text-xl font-bold tracking-tight md:text-2xl">{profile.name}<span className="text-sun">.</span></a>
        <div className="hidden justify-center gap-8 md:flex">{links.map((l) => <a key={l} href={`#${l.toLowerCase()}`} className="text-sm font-medium hover:text-sun">{l}</a>)}</div>
        <a href="#contact" className="hidden items-center gap-2 justify-self-end rounded-full border-2 border-ink bg-sun px-6 py-3 text-sm font-bold text-ink transition-transform hover:scale-105 md:inline-flex">Let's talk <ArrowRight size={16} /></a>
        <button className="grid h-12 w-12 place-items-center rounded-full border-2 border-white/50 md:hidden" onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open}><Menu size={22} /></button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div role="dialog" aria-label="Menu" initial={reduce ? false : clip('0%')} animate={clip('150%')} exit={clip('0%')} transition={{ duration: reduce ? 0 : 0.5 }} className="fixed inset-0 z-50 flex flex-col justify-center bg-brand px-8 text-white md:hidden">
            <button className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full border-2 border-white/50" onClick={() => setOpen(false)} aria-label="Close menu"><X size={22} /></button>
            {[...links, "Let's talk"].map((l, i) => (
              <a key={l} href={`#${i === 4 ? 'contact' : l.toLowerCase()}`} onClick={() => setOpen(false)} className={`head block py-2 text-5xl ${i === 4 ? 'text-sun' : ''}`}>{l}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
