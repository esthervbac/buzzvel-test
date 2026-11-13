import Link from "next/link";

interface Button {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export function Button({
  href,
  label,
  variant = "primary",
  className = "",
}: Button) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-[#3157F6] text-white text-sm-700 font-sans hover:bg-blue-700 focus:ring-blue-500 radius-[8px]",
    secondary:
      "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500",
  };

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {label}
    </Link>
  );
}
