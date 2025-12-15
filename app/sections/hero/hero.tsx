import Image from "next/image";

import HeroImage from "./hero2.jpg";
import BookButton from "@/components/book-button";

const HeroSection = () => {
  return (
    <header className="flex h-screen flex-col p-4" style={{ maxHeight: 1200 }}>
      <div className="container mx-auto flex w-full flex-1 flex-col">
        <div className="grid flex-1 grid-cols-1 gap-x-4 gap-y-10 lg:grid-cols-2">
          <div className="flex flex-col lg:p-6">
            <div>logo</div>
            <div className="flex flex-1 items-center justify-center gap-8">
              <div className="flex flex-col items-center gap-4 text-center">
                <a className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  Agiou Orous 4, Athens 104 35
                </a>
                <h1 className="max-w-md text-5xl font-medium tracking-tight text-balance sm:text-6xl">
                  Urban Comfort in Athens
                </h1>
                <BookButton />
              </div>
            </div>
          </div>
          <div className="relative flex overflow-hidden rounded-4xl p-6">
            <Image
              src={HeroImage}
              alt="Hero Image"
              fill
              priority
              className="object-cover object-bottom-right"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
