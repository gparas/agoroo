import Image from "next/image";
import BgImage from "./bg.jpg";
import BookButton from "@/components/book-button";

const OfferSection = () => {
  return (
    <section id="offer">
      <div className="container mx-auto px-6">
        <div className="relative flex flex-col items-center overflow-hidden rounded-3xl bg-zinc-900 px-6 py-28 md:px-10 md:py-40">
          <Image
            src={BgImage}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-75"
          />
          <div className="relative flex flex-col items-center gap-3 text-white">
            <p className="text-base/7">Special Offer</p>
            <h2
              className="mb-4 text-center text-3xl tracking-tight text-balance sm:text-5xl"
              style={{ maxWidth: 584 }}
            >
              Plan your trip in advance and unlock exclusive savings!
            </h2>
            <BookButton inverse />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
