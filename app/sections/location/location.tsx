import Header from "./header";
import LocationMap from "./map";
import InfoBlock from "./info-block";

const LocationSection = () => {
  return (
    <section id="location" className="bg-zinc-900 py-24 text-white sm:py-32">
      <div className="container mx-auto px-6 xl:px-10">
        <Header />
        <InfoBlock />
        <div className="h-96 w-full overflow-hidden rounded-3xl border border-zinc-700 md:h-[560px]">
          <LocationMap />
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
