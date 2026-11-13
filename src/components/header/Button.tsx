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
      "bg-[#3157F6] text-white text-sm/6 font-sans hover:bg-blue-700 focus:ring-blue-500 rounded-[8px]",
    secondary:
      "bg-[#FFFFFF] text-[#171B2C]-700 text-sm/6 font-sans font-bold hover:bg-gray-200 focus:ring-gray-500",
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
