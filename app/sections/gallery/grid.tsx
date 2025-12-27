import Image from "next/image";
import FadeIn from "@/components/fade-in";

import CloseUpKitchen from "./images/close-up-kitchen.jpg";
import DiningRoom from "./images/dining-room.jpg";
import SideTable from "./images/side-table.jpg";
import LivingRoom from "./images/living-room.jpg";
import Bedroom from "./images/bedroom.jpg";
import Kitchen from "./images/kitchen.png";
import Bathroom from "./images/bathroom.jpg";
import Entryway from "./images/entryway.jpg";
import Balcony from "./images/balcony.jpg";

const GalleryGrid = () => {
  return (
    <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-10">
      <div className="flex flex-col gap-4 md:col-span-3">
        <FadeIn className="relative flex aspect-square flex-col justify-end overflow-hidden rounded-2xl bg-gray-800 p-4">
          <Image
            fill
            src={DiningRoom}
            sizes="(max-width: 768px) 100vw, 30vw"
            className="object-cover object-bottom opacity-80"
            alt="Minimalist dining corner with a wooden table and black chairs"
          />
          <div className="relative text-white">
            <p>O1</p>
            <h3 className="text-xl">Dining Room</h3>
          </div>
        </FadeIn>
        <FadeIn
          className="relative flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-800 p-4"
          style={{ aspectRatio: "4/6" }}
        >
          <Image
            fill
            src={CloseUpKitchen}
            sizes="(max-width: 768px) 100vw, 30vw"
            alt="Close-up of wooden kitchen countertop with cookbooks"
            className="object-cover object-bottom opacity-75"
          />
          <div className="relative text-white">
            <p>O2</p>
            <h3 className="text-xl">Kitchen</h3>
          </div>
        </FadeIn>
        <FadeIn className="relative flex aspect-square flex-col justify-end overflow-hidden rounded-2xl bg-gray-800 p-4">
          <Image
            fill
            src={SideTable}
            sizes="(max-width: 768px) 100vw, 30vw"
            alt="Styled coffee table with modern ceramic decor"
            className="object-cover opacity-75"
          />
          <div className="relative text-white">
            <p>O3</p>
            <h3 className="text-xl">Side Table</h3>
          </div>
        </FadeIn>
      </div>
      <div className="flex flex-col gap-4 md:col-span-4">
        <FadeIn className="relative flex aspect-square flex-col justify-end overflow-hidden rounded-2xl bg-gray-800 p-4">
          <Image
            fill
            src={LivingRoom}
            sizes="(max-width: 768px) 100vw, 40vw"
            alt="Contemporary living room with a grey sofa"
            className="object-cover object-bottom-left opacity-80"
          />
          <div className="relative text-white">
            <p>O4</p>
            <h3 className="text-xl">Living Room</h3>
          </div>
        </FadeIn>
        <FadeIn className="relative flex aspect-square flex-col justify-end overflow-hidden rounded-2xl bg-gray-800 p-4">
          <Image
            fill
            src={Bedroom}
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover object-bottom opacity-80"
            alt="Bright bedroom with warm bedside lighting"
          />
          <div className="relative text-white">
            <p>O5</p>
            <h3 className="text-xl">Bedroom</h3>
          </div>
        </FadeIn>
        <FadeIn className="relative flex aspect-square flex-col justify-end overflow-hidden rounded-2xl bg-gray-800 p-4">
          <Image
            fill
            src={Kitchen}
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover object-bottom-right opacity-80"
            alt="Modern fully equipped kitchen"
          />
          <div className="relative text-white">
            <p>O6</p>
            <h3 className="text-xl">Kitchen</h3>
          </div>
        </FadeIn>
      </div>
      <div className="flex flex-col gap-4 md:col-span-3">
        <FadeIn className="relative flex aspect-square flex-col justify-end overflow-hidden rounded-2xl bg-gray-800 p-4">
          <Image
            fill
            src={Entryway}
            sizes="(max-width: 768px) 100vw, 30vw"
            className="object-cover opacity-80"
            style={{ objectPosition: "25% 75%" }}
            alt="Minimalist entryway area with open wardrobe rack"
          />
          <div className="relative text-white">
            <p>O7</p>
            <h3 className="text-xl">Entryway</h3>
          </div>
        </FadeIn>
        <FadeIn
          className="relative flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-800 p-4"
          style={{ aspectRatio: "6/8" }}
        >
          <Image
            fill
            src={Bathroom}
            sizes="(max-width: 768px) 100vw, 30vw"
            className="object-cover object-bottom opacity-80"
            alt="Modern bathroom with dark stone tiles and wooden storage cabinet"
          />
          <div className="relative text-white">
            <p>O8</p>
            <h3 className="text-xl">Bathroom</h3>
          </div>
        </FadeIn>
        <FadeIn className="relative flex aspect-square flex-col justify-end overflow-hidden rounded-2xl bg-gray-800 p-4">
          <Image
            fill
            src={Balcony}
            sizes="(max-width: 768px) 100vw, 30vw"
            className="object-cover opacity-80"
            style={{ objectPosition: "60% 85%" }}
            alt="Sunny balcony with two black outdoor chairs"
          />
          <div className="relative text-white">
            <p>O9</p>
            <h3 className="text-xl">Balcony</h3>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default GalleryGrid;
