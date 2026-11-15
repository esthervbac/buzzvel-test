import { Header } from "@/app/components/Header";
import { Hero } from "@/app/home/HeroContent";
import { Categories } from "@/app/home/CategoriesContent";
import { FeaturedCourseContent } from "@/app/home/FeaturedCourseContent";
import { HowItWorksContent } from "@/app/home/HowItWorksContent";
import { Testimonial } from "./home/TestimonialContent";
import { Section } from "./home/SectionContent";
import { ContactSection } from "./home/ContactSectionContent";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center">
        <Hero />
        <Categories />
        <FeaturedCourseContent />
        <HowItWorksContent />
        <Testimonial />
        <Section />
        <ContactSection />
      </main>
    </div>
  );
}
