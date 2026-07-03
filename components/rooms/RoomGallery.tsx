"use client";

import { useState } from "react";
import Image from "next/image";

type RoomGalleryProps = {
  title: string;
  images: string[];
};

export function RoomGallery({ title, images }: RoomGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mainImageHasError, setMainImageHasError] = useState(false);
  const [thumbnailErrors, setThumbnailErrors] = useState<Record<number, boolean>>({});
  const hasImages = images.length > 0;
  const safeActiveIndex = hasImages ? activeIndex % images.length : 0;
  const activeImage = images[safeActiveIndex];

  const previousImage = () => {
    if (!hasImages) return;
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    if (!hasImages) return;
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!hasImages) {
    return (
      <div className="flex h-72 items-center justify-center rounded-2xl bg-zinc-100 text-sm text-zinc-500 md:h-96">
        <div className="relative h-full w-full overflow-hidden rounded-2xl">
          <Image
            src="/images/stays/stay-fallback.svg"
            alt="Imagenes no disponibles"
            fill
            sizes="(min-width: 768px) 66vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    );
  }

  return (
    <section className="space-y-3" aria-label="Galeria de habitacion">
      <div className="relative h-72 overflow-hidden rounded-2xl bg-zinc-100 md:h-96">
        {mainImageHasError ? (
          <Image
            src="/images/stays/stay-fallback.svg"
            alt="Imagen no disponible"
            fill
            sizes="(min-width: 768px) 66vw, 100vw"
            className="object-cover"
          />
        ) : (
          <Image
            src={activeImage}
            alt={`Imagen ${safeActiveIndex + 1} de ${title}`}
            fill
            sizes="(min-width: 768px) 66vw, 100vw"
            className="object-cover"
            onError={() => setMainImageHasError(true)}
          />
        )}
        <div className="absolute inset-x-0 bottom-3 flex justify-between px-3">
          <button
            type="button"
            onClick={previousImage}
            className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
          >
            Anterior
          </button>
          <button
            type="button"
            onClick={nextImage}
            className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
          >
            Siguiente
          </button>
        </div>
      </div>

      <ul className="grid grid-cols-4 gap-2" aria-label="Miniaturas de galeria">
        {images.map((image, index) => (
          <li key={`${image}-${index}`}>
            <button
              type="button"
              onClick={() => {
                setActiveIndex(index);
                setMainImageHasError(false);
              }}
              className={`relative h-16 w-full overflow-hidden rounded-lg border ${
                index === safeActiveIndex ? "border-zinc-900" : "border-zinc-200"
              } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2`}
              aria-label={`Ver imagen ${index + 1}`}
            >
              {thumbnailErrors[index] ? (
                <Image
                  src="/images/stays/stay-fallback.svg"
                  alt={`Miniatura no disponible ${index + 1}`}
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              ) : (
                <Image
                  src={image}
                  alt={`Miniatura ${index + 1} de ${title}`}
                  fill
                  sizes="25vw"
                  className="object-cover"
                  onError={() => {
                    setThumbnailErrors((prev) => ({ ...prev, [index]: true }));
                  }}
                />
              )}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
