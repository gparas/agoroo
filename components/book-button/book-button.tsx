import { ArrowUpRight } from "lucide-react";

const BookButton = () => {
  return (
    <a
      href="#"
      className="flex items-center justify-center gap-4 rounded-full bg-gray-900 py-1 pr-5 pl-1 text-center hover:bg-gray-800"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white">
        <ArrowUpRight strokeWidth={1.5} />
      </span>
      <span className="text-white">Reserve Now</span>
    </a>
  );
};

export default BookButton;
