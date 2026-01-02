import Link from "next/link";
import BookButton from "@/components/book-button";
import { MENU_ITEMS } from "./constants";
import dayjs from "dayjs";

const Footer = () => {
  return (
    <footer className="border-t border-zinc-700 bg-zinc-800 py-16 text-white">
      <div className="container mx-auto px-6 xl:px-10">
        <div className="mb-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="flex flex-col items-start justify-center">
            <h2
              className="mb-8 text-3xl tracking-tight text-balance sm:text-5xl"
              style={{ maxWidth: 440 }}
            >
              Always Here for Our Guests
            </h2>
            <BookButton inverse />
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <h3 className="mb-2 text-base/7 text-zinc-400">Menu</h3>
              <nav className="flex flex-col">
                {MENU_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="py-0.5 text-xl text-zinc-300 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <h3 className="mb-2 text-base/7 text-zinc-400">Contact</h3>
              <a
                href="https://wa.me/306999423456"
                className="py-0.5 text-xl text-zinc-300 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        <span className="text-sm text-zinc-400">
          Copyright © {dayjs().year()} Agoroo
        </span>
      </div>
    </footer>
  );
};

export default Footer;
