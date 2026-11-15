import Image from "next/image";
import { LinkHeader } from "@/app/components/LinkHeader";

export function Footer() {
  return (
    <footer className="w-full bg-[#171B2C]">
      <div className="flex flex-col w-full min-h-98.75 items-center justify-between max-w-7xl mx-auto px-6 sm:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16 w-full items-start justify-between">
          <div className="flex flex-col items-start justify-start gap-4 col-span-2 md:col-span-1">
            <Image
              className="max-auto h-auto"
              src="/luma..svg"
              alt="Luma logo"
              width={53.74}
              height={16.92}
              priority
            />
            <LinkHeader
              className="text-[#9E9FAA] text-[14px]/6 font-inter font-normal"
              label="Practical learning for curious people."
              href="#"
            ></LinkHeader>
          </div>
          <div className="flex flex-col items-start justify-start gap-4">
            <p className="text-[#E7E7EC] text-[12px]/4 font-inter font-semibold tracking-[1.44px] uppercase">
              Explore
            </p>
            <LinkHeader
              className="text-[#9E9FAA] text-[14px]/6 font-inter font-normal"
              label="Courses"
              href="#"
            ></LinkHeader>
            <LinkHeader
              className="text-[#9E9FAA] text-[14px]/6 font-inter font-normal"
              label="Categories"
              href="#"
            ></LinkHeader>
            <LinkHeader
              className="text-[#9E9FAA] text-[14px]/6 font-inter font-normal"
              label="Instructors"
              href="#"
            ></LinkHeader>
            <LinkHeader
              className="text-[#9E9FAA] text-[14px]/6 font-inter font-normal"
              label="For Teams"
              href="#"
            ></LinkHeader>
          </div>
          <div className="flex flex-col items-start justify-start gap-4">
            <p className="text-[#E7E7EC] text-[12px]/4 font-inter font-semibold tracking-[1.44px] uppercase">
              Company
            </p>
            <LinkHeader
              className="text-[#9E9FAA] text-[14px]/6 font-inter font-normal"
              label="About"
              href="#"
            ></LinkHeader>
            <LinkHeader
              className="text-[#9E9FAA] text-[14px]/6 font-inter font-normal"
              label="Careers"
              href="#"
            ></LinkHeader>
            <LinkHeader
              className="text-[#9E9FAA] text-[14px]/6 font-inter font-normal"
              label="Journal"
              href="#"
            ></LinkHeader>
          </div>
          <div className="flex flex-col items-start justify-start gap-4">
            <p className="text-[#E7E7EC] text-[12px]/4 font-inter font-semibold tracking-[1.44px] uppercase">
              Support
            </p>
            <LinkHeader
              className="text-[#9E9FAA] text-[14px]/6 font-inter font-normal"
              label="Help Center"
              href="#"
            ></LinkHeader>
            <LinkHeader
              className="text-[#9E9FAA] text-[14px]/6 font-inter font-normal"
              label="Contact"
              href="#"
            ></LinkHeader>
            <LinkHeader
              className="text-[#9E9FAA] text-[14px]/6 font-inter font-normal"
              label="Terms"
              href="#"
            ></LinkHeader>
            <LinkHeader
              className="text-[#9E9FAA] text-[14px]/6 font-inter font-normal"
              label="Privacy"
              href="#"
            ></LinkHeader>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-full mt-16 gap-2">
          <Image
            className="w-full h-auto"
            src="/footer-line.svg"
            alt="Footer line"
            width={1120}
            height={1}
            priority
          />
          <p className="text-[#9E9FAA] text-[14px]/6 font-inter font-normal">
            © 2026 Luma Learning
          </p>
        </div>
      </div>
    </footer>
  );
}
