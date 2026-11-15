import Link from "next/link";
import Image from "next/image";

interface Card {
  number: string;
  title: string;
  text: string;
  labelLink: string;
  href: string;
}

export function Card({ number, title, text, labelLink, href }: Card) {
  return (
    <div className="flex flex-col w-90.5 min-h-65 sm:w-66.25 h-[227.19px] sm:h-[264.5px] sm:min-h-65 rounded-2xl items-start justify-start gap-4 pt-4 pb-4 pl-4 pr-4 border-[#DBDFEB] border">
      <div className="w-10.75 h-8 rounded-lg bg-[#E2E8FF] flex items-center justify-center">
        <span className="text-sm/6 font-bold text-[#3157F6] font-inter text-left">
          {number}
        </span>
      </div>
      <p className="text-[20px]/8 text-[#171B2C] font-semibold fonts-inter">
        {title}
      </p>
      <p className="text-[14px]/6 text-[#6D7384] font-normal fonts-inter">
        {text}
      </p>
      <div className="flex flex-row items-center justify-center gap-2 pt-2 mt-auto">
        <Link
          href={href}
          className="flex flex-row items-center gap-2 group cursor-pointer"
        >
          <p className="text-[14px]/6 text-[#171B2C] font-semibold fonts-inter">
            {labelLink}
          </p>
          <Image src="/arrow.svg" alt="Arrow" width={20} height={20} priority />
        </Link>
      </div>
    </div>
  );
}
