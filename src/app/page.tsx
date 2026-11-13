import Image from "next/image";
import { Header } from "@/components/Header";
import { Button } from "@/components/header/Button";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center">
        <div className="flex w-full min-h-140 items-center justify-center bg-[#F9F8F3] dark:bg-black py-16 px-4">
          <div className="flex flex-row items-center justify-between gap-12 max-w-7xl w-full">
            <div className="flex flex-col text-left max-w-2xl gap-6">
              <p className="text-[#3157F6] text-xs/4 font-sans font-semibold uppercase tracking-[1.44px]">
                Learn at your own pace
              </p>
              <p className="text-[#171B2C] text-[64px] leading-17.5 font-sans font-extrabold tracking-[-1.60px]">
                Build skills that actually move you forward.
              </p>
              <p className="text-[#656770] text-[18px] leading-7 font-sans font-normal">
                Practical courses taught by people who do the work <br />
                every day. Learn design, technology, business and more <br />—
                one focused lesson at a time.
              </p>

              <div className="flex flex-row gap-4 w-full">
                <Button href="/#" variant="primary" label="Explore courses" />
                <Button
                  href="/#"
                  variant="secondary"
                  label="See how it works"
                />
              </div>

              <div className="flex flex-row items-center gap-3 pt-2">
                <div className="flex items-center">
                  <Image
                    className="rounded-full object-cover border-2 border-white dark:border-black z-30"
                    src="/trustedone.jpg"
                    alt="Trusted One"
                    width={32}
                    height={32}
                    priority
                  />
                  <Image
                    className="rounded-full object-cover border-2 border-white dark:border-black -ml-3 z-20"
                    src="/trustedtwo.jpg"
                    alt="Trusted Two"
                    width={32}
                    height={32}
                    priority
                  />
                  <Image
                    className="rounded-full object-cover border-2 border-white dark:border-black -ml-3 z-10"
                    src="/trustedthree.jpg"
                    alt="Trusted Three"
                    width={32}
                    height={32}
                    priority
                  />
                </div>

                <p className="text-[#171B2C] text-sm/6 font-sans font-medium">
                  Trusted by 24,000+
                  <span className="text-[#656770] ml-1">learners</span>
                </p>
              </div>
            </div>

            <div>
              <Image
                className="rounded-3xl object-cover"
                src="/image-woman.jpg"
                alt="Image woman"
                width={400}
                height={420}
                priority
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
