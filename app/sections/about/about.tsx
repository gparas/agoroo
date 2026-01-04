import Image from "next/image";
import { ShieldCheck } from "lucide-react";

import FadeIn from "@/components/fade-in";

import Profile from "./profile.jpg";
import TickerAbout from "./ticker";

const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-24 sm:py-32">
      <FadeIn className="mx-auto max-w-2xl px-6 xl:px-10">
        <div className="flex flex-col items-center gap-8">
          <div className="relative">
            <Image
              src={Profile}
              width={112}
              height={112}
              alt="George Parapanissios Profile Picture"
              className="inline-block size-28 rounded-full outline -outline-offset-1 outline-black/5"
            />
            <span className="absolute right-0 bottom-0 inline-flex size-7 items-center justify-center rounded-full bg-rose-500 ring-2 ring-white">
              <ShieldCheck className="size-5 text-white" />
            </span>
          </div>
          <p className="mb-20 text-center text-xl">
            Agoroo is the ideal base for discovering Athens. Wake up in a true
            Athenian neighbourhood, explore ancient streets just minutes away,
            and return to a calm, stylish space designed for comfort.
          </p>
        </div>
      </FadeIn>
      <TickerAbout />
    </section>
  );
};

export default AboutSection;
