import Link from "next/link";
import { NavItem } from "./Nav";

interface MobileMenu {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
  children?: React.ReactNode;
}

export function MobileMenu({ isOpen, onClose, items, children }: MobileMenu) {
  if (!isOpen) return null;

  return (
    <div className="border-b border-gray-200 bg-white px-4 pt-4 pb-6 md:hidden">
      <div className="flex flex-col space-y-4">
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={onClose}
            className={item.className}
          >
            {item.label}
          </Link>
        ))}

        <hr className="border-gray-100 my-1" />

        <div className="flex flex-col space-y-3" onClick={onClose}>
          {children}
        </div>
      </div>
    </div>
  );
}
