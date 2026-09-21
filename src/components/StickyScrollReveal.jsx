import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

// Structure adapted from Aceternity UI's Sticky Scroll Reveal pattern.
export default function StickyScrollReveal({ content = [], className = '', onActiveChange }) {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ container: ref });

  useMotionValueEvent(scrollYProgress, 'change', latest => {
    if (!content.length) return;
    const points = content.map((_, index) => index / content.length);
    const closest = points.reduce((best, point, index) => (
      Math.abs(latest - point) < Math.abs(latest - points[best]) ? index : best
    ), 0);
    setActiveCard(closest);
  });

  useEffect(() => {
    if (!content.length) return;
    onActiveChange?.(activeCard, content[activeCard]);
  }, [activeCard, content, onActiveChange]);

  if (!content.length) return null;
  const active = content[activeCard];

  return (
    <div
      ref={ref}
      className={`relative flex min-h-[34rem] max-h-[72vh] gap-10 overflow-y-auto rounded-[32px] border border-white/8 bg-slate-950/35 p-6 sm:p-10 ${className}`}
    >
      <div className="relative flex-1 px-1 sm:px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20 first:mt-6 last:mb-24">
              <motion.div
                animate={{ opacity: activeCard === index ? 1 : 0.26 }}
                transition={{ duration: 0.35 }}
              >
                {item.eyebrow && (
                  <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-sky-200/50">
                    {item.eyebrow}
                  </div>
                )}
                <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  {item.title}
                </h2>
                <p className="mt-5 max-w-xl text-sm leading-7 text-white/46 sm:text-base sm:leading-8">
                  {item.description}
                </p>
              </motion.div>
            </div>
          ))}
          <div className="h-20" />
        </div>
      </div>
      <div className="sticky top-8 hidden h-[30rem] w-[44%] min-w-[320px] overflow-hidden rounded-[28px] border border-white/10 bg-black/25 lg:block">
        <motion.div
          key={activeCard}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45 }}
          className="h-full w-full"
        >
          {active?.content ?? null}
        </motion.div>
      </div>
    </div>
  );
}
