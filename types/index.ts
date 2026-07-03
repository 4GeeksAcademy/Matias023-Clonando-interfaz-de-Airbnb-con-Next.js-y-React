export type SortOption = "recommended" | "priceAsc" | "priceDesc" | "ratingDesc";

export interface Accommodation {
  id: string;
  title: string;
  location: string;
  categoryId: string;
  pricePerNight: number;
  currency: string;
  rating: number;
  reviewsCount: number;
  maxGuests: number;
  coverImage: string;
  images: string[];
  description: string;
  hostName: string;
  hostYears: number;
  amenities: string[];
}

export interface Category {
  id: string;
  label: string;
}

export interface SearchFilters {
  query: string;
  categoryId: string | null;
  sortBy: SortOption;
  guestCount: number;
}

export interface FooterLink {
  id: string;
  label: string;
  href: string;
}
