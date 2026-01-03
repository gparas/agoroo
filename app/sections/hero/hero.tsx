import Image from "next/image";

import Logo from "@/components/logo";
import BookButton from "@/components/book-button";

import HeroImage from "./hero2.jpg";
import Link from "next/link";

const HeroSection = () => {
  return (
    <header
      id="hero"
      className="flex flex-col py-6 lg:h-screen"
      style={{ maxHeight: 1200 }}
    >
      <div className="container mx-auto flex-1 px-6 xl:px-10">
        <div className="grid h-full flex-1 grid-cols-1 gap-x-4 gap-y-20 lg:grid-cols-2">
          <div className="flex flex-col gap-14 lg:p-6">
            <Link href="/" aria-label="agoroo">
              <Logo />
            </Link>
            <div className="flex flex-1 items-center justify-center gap-8">
              <div className="flex flex-col items-center gap-6 text-center">
                <Link
                  href="#location"
                  className="relative mb-2 rounded-full px-3 py-1 text-sm/6 text-zinc-600 ring-1 ring-zinc-900/10 hover:ring-zinc-900/20"
                >
                  Agiou Orous 4, Athens, Greece
                </Link>
                <h1 className="max-w-md text-5xl font-medium tracking-tight text-balance sm:text-6xl">
                  Urban Comfort in Athens
                </h1>
                <BookButton />
              </div>
            </div>
          </div>
          <div className="relative flex aspect-square overflow-hidden rounded-4xl p-6 lg:aspect-auto">
            <Image
              src={HeroImage}
              alt="Hero Image"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
