"use client";

import { useState } from "react";
import { GuestCounter, PriceInfo, PrimaryCTA } from "@/components";

type BookingPanelProps = {
  roomId: string;
  maxGuests: number;
  pricePerNight: number;
  currency: string;
};

export function BookingPanel({
  roomId,
  maxGuests,
  pricePerNight,
  currency,
}: BookingPanelProps) {
  const [guestCount, setGuestCount] = useState(1);

  return (
    <aside className="space-y-4 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm md:sticky md:top-24">
      <h2 className="text-lg font-semibold text-zinc-900">Reserva</h2>
      <PriceInfo pricePerNight={pricePerNight} currency={currency} />
      <div className="space-y-2">
        <p className="text-sm text-zinc-700">Huespedes</p>
        <GuestCounter value={guestCount} onChange={setGuestCount} max={maxGuests} />
        <p className="text-xs text-zinc-500">Maximo permitido: {maxGuests}</p>
      </div>
      <PrimaryCTA
        label="Reservar ahora"
        href={`/catalog?room=${roomId}&guests=${guestCount}`}
      />
      <p className="text-xs text-zinc-500">Reserva simulada para fines de practica.</p>
    </aside>
  );
}
