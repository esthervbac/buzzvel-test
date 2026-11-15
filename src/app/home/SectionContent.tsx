import Image from "next/image";
import { Button } from "@/app/components/Button";

export function Section() {
  return (
    <div className="flex w-full m-h-140 sm:min-h-[calc(100vh-80px)] items-center justify-center bg-[#F9F8F3] dark:bg-black pt-8 lg:pt-0 pb-16 px-4">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-16 max-w-7xl w-full mt-10 sm:mt-15">
        <div className="flex flex-col text-left max-w-xl gap-6">
          <p className="text-[#3157F6] text-xs/4 font-inter font-semibold uppercase tracking-[1.44px]">
            The People
          </p>
          <p className="text-[#171B2C] text-[32px]/9 sm:text-[48px]/14 font-jakarta font-extrabold tracking-[-0.8px] sm:tracking-[-1.2px]">
            Meet international <br className="block lg:hidden" /> students &
            teachers
          </p>
          <p className="text-[#656770] text-[16px]/6.5 sm:text-[18px]/7 font-inter font-normal">
            Morbi sit egestas dignissim pharetra, sed amet.{" "}
            <br className="block lg:hidden" /> Tempus justo senectus risus ac
            vel, velit, nunc. <br className="block lg:hidden" /> Eget commodo
            eget in aliquam facilisi facilisi <br className="block lg:hidden" />{" "}
            nec magna hendrerit. Placerat ipsum sit tellus{" "}
            <br className="block lg:hidden" /> urna, faucibus aenean lorem
            faucibus integer.
          </p>

          <div className="flex lg:flex-row flex-col gap-4 w-full">
            <Button
              href="/#"
              className="w-67 h-13.5 bg-white! hover:bg-[#E2E8FF]! border border-l border-[#DBDFEB]! font-inter font-bold! text-[14px]/6 text-[#171B2C]! hover:text-[#000000]! text-center"
              label="Explore teachers and students"
            />
          </div>
        </div>
        <div className="relative w-full max-w-100 sm:max-w-100 lg:max-w-125 mx-auto flex justify-center">
          <div className="relative inline-block w-full">
            <Image
              className="block relative z-10 w-full h-auto"
              src="/image-section.svg"
              alt="Section Image"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
