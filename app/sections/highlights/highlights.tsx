import Header from "./header";
import Features from "./features";
import Amenities from "./amenities";

const Highlights = () => {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-6 xl:px-10">
        <Header />
        <Features />
        <Amenities />
      </div>
    </section>
  );
};

export default Highlights;
