"use client";

import { useMemo, useState, type FormEvent } from "react";
import type { SortOption } from "@/types";
import {
  categoriesMock,
  footerLinksMock,
  initialSearchFiltersMock,
  sortOptionsMock,
} from "@/data/mocks";
import { getVisibleStays } from "@/components/home/stayQuery";
import { useMockStaysLoading } from "@/components/home/useMockStaysLoading";
import {
  CategoryNav,
  MainFooter,
  MainHeader,
  PrimaryCTA,
  SearchBar,
  StayGrid,
} from "@/components";

const sortLabelMap: Record<SortOption, string> = {
  recommended: "Recomendados",
  priceAsc: "Precio: menor a mayor",
  priceDesc: "Precio: mayor a menor",
  ratingDesc: "Mejor valorados",
};

export default function CatalogPage() {
  const [searchQuery, setSearchQuery] = useState(initialSearchFiltersMock.query);
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(
    initialSearchFiltersMock.categoryId,
  );
  const [guestCount, setGuestCount] = useState(initialSearchFiltersMock.guestCount);
  const [sortBy, setSortBy] = useState<SortOption>(initialSearchFiltersMock.sortBy);
  const { stays, isLoading } = useMockStaysLoading();

  const filteredStays = useMemo(() => {
    return getVisibleStays({
      stays,
      searchQuery,
      activeCategoryId,
      guestCount,
      sortBy,
    });
  }, [stays, searchQuery, activeCategoryId, guestCount, sortBy]);

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <MainHeader />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-6 md:gap-8 md:px-6 md:py-8">
        <SearchBar
          query={searchQuery}
          guestCount={guestCount}
          onQueryChange={setSearchQuery}
          onGuestCountChange={setGuestCount}
          onSubmit={handleSearchSubmit}
        />

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <CategoryNav
            categories={categoriesMock}
            activeCategoryId={activeCategoryId}
            onCategorySelect={(categoryId) => {
              setActiveCategoryId((prev) => (prev === categoryId ? null : categoryId));
            }}
          />
          <div className="flex items-center gap-2">
            <label htmlFor="catalog-sort" className="text-sm font-medium text-zinc-700">
              Ordenar
            </label>
            <select
              id="catalog-sort"
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value as SortOption)}
              className="rounded-full border border-zinc-300 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
            >
              {sortOptionsMock.map((option) => (
                <option key={option} value={option}>
                  {sortLabelMap[option]}
                </option>
              ))}
            </select>
          </div>
        </div>

        {isLoading ? (
          <p className="text-sm text-zinc-600">Cargando alojamientos...</p>
        ) : filteredStays.length === 0 ? (
          <p className="text-sm text-zinc-600">No hay resultados para los filtros actuales.</p>
        ) : (
          <section className="space-y-4">
            <h1 className="text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">
              Alojamientos en catalogo
            </h1>
            <StayGrid stays={filteredStays} />
          </section>
        )}

        <div>
          <PrimaryCTA label="Volver al inicio" href="/" />
        </div>
      </div>
      <MainFooter links={footerLinksMock} />
    </main>
  );
}
