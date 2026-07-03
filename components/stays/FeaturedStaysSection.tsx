import type { Accommodation } from "@/types";
import { StayGrid } from "@/components/stays/StayGrid";

type FeaturedStaysSectionProps = {
  title?: string;
  stays: Accommodation[];
  onSelectStay?: (stayId: string) => void;
};

export function FeaturedStaysSection({
  title = "Alojamientos destacados",
  stays,
  onSelectStay,
}: FeaturedStaysSectionProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold tracking-tight text-zinc-900">{title}</h2>
      <StayGrid stays={stays} onSelectStay={onSelectStay} />
    </section>
  );
}
