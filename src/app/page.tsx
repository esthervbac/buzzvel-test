import Image from "next/image";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center"></main>
    </div>
  );
}
