type RoomAmenitiesProps = {
  amenities: string[];
};

export function RoomAmenities({ amenities }: RoomAmenitiesProps) {
  return (
    <section className="space-y-3" aria-label="Amenidades">
      <h2 className="text-lg font-semibold text-zinc-900">Amenidades</h2>
      <ul className="grid grid-cols-1 gap-2 text-sm text-zinc-700 md:grid-cols-2">
        {amenities.map((amenity) => (
          <li key={amenity} className="rounded-lg border border-zinc-200 bg-white px-3 py-2">
            {amenity}
          </li>
        ))}
      </ul>
    </section>
  );
}
