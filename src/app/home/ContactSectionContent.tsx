import { ContactForm } from "../components/ContactForm";
import { InfoBox } from "../components/InfoBox";

export function ContactSection() {
  return (
    <div className="flex w-full m-h-140 sm:min-h-[calc(100vh-80px)] items-center justify-center bg-[#FFFFFF] dark:bg-black pt-8 lg:pt-0 pb-16 px-4">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between gap-16 max-w-7xl w-full mt-10 sm:mt-15">
        <InfoBox />
        <ContactForm />
      </div>
    </div>
  );
}
