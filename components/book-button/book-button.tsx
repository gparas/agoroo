"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const MotionArrow = motion(ArrowUpRight);

const BookButton = () => {
  return (
    <motion.a
      href="#"
      className="relative flex items-center justify-center gap-4 rounded-full bg-gray-900 py-1 pr-5 pl-1 text-center hover:bg-gray-800"
      whileHover="hover"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white">
        <span className="relative flex size-6 items-center justify-center overflow-hidden">
          <MotionArrow
            strokeWidth={1.5}
            style={{
              transformStyle: "preserve-3d",
              transform: "translate3d(0%, 0%, 0px)",
            }}
            variants={{
              hover: { transform: "translate3d(100%, -100%, 0)" },
            }}
          />
          <MotionArrow
            strokeWidth={1.5}
            className="absolute"
            style={{
              inset: "100% 100% auto auto",
              transform: "translate3d(0%, 0%, 0px)",
              transformStyle: "preserve-3d",
            }}
            variants={{
              hover: { transform: "translate3d(100%, -100%, 0)" },
            }}
          />
        </span>
      </span>
      <span className="text-white">Reserve Now</span>
    </motion.a>
  );
};

export default BookButton;
