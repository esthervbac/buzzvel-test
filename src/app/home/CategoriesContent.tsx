import { Card } from "@/app/components/Card";

export function Categories() {
  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-80px)] items-center justify-start bg-[#FFFFFF] dark:bg-black pt-4 lg:pt-24 pb-16 px-4">
      <div className="flex flex-col text-left max-w-7xl w-full gap-12 pt-12">
        <div className="flex text-left max-w-7xl w-full">
          <div className="flex flex-col text-left max-w-xl gap-6">
            <p className="text-[#3157F6] text-xs/4 font-inter font-semibold uppercase tracking-[1.44px]">
              Find your next skill
            </p>
            <p className="text-[#171B2C] text-[32px]/9 sm:text-[48px] sm:leading-17.5 font-jakarta font-extrabold tracking-[-0.8px] sm:tracking-[-1.2px]">
              <span className="whitespace-nowrap">Learn something worth</span>
              <br /> knowing.
            </p>
            <p className="text-[#656770] text-[16px]/6.5 sm:text-[18px]/7 font-inter font-normal">
              Short, practical courses designed around skills you can put to
              work immediately.
            </p>
          </div>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-start gap-4 pt-4 w-full">
          <Card
            number="1"
            title="Design"
            text="Learn the fundamentals of design, from color theory to typography."
            labelLink="Explore"
            href="#"
          />
          <Card
            number="2"
            title="Technology"
            text="Build practical skills in web development, data science, and more."
            labelLink="Explore"
            href="#"
          />
          <Card
            number="3"
            title="Business"
            text="Develop practical skills for better decisions and stronger teams."
            labelLink="Explore"
            href="#"
          />
          <Card
            number="4"
            title="Creative"
            text="Explore new ways to communicate, create and tell stories."
            labelLink="Explore"
            href="#"
          />
        </div>
      </div>
    </div>
  );
}
