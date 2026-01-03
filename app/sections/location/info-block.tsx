import React from "react";
import { INFO_BLOCKS } from "./constants";
import FadeIn from "@/components/fade-in";

const InfoBlock = () => {
  return (
    <div className="mx-auto mb-16 flex max-w-3xl flex-col justify-center divide-y divide-zinc-700 md:flex-row md:divide-x md:divide-y-0">
      {INFO_BLOCKS.map((block, idx) => (
        <FadeIn key={idx} className="flex-1 px-6 py-6 text-center md:py-0">
          <p className="text-zinc-400">{block.title}:</p>
          <p className="text-2xl">{block.content}</p>
        </FadeIn>
      ))}
    </div>
  );
};

export default InfoBlock;
