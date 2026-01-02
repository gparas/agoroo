import FadeIn from "@/components/fade-in";

const Header = () => {
  return (
    <FadeIn className="mx-auto mb-16 max-w-2xl text-center">
      <p className="text-base/7 text-zinc-400">Location</p>
      <h2 className="text-3xl tracking-tight text-balance sm:text-5xl">
        Where You’ll Stay
      </h2>
    </FadeIn>
  );
};

export default Header;
