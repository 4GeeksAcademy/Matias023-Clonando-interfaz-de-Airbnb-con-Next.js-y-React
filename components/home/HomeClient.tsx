"use client";

import { useMemo, useState, type FormEvent } from "react";
import { categoriesMock, footerLinksMock, initialSearchFiltersMock } from "@/data/mocks";
import { getVisibleStays } from "@/components/home/stayQuery";
import { useMockStaysLoading } from "@/components/home/useMockStaysLoading";
import {
  CategoryNav,
  FeaturedStaysSection,
  MainFooter,
  MainHeader,
  PrimaryCTA,
  SearchBar,
} from "@/components";

export function HomeClient() {
  const [searchQuery, setSearchQuery] = useState(initialSearchFiltersMock.query);
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(
    initialSearchFiltersMock.categoryId,
  );
  const [guestCount, setGuestCount] = useState(initialSearchFiltersMock.guestCount);
  const { stays, isLoading } = useMockStaysLoading();

  const filteredStays = useMemo(() => {
    return getVisibleStays({
      stays,
      searchQuery,
      activeCategoryId,
      guestCount,
      sortBy: initialSearchFiltersMock.sortBy,
    });
  }, [stays, searchQuery, activeCategoryId, guestCount]);

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
        <CategoryNav
          categories={categoriesMock}
          activeCategoryId={activeCategoryId}
          onCategorySelect={(categoryId) => {
            setActiveCategoryId((prev) => (prev === categoryId ? null : categoryId));
          }}
        />
        {isLoading ? (
          <p className="text-sm text-zinc-600">Cargando alojamientos...</p>
        ) : filteredStays.length === 0 ? (
          <p className="text-sm text-zinc-600">No hay resultados para los filtros actuales.</p>
        ) : (
          <FeaturedStaysSection stays={filteredStays} />
        )}
        <div>
          <PrimaryCTA label="Explorar todo el catalogo" href="/catalog" />
        </div>
      </div>
      <MainFooter links={footerLinksMock} />
    </main>
  );
}