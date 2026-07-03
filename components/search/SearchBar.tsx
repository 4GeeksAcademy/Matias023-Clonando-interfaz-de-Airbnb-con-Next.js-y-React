import type { FormEvent } from "react";
import { GuestCounter } from "@/components/search/GuestCounter";
import { SearchInput } from "@/components/search/SearchInput";

type SearchBarProps = {
  query: string;
  guestCount: number;
  onQueryChange: (value: string) => void;
  onGuestCountChange: (value: number) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export function SearchBar({
  query,
  guestCount,
  onQueryChange,
  onGuestCountChange,
  onSubmit,
}: SearchBarProps) {
  return (
    <form
      aria-label="Barra de busqueda"
      onSubmit={onSubmit}
      className="rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <SearchInput value={query} onChange={onQueryChange} />
        <GuestCounter value={guestCount} onChange={onGuestCountChange} />
        <button
          type="submit"
          className="rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
        >
          Buscar
        </button>
      </div>
    </form>
  );
}
