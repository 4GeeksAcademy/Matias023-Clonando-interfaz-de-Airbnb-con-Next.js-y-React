import Link from "next/link";
import { BrandLogo } from "@/components/layout/BrandLogo";

type MainHeaderProps = {
  homeHref?: string;
  catalogHref?: string;
};

export function MainHeader({
  homeHref = "/",
  catalogHref = "/catalog",
}: MainHeaderProps) {
  return (
    <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <BrandLogo href={homeHref} />
        <nav aria-label="Navegacion principal" className="flex items-center gap-4 text-sm">
          <Link
            href={homeHref}
            className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
          >
            Home
          </Link>
          <Link
            href={catalogHref}
            className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
          >
            Catalogo
          </Link>
        </nav>
      </div>
    </header>
  );
}
