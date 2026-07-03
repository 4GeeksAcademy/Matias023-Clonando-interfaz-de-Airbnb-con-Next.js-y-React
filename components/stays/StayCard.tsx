"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Accommodation } from "@/types";
import { PriceInfo } from "@/components/stays/PriceInfo";
import { RatingInfo } from "@/components/stays/RatingInfo";

type StayCardProps = {
  stay: Accommodation;
  onSelect?: (stayId: string) => void;
};

export function StayCard({ stay, onSelect }: StayCardProps) {
  const [imageHasError, setImageHasError] = useState(false);
  const hasCoverImage = stay.coverImage.trim().length > 0 && !imageHasError;

  return (
    <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
      <Link
        href={`/rooms/${stay.id}`}
        className="block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
        onClick={() => onSelect?.(stay.id)}
      >
        {hasCoverImage ? (
          <div className="relative h-40 w-full bg-zinc-100">
            <Image
              src={stay.coverImage}
              alt={`Imagen de ${stay.title}`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover"
              onError={() => setImageHasError(true)}
            />
          </div>
        ) : (
          <div
            aria-label="Imagen de alojamiento no disponible"
            className="flex h-40 items-center justify-center bg-zinc-100 text-xs text-zinc-500"
          >
            <Image
              src="/images/stays/stay-fallback.svg"
              alt="Imagen de alojamiento no disponible"
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        )}
        <div className="space-y-2 p-4">
          <h3 className="line-clamp-1 text-base font-semibold text-zinc-900">{stay.title}</h3>
          <p className="line-clamp-1 text-sm text-zinc-600">{stay.location}</p>
          <PriceInfo pricePerNight={stay.pricePerNight} currency={stay.currency} />
          <RatingInfo rating={stay.rating} reviewsCount={stay.reviewsCount} />
        </div>
      </Link>
    </article>
  );
}
