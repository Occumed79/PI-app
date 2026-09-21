import React from 'react';
import { Check, ChevronDown, ChevronLeft, ChevronRight, Search, X } from 'lucide-react';

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


export function Badge({ tone = 'default', className = '', children }) {
  const tones = {
    default: 'border-white/10 bg-white/[0.035] text-white/55',
    success: 'border-emerald-300/25 bg-emerald-500/10 text-emerald-200',
    info: 'border-sky-300/25 bg-sky-500/10 text-sky-200',
    warning: 'border-amber-300/25 bg-amber-500/10 text-amber-200',
  };
  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1.5 text-xs ${tones[tone] || tones.default} ${className}`}>
      {children}
    </span>
  );
}

export function ScrollArea({ className = '', children }) {
  return <div className={`relative overflow-auto ${className}`}>{children}</div>;
}


export function Command({ className = '', children }) {
  return (
    <div data-slot="command" className={`flex size-full flex-col overflow-hidden rounded-xl border border-white/8 bg-white/[0.025] p-1 text-white/72 ${className}`}>
      {children}
    </div>
  );
}

export function CommandInput({ className = '', ...props }) {
  return (
    <div data-slot="command-input-wrapper" className="p-1 pb-0">
      <div className="flex h-10 items-center gap-2 rounded-lg border border-white/10 bg-black/15 px-3">
        <Search className="size-4 shrink-0 text-white/28" />
        <input
          data-slot="command-input"
          className={`w-full bg-transparent text-sm text-white outline-none placeholder:text-white/24 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
          {...props}
        />
      </div>
    </div>
  );
}

export function CommandList({ className = '', children }) {
  return <div data-slot="command-list" className={`max-h-72 overflow-y-auto overflow-x-hidden ${className}`}>{children}</div>;
}

export function CommandEmpty({ className = '', children }) {
  return <div data-slot="command-empty" className={`py-6 text-center text-sm text-white/35 ${className}`}>{children}</div>;
}

export function CommandGroup({ heading, className = '', children }) {
  return (
    <div data-slot="command-group" className={`overflow-hidden p-1 ${className}`}>
      {heading && <div className="px-2 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-white/26">{heading}</div>}
      {children}
    </div>
  );
}

export function CommandItem({ disabled = false, checked = false, className = '', onSelect, children }) {
  return (
    <button
      type="button"
      data-slot="command-item"
      disabled={disabled}
      onClick={onSelect}
      className={`relative flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm outline-none transition hover:bg-white/[0.05] hover:text-white disabled:pointer-events-none disabled:opacity-50 ${className}`}
    >
      {children}
      {checked && <Check className="ml-auto size-4 text-emerald-200" />}
    </button>
  );
}

export function CommandSeparator({ className = '' }) {
  return <div data-slot="command-separator" className={`-mx-1 h-px bg-white/8 ${className}`} />;
}

export function Progress({ value = 0, max = 100, className = '' }) {
  const percentage = Math.min(100, Math.max(0, (Number(value) / Math.max(1, Number(max))) * 100));
  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={value}
      data-slot="progress"
      className={`relative flex h-1.5 w-full items-center overflow-hidden rounded-full bg-white/8 ${className}`}
    >
      <div
        data-slot="progress-indicator"
        className="size-full flex-1 bg-white/70 transition-all duration-500"
        style={{ transform: `translateX(-${100 - percentage}%)` }}
      />
    </div>
  );
}

const CarouselContext = React.createContext({
  orientation: 'horizontal',
  currentIndex: 0,
  totalItems: 0,
  scrollPrev: () => {},
  scrollNext: () => {},
  canScrollPrev: false,
  canScrollNext: false,
  setTotalItems: () => {},
});

