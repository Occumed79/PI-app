import React, { useMemo, useState } from 'react';
import { signalGlassStaticLenses } from '../data/signalGlassStaticLenses.js';

export default function EmployeeBuilder() {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const lenses = signalGlassStaticLenses;
  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return lenses.map((lens, index) => ({ lens, index }));
    return lenses
      .map((lens, index) => ({ lens, index }))
      .filter(({ lens }) => `${lens.lens || ''} ${lens.file || ''} ${lens.content || ''}`.toLowerCase().includes(q));
  }, [query, lenses]);

  const selected = lenses[selectedIndex] || filtered[0]?.lens || lenses[0];

  return (
    <div className="grid gap-5">
      <section className="rounded-3xl border border-white/10 bg-white/[0.07] p-6">
        <div className="mb-3 flex flex-wrap gap-2 text-xs text-white/75">
          <span className="rounded-full bg-white/10 px-3 py-1">Raw lens mode</span>
          <span className="rounded-full bg-white/10 px-3 py-1">{lenses.length} entries</span>
          <span className="rounded-full bg-white/10 px-3 py-1">No generated labels</span>
        </div>
        <h2 className="text-4xl font-bold text-white">Employee Profile Builder</h2>
        <p className="mt-3 text-sm leading-6 text-white/65">Showing the original uploaded lens entries directly.</p>
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search lenses..." className="mt-5 w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35" />
      </section>

      <section className="grid gap-5 lg:grid-cols-12">
        <div className="grid gap-3 lg:col-span-4">
          {filtered.map(({ lens, index }) => (
            <button key={`${lens.file || lens.lens || index}`} type="button" onClick={() => setSelectedIndex(index)} className="rounded-2xl border border-white/10 bg-black/20 p-4 text-left hover:bg-white/[0.06]">
              <div className="text-base font-bold text-white">{lens.lens || lens.file || 'Untitled lens'}</div>
              <div className="mt-1 text-xs text-white/40">{lens.file || 'Uploaded source'}</div>
            </button>
          ))}
        </div>
        <article className="lg:col-span-8 rounded-3xl border border-white/10 bg-black/25 p-6">
          <h3 className="text-2xl font-bold text-white">{selected?.lens || selected?.file || 'Selected lens'}</h3>
          <p className="mt-2 text-sm text-white/40">{selected?.file || ''}</p>
          <pre className="mt-5 max-h-[680px] overflow-auto whitespace-pre-wrap rounded-2xl border border-white/10 bg-black/35 p-5 text-sm leading-6 text-white/70">{selected?.content || 'No content available.'}</pre>
        </article>
      </section>
    </div>
  );
}
