import type { Category } from "@/types";
import { CategoryPill } from "@/components/category/CategoryPill";

type CategoryNavProps = {
  categories: Category[];
  activeCategoryId: string | null;
  onCategorySelect: (categoryId: string) => void;
};

export function CategoryNav({
  categories,
  activeCategoryId,
  onCategorySelect,
}: CategoryNavProps) {
  return (
    <nav aria-label="Categorias">
      <ul className="flex gap-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <li key={category.id}>
            <CategoryPill
              category={category}
              isActive={activeCategoryId === category.id}
              onSelect={onCategorySelect}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
