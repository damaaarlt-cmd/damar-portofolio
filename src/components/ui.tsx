import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';

export const Star = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 100 100" aria-hidden className={className} fill="currentColor" stroke="currentColor" strokeWidth="9" strokeLinejoin="round">
    <path d="M50 8 Q 56 44 92 50 Q 56 56 50 92 Q 44 56 8 50 Q 44 44 50 8Z" />
  </svg>
);
export const Arrow = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 50 100" aria-hidden className={`overflow-visible ${className}`} fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 6 C 44 12 48 52 24 78" /><path d="M10 64 L 24 80 L 42 68" />
  </svg>
);
export const Badge = ({ text = "LET'S TALK • LET'S TALK • " }: { text?: string }) => (
  <a href="#contact" className="relative grid aspect-square w-28 place-items-center rounded-full border-[3px] border-ink bg-sun text-ink transition-transform hover:scale-105 md:w-36">
    <svg viewBox="0 0 100 100" aria-hidden className="absolute inset-0 animate-[spin_16s_linear_infinite]">
      <path id="c" d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0" fill="none" />
      <text fontSize="10" fontWeight="700" letterSpacing="2.3" fill="currentColor"><textPath href="#c" textLength="210" lengthAdjust="spacing">{text}</textPath></text>
    </svg>
    <span className="sr-only">Let's talk</span><Star className="h-9 w-9" />
  </a>
);
export const Reveal = ({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay, ease: 'easeOut' }}>
      {children}
    </motion.div>
  );
};
// Shows the image, or a designed placeholder when src is empty.
export const Cover = ({ src, alt, label = 'Add image', className = '' }: { src?: string; alt: string; label?: string; className?: string }) =>
  src ? <img src={src} alt={alt} loading="lazy" className={`object-cover ${className}`} /> : (
    <div role="img" aria-label={`${alt} (placeholder)`} className={`grid-bg relative grid place-items-center overflow-hidden bg-brand text-white ${className}`}>
      <Star className="absolute -right-6 -top-6 h-40 w-40 text-sun/90" /><Star className="absolute -bottom-4 left-6 h-16 w-16 text-pop" />
      <span className="relative rounded-full bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-widest">{label}</span>
    </div>
  );
