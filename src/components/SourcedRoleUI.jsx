import React from 'react';
import { ChevronDown, X } from 'lucide-react';

// These primitives follow the Shadcn component structures surfaced by the
// connected Magic Patterns Shadcn design system.

export function ResizablePanelGroup({ direction = 'horizontal', className = '', children }) {
  return (
    <div className={`flex h-full w-full ${direction === 'vertical' ? 'flex-col' : ''} ${className}`}>
      {children}
    </div>
  );
}

export function ResizablePanel({ defaultSize = 50, className = '', style, children }) {
  return (
    <div
      className={`min-w-0 overflow-auto ${className}`}
      style={{ flex: `0 1 ${defaultSize}%`, ...style }}
    >
      {children}
    </div>
  );
}

export function ResizableHandle({ withHandle = false, className = '' }) {
  return (
    <div className={`relative hidden w-px shrink-0 bg-white/8 xl:flex xl:items-center xl:justify-center ${className}`}>
      {withHandle && <div className="h-10 w-1 rounded-full bg-white/12" />}
    </div>
  );
}

const TabsContext = React.createContext({ value: '', onValueChange: () => {} });

export function Tabs({ defaultValue = '', value, onValueChange, className = '', children }) {
  const [internal, setInternal] = React.useState(defaultValue);
  const active = value ?? internal;
  const setActive = next => {
    if (value === undefined) setInternal(next);
    onValueChange?.(next);
  };
  return (
    <TabsContext.Provider value={{ value: active, onValueChange: setActive }}>
      <div className={`flex flex-col gap-6 ${className}`}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({ className = '', children }) {
  return (
    <div role="tablist" className={`flex w-fit flex-wrap gap-1 rounded-full border border-white/10 bg-white/[0.025] p-1 ${className}`}>
      {children}
    </div>
  );
}

export function TabsTrigger({ value, className = '', children }) {
  const ctx = React.useContext(TabsContext);
  const active = ctx.value === value;
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={() => ctx.onValueChange(value)}
      className={`rounded-full px-4 py-2 text-xs font-medium transition ${active ? 'bg-white text-slate-950' : 'text-white/42 hover:text-white/72'} ${className}`}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, className = '', children }) {
  const ctx = React.useContext(TabsContext);
  if (ctx.value !== value) return null;
  return <div role="tabpanel" className={className}>{children}</div>;
}

const AccordionContext = React.createContext({ openItems: [], toggle: () => {} });
const AccordionItemContext = React.createContext({ value: '', open: false });

export function Accordion({ type = 'single', defaultValue, className = '', children }) {
  const [openItems, setOpenItems] = React.useState(
    defaultValue ? (Array.isArray(defaultValue) ? defaultValue : [defaultValue]) : []
  );
  const toggle = value => {
    setOpenItems(prev => {
      if (type === 'single') return prev.includes(value) ? [] : [value];
      return prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value];
    });
  };
  return (
    <AccordionContext.Provider value={{ openItems, toggle }}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({ value, className = '', children }) {
  const { openItems } = React.useContext(AccordionContext);
  return (
    <AccordionItemContext.Provider value={{ value, open: openItems.includes(value) }}>
      <div className={`border-b border-white/8 last:border-b-0 ${className}`}>{children}</div>
    </AccordionItemContext.Provider>
  );
}

export function AccordionTrigger({ className = '', children }) {
  const { toggle } = React.useContext(AccordionContext);
  const { value, open } = React.useContext(AccordionItemContext);
  return (
    <button
      type="button"
      aria-expanded={open}
      onClick={() => toggle(value)}
      className={`flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-medium text-white/72 ${className}`}
    >
      <span>{children}</span>
      <ChevronDown size={15} className={`shrink-0 text-white/30 transition-transform ${open ? 'rotate-180' : ''}`} />
    </button>
  );
}

export function AccordionContent({ className = '', children }) {
  const { open } = React.useContext(AccordionItemContext);
  if (!open) return null;
  return <div className={`pb-5 text-sm leading-7 text-white/46 ${className}`}>{children}</div>;
}

const SheetContext = React.createContext({ open: false, setOpen: () => {} });

export function Sheet({ open, defaultOpen = false, onOpenChange, children }) {
  const [internal, setInternal] = React.useState(defaultOpen);
  const active = open ?? internal;
  const setOpen = next => {
    if (open === undefined) setInternal(next);
    onOpenChange?.(next);
  };
  return <SheetContext.Provider value={{ open: active, setOpen }}>{children}</SheetContext.Provider>;
}

export function SheetTrigger({ className = '', children }) {
  const { setOpen } = React.useContext(SheetContext);
  return <button type="button" onClick={() => setOpen(true)} className={className}>{children}</button>;
}

export function SheetContent({ side = 'right', className = '', children }) {
  const { open, setOpen } = React.useContext(SheetContext);
  if (!open) return null;
  const sideClass = side === 'left' ? 'left-0 border-r' : 'right-0 border-l';
  return (
    <>
      <button
        type="button"
        aria-label="Close panel"
        className="fixed inset-0 z-40 bg-black/55 backdrop-blur-sm xl:hidden"
        onClick={() => setOpen(false)}
      />
      <aside className={`fixed inset-y-0 z-50 w-[92vw] max-w-md border-white/10 bg-slate-950/95 p-4 shadow-2xl xl:hidden ${sideClass} ${className}`}>
        <button
          type="button"
          aria-label="Close"
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full border border-white/10 text-white/50"
        >
          <X size={15} />
        </button>
        {children}
      </aside>
    </>
  );
}