export function Carousel({ orientation = 'horizontal', className = '', children }) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [totalItems, setTotalItems] = React.useState(0);
  const scrollPrev = () => setCurrentIndex(prev => Math.max(0, prev - 1));
  const scrollNext = () => setCurrentIndex(prev => Math.min(totalItems - 1, prev + 1));

  return (
    <CarouselContext.Provider value={{
      orientation,
      currentIndex,
      totalItems,
      scrollPrev,
      scrollNext,
      canScrollPrev: currentIndex > 0,
      canScrollNext: currentIndex < totalItems - 1,
      setTotalItems,
    }}>
      <div role="region" aria-roledescription="carousel" data-slot="carousel" className={`relative ${className}`}>
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

export function CarouselContent({ className = '', children }) {
  const { orientation, currentIndex, setTotalItems } = React.useContext(CarouselContext);
  const childArray = React.Children.toArray(children);
  React.useEffect(() => { setTotalItems(childArray.length); }, [childArray.length, setTotalItems]);
  const offset = orientation === 'horizontal'
    ? `translateX(-${currentIndex * 100}%)`
    : `translateY(-${currentIndex * 100}%)`;

  return (
    <div className="overflow-hidden" data-slot="carousel-content">
      <div
        className={`flex transition-transform duration-300 ease-in-out ${orientation === 'vertical' ? 'flex-col' : ''} ${className}`}
        style={{ transform: offset }}
      >
        {children}
      </div>
    </div>
  );
}

export function CarouselItem({ className = '', children }) {
  return (
    <div role="group" aria-roledescription="slide" data-slot="carousel-item" className={`min-w-0 shrink-0 grow-0 basis-full ${className}`}>
      {children}
    </div>
  );
}

export function CarouselPrevious({ className = '' }) {
  const { scrollPrev, canScrollPrev, orientation } = React.useContext(CarouselContext);
  return (
    <button
      type="button"
      data-slot="carousel-previous"
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      className={`absolute z-20 inline-flex size-8 items-center justify-center rounded-full border border-white/10 bg-slate-950/90 text-white/60 shadow-sm transition hover:bg-white/10 hover:text-white disabled:opacity-20 ${orientation === 'horizontal' ? 'left-3 top-1/2 -translate-y-1/2' : 'left-1/2 top-3 -translate-x-1/2 rotate-90'} ${className}`}
    >
      <ChevronLeft className="size-4" />
    </button>
  );
}

export function CarouselNext({ className = '' }) {
  const { scrollNext, canScrollNext, orientation } = React.useContext(CarouselContext);
  return (
    <button
      type="button"
      data-slot="carousel-next"
      disabled={!canScrollNext}
      onClick={scrollNext}
      className={`absolute z-20 inline-flex size-8 items-center justify-center rounded-full border border-white/10 bg-slate-950/90 text-white/60 shadow-sm transition hover:bg-white/10 hover:text-white disabled:opacity-20 ${orientation === 'horizontal' ? 'right-3 top-1/2 -translate-y-1/2' : 'bottom-3 left-1/2 -translate-x-1/2 rotate-90'} ${className}`}
    >
      <ChevronRight className="size-4" />
    </button>
  );
}

const HoverCardContext = React.createContext({ open: false, setOpen: () => {} });

export function HoverCard({ open, defaultOpen = false, onOpenChange, children }) {
  const [internal, setInternal] = React.useState(defaultOpen);
  const active = open ?? internal;
  const setOpen = next => {
    if (open === undefined) setInternal(next);
    onOpenChange?.(next);
  };
  return (
    <HoverCardContext.Provider value={{ open: active, setOpen }}>
      <div className="relative inline-block">{children}</div>
    </HoverCardContext.Provider>
  );
}

export function HoverCardTrigger({ className = '', children }) {
  const { setOpen } = React.useContext(HoverCardContext);
  return (
    <div
      data-slot="hover-card-trigger"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocusCapture={() => setOpen(true)}
      onBlurCapture={event => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
      className={className}
    >
      {children}
    </div>
  );
}

export function HoverCardContent({ className = '', children }) {
  const { open, setOpen } = React.useContext(HoverCardContext);
  if (!open) return null;
  return (
    <div
      data-slot="hover-card-content"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className={`absolute left-1/2 top-full z-50 mt-2 w-72 -translate-x-1/2 rounded-2xl border border-white/10 bg-slate-950/95 p-4 text-sm text-white/58 shadow-2xl backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}


export function Alert({ className = '', children }) {
  return (
    <div
      role="alert"
      data-slot="alert"
      className={`relative grid w-full gap-0.5 rounded-xl border border-white/10 bg-white/[0.025] px-3 py-3 text-left text-sm text-white/62 has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-2 [&>svg]:row-span-2 [&>svg]:translate-y-0.5 [&>svg]:text-sky-200/55 ${className}`}
    >
      {children}
    </div>
  );
}

export function AlertTitle({ className = '', children }) {
  return <div data-slot="alert-title" className={`font-medium text-white/72 ${className}`}>{children}</div>;
}

export function AlertDescription({ className = '', children }) {
  return <div data-slot="alert-description" className={`text-sm leading-6 text-white/40 ${className}`}>{children}</div>;
}


const ToggleGroupContext = React.createContext({
  value: [],
  onValueChange: () => {},
});

export function ToggleGroup({
  type = 'single',
  value,
  defaultValue,
  onValueChange,
  className = '',
  children,
}) {
  const [internalValue, setInternalValue] = React.useState(
    defaultValue ? (Array.isArray(defaultValue) ? defaultValue : [defaultValue]) : []
  );
  const controlledValue = value !== undefined
    ? (Array.isArray(value) ? value : [value])
    : internalValue;

  const handleChange = itemValue => {
    let next;
    if (type === 'single') {
      next = controlledValue.includes(itemValue) ? [] : [itemValue];
    } else {
      next = controlledValue.includes(itemValue)
        ? controlledValue.filter(item => item !== itemValue)
        : [...controlledValue, itemValue];
    }
    if (value === undefined) setInternalValue(next);
    onValueChange?.(type === 'single' ? (next[0] || '') : next);
  };

  return (
    <ToggleGroupContext.Provider value={{ value: controlledValue, onValueChange: handleChange }}>
      <div data-slot="toggle-group" role="group" className={`flex w-fit flex-row items-center gap-0 rounded-lg ${className}`}>
        {children}
      </div>
    </ToggleGroupContext.Provider>
  );
}

export function ToggleGroupItem({ value, className = '', children }) {
  const context = React.useContext(ToggleGroupContext);
  const active = context.value.includes(value);
  return (
    <button
      type="button"
      data-slot="toggle-group-item"
      aria-pressed={active}
      data-state={active ? 'on' : 'off'}
      onClick={() => context.onValueChange(value)}
      className={`h-8 shrink-0 border border-white/10 px-3 text-xs font-medium transition first:rounded-l-lg last:rounded-r-lg -ml-px first:ml-0 ${active ? 'bg-white text-slate-950' : 'bg-white/[0.02] text-white/45 hover:bg-white/[0.06] hover:text-white/72'} ${className}`}
    >
      {children}
    </button>
  );
}
