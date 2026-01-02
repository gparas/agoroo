import Header from "./header";
import LocationMap from "./map";
import InfoBlock from "./info-block";

const LocationSection = () => {
  return (
    <section id="location" className="bg-zinc-800 py-24 text-white sm:py-32">
      <div className="container mx-auto px-6 xl:px-10">
        <Header />
        <InfoBlock />
        <div
          className="w-full overflow-hidden rounded-3xl border border-zinc-700"
          style={{ height: 560 }}
        >
          <LocationMap />
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
