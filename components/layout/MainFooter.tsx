import Link from "next/link";
import type { FooterLink } from "@/types";

type MainFooterProps = {
  links: FooterLink[];
  year?: number;
};

export function MainFooter({ links, year = new Date().getFullYear() }: MainFooterProps) {
  return (
    <footer className="border-t border-zinc-200">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-sm text-zinc-600 md:flex-row md:items-center md:justify-between md:px-6">
        <small>© {year} Airbnb Clone</small>
        <nav aria-label="Enlaces de footer">
          <ul className="flex flex-wrap gap-4">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
