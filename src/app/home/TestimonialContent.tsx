import Image from "next/image";

export function Testimonial() {
  return (
    <div className="flex w-full min-h-[calc(100vh-80px)] items-start justify-start bg-white dark:bg-black pt-8 lg:pt-0 pb-16 px-4">
      <div className="flex flex-col lg:flex-row items-start justify-start gap-16 max-w-7xl w-full mx-auto mt-25">
        <div className="flex flex-col items-start justify-start max-w-xl gap-6">
          <Image
            src="/quote.svg"
            alt="Quote"
            width={23.71}
            height={21.95}
            priority
          />
          <p className="text-[#171B2C] text-[20px]/8 sm:text-[30px]/11 font-jakarta font-semibold tracking-[-0.75px] sm:tracking-[-0.75px]">
            The lessons are short enough to fit into my week, but detailed
            enough that I actually leave with something I can use.
          </p>
          <div className="flex flex-row items-start justify-start gap-4">
            <Image
              src="/rounded-image-woman.svg"
              alt="Rounded Image Woman"
              width={48}
              height={48}
              priority
            />
            <div className="flex flex-col items-start justify-start gap-1">
              <p className="text-[#171B2C] text-[16px]/6.5 sm:text-[16px]/7 font-inter font-bold">
                Alex Morgan
              </p>
              <p className="text-[#656770] text-[14px]/6 sm:text-[14px]/6 font-inter font-normal">
                Product Manager
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row sm:flex-col items-start justify-between sm:border-l sm:border-[#DBDFEB] lg:border-l lg:border-[#DBDFEB] lg:pl-12 w-full">
          <div className="flex flex-col items-start justify-start">
            <p className="text-[#3157F6] text-[40px]/11 sm:text-[64px]/17.5 font-jakarta font-extrabold tracking-[-1px] sm:tracking-[-1.6px] mb-1 sm:mb-3">
              24K+
            </p>
            <p className="text-[#6D7384] text-[14px]/6 sm:text-[14px]/6 font-inter font-normal mb-4">
              active learners
            </p>
          </div>
          <div className="flex flex-col items-start justify-start">
            <p className="text-[#3157F6] text-[40px]/11 sm:text-[64px]/17.5 font-jakarta font-extrabold tracking-[-1px] sm:tracking-[-1.6px] mb-1 sm:mb-3">
              120+
            </p>
            <p className="text-[#6D7384] text-[14px]/6 sm:text-[14px]/6 font-inter font-normal mb-4">
              expert-led <br className="block lg:hidden" />
              courses
            </p>
          </div>
          <div className="flex flex-col items-start justify-start">
            <p className="text-[#3157F6] text-[40px]/11 sm:text-[64px]/17.5 font-jakarta font-extrabold tracking-[-1px] sm:tracking-[-1.6px] mb-1 sm:mb-3">
              92%
            </p>
            <p className="text-[#6D7384] text-[14px]/6 sm:text-[14px]/6 font-inter font-normal mb-4">
              complete their <br className="block lg:hidden" /> first course
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
