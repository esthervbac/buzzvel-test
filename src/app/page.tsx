import { Header } from "@/components/Header";
import { Categories } from "@/components/home/CategoriesContent";
import { FeaturedCourseContent } from "@/components/home/FeaturedCourseContent";
import { Hero } from "@/components/home/HeroContent";
import { HowItWorksContent } from "@/components/home/HowItWorksContent";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center">
        <Hero />
        <Categories />
        <FeaturedCourseContent />
        <HowItWorksContent />
      </main>
    </div>
  );
}
