import Link from "next/link";

interface LinkHeader {
  href: string;
  label: string;
  className?: string;
}

export function LinkHeader({ href, label, className = "" }: LinkHeader) {
  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}
