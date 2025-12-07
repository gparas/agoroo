import Gallery from "./sections/gallery";
import HeroSection from "./sections/hero";
import Highlights from "./sections/highlights";
import Introduction from "./sections/introduction";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Introduction />
      <Highlights />
      <Gallery />
    </>
  );
}
