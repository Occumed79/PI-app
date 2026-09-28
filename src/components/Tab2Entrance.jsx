import React from 'react';

export default function Tab2Entrance({ onEnter }) {
  return (
    <div className="relative grid min-h-[calc(100dvh-8rem)] place-items-center overflow-hidden rounded-3xl border border-white/10">
      <button
        type="button"
        aria-label="Click to enter Employee PI Profiles"
        onClick={onEnter}
        className="group relative mt-[18vh] w-[min(650px,82vw)] rounded-3xl px-8 py-10 text-center text-white/95 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200/80"
      >
        <span className="block text-[clamp(2.75rem,7vw,5.75rem)] font-light leading-none tracking-[-0.04em]">
          Welcome
        </span>
        <span className="mt-4 block text-[clamp(1.35rem,3.3vw,2.65rem)] font-light leading-tight tracking-[-0.025em] text-white/85">
          Please Click to Enter
        </span>
      </button>
    </div>
  );
}
