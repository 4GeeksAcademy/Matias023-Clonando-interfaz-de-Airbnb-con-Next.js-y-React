import Link from "next/link";

type PrimaryCTAProps = {
  label: string;
  href: string;
};

export function PrimaryCTA({ label, href }: PrimaryCTAProps) {
  return (
    <Link
      href={href}
      className="inline-flex rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
    >
      {label}
    </Link>
  );
}
