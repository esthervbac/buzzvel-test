import Image from "next/image";

export function InfoBox() {
  return (
    <div className="flex flex-col text-left w-full max-w-xl gap-6 px-4 sm:px-6 lg:px-0">
      <p className="text-[#3157F6] text-xs/4 font-inter font-semibold uppercase tracking-[1.44px]">
        Contact
      </p>
      <p className="text-[#171B2C] text-[32px]/9 sm:text-[48px]/14 font-jakarta font-extrabold tracking-[-0.8px] sm:tracking-[-1.2px]">
        Get in touch
      </p>
      <p className="text-[#656770] text-[14px]/6 sm:text-[18px]/7 font-inter font-normal">
        Have a question? We&apos;re here to help. Whether you&apos;re looking
        for the right course, learning with your team or interested in teaching
        with Luma, we&apos;d love to hear from you.
      </p>
      <div className="w-full sm:w-120 h-auto sm:h-23 bg-[#F9F8F3] rounded-xl p-5 gap-4">
        <div className="flex flex-row items-start justify-start gap-6">
          <Image
            className="blockw-full h-auto"
            src="/icon-message.svg"
            alt="Icon Message"
            width={40}
            height={40}
            priority
          />
          <div className="flex flex-col items-start justify-start">
            <p className="text-[14px]/6 font-normal font-inter text-[#171B2C]">
              Email
            </p>
            <p className="text-[14px]/6 font-normal font-inter text-[#3157F6] hover:underline">
              contact@luma.com
            </p>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-120 h-auto sm:h-23 bg-[#F9F8F3] rounded-xl p-5 gap-4">
        <div className="flex flex-row items-start justify-start gap-6">
          <Image
            className="blockw-full h-auto"
            src="/icon-time.svg"
            alt="Icon Time"
            width={40}
            height={40}
            priority
          />
          <div className="flex flex-col items-start justify-start">
            <p className="text-[14px]/6 font-normal font-inter text-[#171B2C]">
              Response Time
            </p>
            <p className="text-[14px]/6 font-normal font-inter text-[#6D7384]">
              Up to 24 hours on business days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
