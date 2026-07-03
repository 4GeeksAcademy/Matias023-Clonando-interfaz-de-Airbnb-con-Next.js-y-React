import type { Accommodation, SortOption } from "@/types";

type StayQueryParams = {
  stays: Accommodation[];
  searchQuery: string;
  activeCategoryId: string | null;
  guestCount: number;
  sortBy: SortOption;
};

export function getVisibleStays({
  stays,
  searchQuery,
  activeCategoryId,
  guestCount,
  sortBy,
}: StayQueryParams): Accommodation[] {
  const query = searchQuery.trim().toLowerCase();

  const filtered = stays.filter((stay) => {
    const matchesQuery =
      query.length === 0 ||
      stay.title.toLowerCase().includes(query) ||
      stay.location.toLowerCase().includes(query);
    const matchesCategory = !activeCategoryId || stay.categoryId === activeCategoryId;
    const matchesGuests = stay.maxGuests >= guestCount;
    return matchesQuery && matchesCategory && matchesGuests;
  });

  if (sortBy === "priceAsc") {
    return [...filtered].sort((a, b) => a.pricePerNight - b.pricePerNight);
  }

  if (sortBy === "priceDesc") {
    return [...filtered].sort((a, b) => b.pricePerNight - a.pricePerNight);
  }

  if (sortBy === "ratingDesc") {
    return [...filtered].sort((a, b) => b.rating - a.rating);
  }

  return filtered;
}