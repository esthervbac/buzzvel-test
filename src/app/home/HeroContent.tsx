import Image from "next/image";
import { Button } from "@/app/components/Button";

export function Hero() {
  return (
    <div className="flex w-full m-h-140 sm:min-h-[calc(100vh-80px)] items-center justify-center bg-[#F9F8F3] dark:bg-black pt-8 lg:pt-0 pb-16 px-4">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-16 max-w-7xl w-full">
        <div className="flex flex-col text-left max-w-xl gap-6 order-2 lg:order-1">
          <p className="text-[#3157F6] text-xs/4 font-inter font-semibold uppercase tracking-[1.44px]">
            Learn at your own pace
          </p>
          <p className="text-[#171B2C] text-[40px]/11 sm:text-[64px] sm:leading-17.5 font-jakarta font-extrabold tracking-[-1px] sm:tracking-[-1.60px]">
            Build skills that actually move you forward.
          </p>
          <p className="text-[#656770] text-[16px]/6.5 sm:text-[18px] sm:leading-7 font-inter font-normal">
            Practical courses taught by people who do the work <br />
            every day. Learn design, technology, business and more <br />— one
            focused lesson at a time.
          </p>

          <div className="flex lg:flex-row flex-col gap-4 w-full">
            <Button href="/#" variant="primary" label="Explore courses" />
            <Button href="/#" variant="secondary" label="See how it works" />
          </div>

          <div className="flex flex-row items-center justify-center lg:justify-start gap-3 pt-2">
            <div className="flex items-center">
              <Image
                src="/trusted-people.svg"
                alt="Trusted People"
                width={80}
                height={32}
                priority
              />
            </div>

            <p className="text-[#171B2C] text-sm/6 font-inter font-medium">
              Trusted by 24,000+
              <span className="text-[#656770] ml-1">learners</span>
            </p>
          </div>
        </div>
        <div className="relative order-1 lg:order-2 w-full max-w-100 sm:max-w-100 lg:max-w-125 mx-auto flex justify-center">
          <div className="relative inline-block w-full">
            <Image
              className="block relative z-10 w-full h-auto"
              src="/woman.svg"
              alt="Image woman"
              width={500}
              height={520}
              priority
            />
            <div className="absolute top-4 -left-3 sm:-left-5.5 w-48 sm:w-53.25 h-14 bg-white dark:bg-zinc-900 shadow-[0px_4px_24px_0px_#0000001A] rounded-xl py-3 px-3 sm:px-4 flex items-center justify-between z-20 scale-90 sm:scale-100 origin-top-left">
              <div className="flex flex-row items-center gap-3">
                <div className="w-10.75 h-8 rounded-lg bg-[#E2E8FF] flex items-center justify-center">
                  <span className="text-sm/6 font-bold text-[#3157F6] font-inter">
                    120+
                  </span>
                </div>
                <span className="text-xs sm:text-sm/6 font-inter font-normal text-[#171B2C] dark:text-white">
                  expert-led courses
                </span>
              </div>
            </div>
            <div className="absolute top-80 sm:top-82 lg:top-100.75 -left-5 sm:left-[-44.8px] w-20 sm:w-26.5 h-20 sm:h-26.5 flex z-0 pointer-events-none">
              <Image
                src="/circulo.svg"
                alt="Circulo"
                width={106}
                height={106}
                priority
              />
            </div>
            <div className="absolute -top-6 sm:top-6 lg:top-6 left-87 sm:left-55 lg:left-112.5 w-18 sm:w-22.25 h-117 flex z-0 pointer-events-none">
              <Image
                src="/imagem-container.svg"
                alt="Imagem Container"
                width={89}
                height={468}
                priority
              />
            </div>
            <div className="absolute top-85 left-60 sm:top-90 sm:left-50 lg:top-[436.5px] lg:left-[348.2px] w-48 sm:w-52.25 h-12 bg-white dark:bg-zinc-900 shadow-[0px_4px_24px_0px_#0000001A] rounded-xl py-3 px-3 sm:px-4 flex items-center justify-between gap-4 sm:gap-8 z-20 scale-90 sm:scale-100">
              <div className="flex flex-row items-center gap-3">
                <div className="flex items-center justify-center">
                  <Image
                    src="/stars.svg"
                    alt="Stars"
                    width={78}
                    height={14}
                    priority
                  />
                </div>
                <span className="text-xs sm:text-sm/6 font-inter font-normal text-[#171B2C] dark:text-white">
                  4.9 avg rating
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
