import type { Accommodation } from "@/types";
import { StayCard } from "@/components/stays/StayCard";

type StayGridProps = {
  stays: Accommodation[];
  onSelectStay?: (stayId: string) => void;
};

export function StayGrid({ stays, onSelectStay }: StayGridProps) {
  return (
    <section aria-label="Listado de alojamientos">
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {stays.map((stay) => (
          <li key={stay.id}>
            <StayCard stay={stay} onSelect={onSelectStay} />
          </li>
        ))}
      </ul>
    </section>
  );
}
