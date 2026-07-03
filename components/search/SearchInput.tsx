type SearchInputProps = {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
};

export function SearchInput({
  value,
  placeholder = "Buscar destino",
  onChange,
}: SearchInputProps) {
  return (
    <input
      aria-label="Buscar por destino"
      type="text"
      value={value}
      placeholder={placeholder}
      className="w-full rounded-full border border-zinc-300 px-4 py-2 text-sm outline-none focus-visible:border-zinc-900 focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
      onChange={(event) => onChange(event.target.value)}
    />
  );
}
