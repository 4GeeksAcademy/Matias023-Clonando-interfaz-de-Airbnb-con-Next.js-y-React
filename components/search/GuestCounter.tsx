type GuestCounterProps = {
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
};

export function GuestCounter({
  value,
  min = 1,
  max = 20,
  onChange,
}: GuestCounterProps) {
  const decrement = () => onChange(Math.max(min, value - 1));
  const increment = () => onChange(Math.min(max, value + 1));

  return (
    <div className="flex items-center gap-2 rounded-full border border-zinc-300 px-3 py-1">
      <span className="text-xs text-zinc-500">Huespedes</span>
      <button
        type="button"
        onClick={decrement}
        aria-label="Disminuir huespedes"
        className="h-7 w-7 rounded-full border border-zinc-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
      >
        -
      </button>
      <span className="min-w-5 text-center text-sm">{value}</span>
      <button
        type="button"
        onClick={increment}
        aria-label="Aumentar huespedes"
        className="h-7 w-7 rounded-full border border-zinc-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
      >
        +
      </button>
    </div>
  );
}
