import Link from "next/link";

type BrandLogoProps = {
  href?: string;
  label?: string;
};

export function BrandLogo({ href = "/", label = "Airbnb Clone" }: BrandLogoProps) {
  return (
    <Link
      href={href}
      aria-label="Ir al inicio"
      className="text-lg font-bold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
    >
      {label}
    </Link>
  );
}
