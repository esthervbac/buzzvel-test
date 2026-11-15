import Image from "next/image";
import { Button } from "../components/Button";

export function FinalCTAContent() {
  return (
    <div className="flex flex-col w-full min-h-[469.5px] items-center justify-center bg-[#FFF1C2]">
      <div className="flex flex-col items-center justify-center text-center max-w-7xl w-full gap-12 pt-12">
        <div className="w-full h-[469.5px] lg:bg-[url('/final-cta-bg.svg')] lg:bg-cover lg:bg-center lg:bg-no-repeat flex flex-col items-center justify-center">
          <div className="flex flex-col items-center text-center max-w-4xl gap-6">
            <Image
              className="w-164 max-w-full h-auto"
              src="/final-cta-images.svg"
              alt="Final CTA Images"
              width={656}
              height={40}
              priority
            />
            <p className="text-[#171B2C] text-[36px]/10 sm:text-[56px]/16 font-jakarta font-extrabold tracking-[-0.9px] sm:tracking-[-1.4px]">
              What will you learn <br className="block lg:hidden" /> next?
            </p>
            <p className="text-[#656770] text-[16px]/6.5 sm:text-[18px]/7 font-inter font-normal">
              Start with one course. Build from there.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-6 sm:px-0">
              <Button
                href="/#"
                className="text-white! hover:bg-[#3157F6]! hover:text-[#90a2e9]! text-[14px]/6! font-bold! w-full sm:w-46.5 h-[52.5px] rounded-lg"
                label="Explore all courses"
              />
              <Button
                href="/#"
                className="bg-white! border! border-[#DBDFEB]! text-[#171B2C]! hover:bg-white! hover:text-[#3157F6]! text-[14px]/6! font-bold! w-full sm:w-32 h-[52.5px] rounded-lg"
                label="Join Luma"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
