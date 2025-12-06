"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import Content from "./bg-image.jpg";

const BgImage = () => {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 1], ["-40%", "0%"]);

  return (
    <motion.div
      className="absolute inset-0 opacity-60"
      style={{
        y,
        height: "140%",
      }}
    >
      <Image
        fill
        src={Content}
        alt="Modern open-plan studio with kitchen, dining table, and cozy living area."
        className="bg-bottom object-cover"
        priority
        sizes="100vw"
      />
    </motion.div>
  );
};

export default BgImage;
