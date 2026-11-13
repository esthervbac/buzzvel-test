import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-gray-100"
    >
      luma.
    </Link>
  );
}
