import Reviews from "./sections/reviews";
import Gallery from "./sections/gallery";
import HeroSection from "./sections/hero";
import OfferSection from "./sections/offer";
import AboutSection from "./sections/about";
import Highlights from "./sections/highlights";
import Introduction from "./sections/introduction";
import LocationSection from "./sections/location";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Introduction />
      <AboutSection />
      <Gallery />
      <Highlights />
      <OfferSection />
      <Reviews />
      <LocationSection />
    </>
  );
}
