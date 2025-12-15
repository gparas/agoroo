import Image from "next/image";
import { ShieldCheck } from "lucide-react";

import FadeIn from "@/components/fade-in";

import Profile from "./profile.jpg";
import TickerAbout from "./ticker";

const AboutSection = () => {
  return (
    <section className="bg-white py-24 sm:py-32">
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
            <span className="absolute right-0 bottom-0 inline-flex size-7 items-center justify-center rounded-full bg-pink-600 ring-2 ring-white">
              <ShieldCheck className="size-5 text-white" />
            </span>
          </div>
          <p className="mb-20 text-center text-xl">
            Welcome to my cosy apartment on Agiou Orous, located in the vibrant
            heart of Kerameikos. This neighbourhood features traditional
            tavernas, creative spaces, and lively bars, all within walking
            distance of the historic center. Don’t miss the opportunity to
            explore and enjoy an authentic experience in Athens!
          </p>
        </div>
      </FadeIn>
      <TickerAbout />
    </section>
  );
};

export default AboutSection;
