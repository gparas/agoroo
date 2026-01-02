"use client";

import { airbnbLink } from "@/lib/constants";
import dayjs from "dayjs";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const MotionArrow = motion.create(ArrowUpRight);

interface Props {
  inverse?: boolean;
}

const BookButton = ({ inverse }: Props) => {
  const checkIn = dayjs().add(2, "day").format("YYYY-MM-DD");
  const checkOut = dayjs().add(5, "day").format("YYYY-MM-DD");
  return (
    <motion.a
      target="_blank"
      rel="noopener noreferrer"
      href={`${airbnbLink}?check_in=${checkIn}&check_out=${checkOut}&guests=1&adults=1`}
      className={`relative inline-flex items-center justify-center gap-4 rounded-full py-1 pr-5 pl-1 text-center ${inverse ? "bg-white text-zinc-900 hover:bg-white/95" : "bg-zinc-900 text-white hover:bg-zinc-800"}`}
      whileHover="hover"
    >
      <span
        className={`flex size-11 items-center justify-center rounded-full ${inverse ? "bg-zinc-900 text-white" : "bg-white text-zinc-900"}`}
      >
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
      <span>Reserve Now</span>
    </motion.a>
  );
};

export default BookButton;
