import type { Category } from "@/types";

type CategoryPillProps = {
  category: Category;
  isActive: boolean;
  onSelect: (categoryId: string) => void;
};

export function CategoryPill({ category, isActive, onSelect }: CategoryPillProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(category.id)}
      aria-pressed={isActive}
      aria-label={`Seleccionar categoria ${category.label}`}
      className={`rounded-full border px-4 py-2 text-sm transition ${
        isActive
          ? "border-zinc-900 bg-zinc-900 text-white"
          : "border-zinc-300 bg-white text-zinc-700"
      } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2`}
    >
      {category.label}
    </button>
  );
}
