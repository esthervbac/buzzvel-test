import Image from "next/image";

export function HowItWorksContent() {
  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-80px)] items-center justify-center bg-[#F9F8F3] dark:bg-black pt-4 lg:pt-24 pb-16 px-4">
      <div className="flex flex-col items-center justify-center text-center max-w-7xl w-full gap-12 pt-12">
        <div className="flex justify-center max-w-7xl w-full">
          <div className="flex flex-col items-center text-center max-w-4xl gap-6">
            <p className="text-[#3157F6] text-xs/4 font-sans font-semibold uppercase tracking-[1.44px]">
              How Luma works
            </p>
            <p className="text-[#171B2C] text-[32px]/9 sm:text-[48px] sm:leading-17.5 font-sans font-extrabold tracking-[-0.8px] sm:tracking-[-1.2px]">
              Less browsing. More learning.
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex flex-row flex-wrap items-center justify-center gap-12 pt-12 w-full max-w-7xl mx-auto px-4">
        <div className="absolute top-22 left-1/2 -translate-x-1/2 w-full max-w-5xl hidden lg:block z-0 pointer-events-none px-8">
          <Image
            className="w-full h-auto"
            src="/line.svg"
            alt="Line"
            width={761}
            height={1}
            priority
          />
        </div>

        <div className="relative z-10 flex flex-col items-start text-left w-80 h-51.5 p-2">
          <Image
            src="/blue-container.svg"
            alt="Blue Container"
            width={56}
            height={56}
            priority
          />
          <p className="pt-4 text-[12px]/4 text-[#6D7384] tracking-[1.44px] font-semibold font-sans uppercase">
            Step 01
          </p>
          <p className="pt-4 text-[20px]/8 font-bold font-sans text-[#171B2C]">
            Choose your focus
          </p>
          <p className="pt-4 text-[16px]/7 font-normal font-sans text-[#656770]">
            Find courses based on the skill you want to build, not endless
            content categories.
          </p>
        </div>

        <div className="relative z-10 flex flex-col items-start text-left w-80 h-51.5 p-2 mt-10">
          <div className="absolute left-8 -top-9 lg:hidden z-0">
            <Image
              src="/vertical-line.svg"
              alt="Vertical Line"
              width={1}
              height={40}
              priority
            />
          </div>

          <Image
            src="/orange-container.svg"
            alt="Orange Container"
            width={56}
            height={56}
            priority
          />
          <p className="pt-4 text-[12px]/4 text-[#6D7384] tracking-[1.44px] font-semibold font-sans uppercase">
            Step 02
          </p>
          <p className="pt-4 text-[20px]/8 font-bold font-sans text-[#171B2C]">
            Learn from experience
          </p>
          <p className="pt-4 text-[16px]/7 font-normal font-sans text-[#656770]">
            Follow concise lessons created by professionals who use these
            skills.
          </p>
        </div>

        <div className="relative z-10 flex flex-col items-start text-left w-80 h-51.5 p-2 mt-10">
          <div className="absolute left-10 -top-7 lg:hidden z-0">
            <Image
              src="/vertical-line.svg"
              alt="Vertical Line"
              width={1}
              height={40}
              priority
            />
          </div>

          <div className="relative z-10 flex flex-col items-start text-left w-80 h-51.5 p-2">
            <Image
              src="/yellow-container.svg"
              alt="Yellow Container"
              width={56}
              height={56}
              priority
            />
            <p className="pt-4 text-[12px]/4 text-[#6D7384] tracking-[1.44px] font-semibold font-sans uppercase">
              Step 03
            </p>
            <p className="pt-4 text-[20px]/8 font-bold font-sans text-[#171B2C]">
              Put it into practice
            </p>
            <p className="pt-4 text-[16px]/7 font-normal font-sans text-[#656770]">
              Every course includes practical exercises designed to turn
              knowledge into action.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
