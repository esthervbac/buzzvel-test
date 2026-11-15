import Image from "next/image";
import { Button } from "@/app/components/Button";
import { LinkHeader } from "@/app/components/LinkHeader";
import Link from "next/link";

export function FeaturedCourseContent() {
  return (
    <div className="flex w-full min-h-[calc(100vh-80px)] items-center justify-center bg-[#3157F6] dark:bg-black pt-8 lg:pt-0 pb-16 px-4">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-16 max-w-7xl w-full">
        <div className="w-full lg:w-auto flex justify-center lg:justify-start">
          <div className="relative inline-block w-full max-w-134.5">
            <Image
              className="block relative z-0 w-full lg:w-134.5 h-auto lg:h-102 object-cover rounded-2xl"
              src="/featured-course.svg"
              alt="Featured Course Image"
              width={538}
              height={408}
              priority
            />
            <div className="absolute -top-3 -left-3 bg-[#FFEE7E] rounded-md flex items-center justify-center z-10 py-2 px-4 shadow-md">
              <span className="text-xs font-inter font-semibold text-[#171B2C] dark:text-black uppercase tracking-[1.44px]">
                Featured Course
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col text-left max-w-xl gap-6 items-start">
          <p className="text-[#FFFFFF] text-xs/4 font-inter font-semibold uppercase tracking-[1.44px]">
            Most popular this month
          </p>

          <p className="text-[#FFFFFF] text-[48px]/14 sm:text-[48px]/14 font-inter font-extrabold tracking-[-1.2px] sm:tracking-[-1.2px] text-left whitespace-nowrap">
            Designing products <br /> people understand.
          </p>

          <p className="text-[#FFFFFF] text-[16px]/7 sm:text-[18px]/7 font-inter font-normal text-left">
            Learn how to turn complex workflows into simple, intentional product
            experiences through research, structure and thoughtful interaction
            design.
          </p>

          <p className="text-[#FFFFFF] text-[16px]/7 sm:text-[18px]/7 font-inter font-normal text-left">
            with Maya Chen · Senior Product Designer
          </p>

          <div className="flex flex-row gap-4 w-full">
            <Button
              href="/#"
              className="bg-transparent border border-[#DBDFEB] text-white hover:bg-white hover:text-[#3157F6] text-[14px]/6 font-normal"
              label="8 lessons"
            />
            <Button
              href="/#"
              className="bg-transparent border border-[#DBDFEB] text-white hover:bg-white hover:text-[#3157F6] text-[14px]/6 font-normal"
              label="2h 40min"
            />
            <Button
              href="/#"
              className="bg-transparent border border-[#DBDFEB] text-white hover:bg-white hover:text-[#3157F6] text-[14px]/6 font-normal"
              label="Intermediate"
            />
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-4 pt-2 w-full">
            <Button
              href="/#"
              className="bg-[#FFEE7E] text-[#171B2C]! hover:bg-[#c4b450] hover:text-[#FFFFFF]! hover:border-[#FFFFFF] hover:border w-full lg:w-35.5 h-13 text-[14px]/6 font-bold!"
              label="View course"
            />
            <div className="flex flex-row items-center justify-center gap-2">
              <LinkHeader
                href="/#"
                label="Browse all courses"
                className="text-[#E7E7EC] font-inter text-sm/6 leading-6 hover:no-underline font-bold"
              />
              <Link href="#">
                <Image
                  src="/white-arrow.svg"
                  alt="White Arrow"
                  width={20}
                  height={20}
                  priority
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
