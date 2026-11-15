import Link from "next/link";

export interface NavItem {
  label: string;
  href: string;
  className?: string;
}

interface Nav {
  items: NavItem[];
}

export function Nav({ items }: Nav) {
  return (
    <nav className="hidden md:flex md:items-center md:space-x-8">
      {items.map((item) => (
        <Link key={item.label} href={item.href} className={item.className}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
