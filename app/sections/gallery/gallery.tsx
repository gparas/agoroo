import GalleryGrid from "./grid";
import Header from "./header";

const Gallery = () => {
  return (
    <section id="gallery" className="bg-zinc-100 py-24 sm:py-32">
      <div className="container mx-auto px-6 xl:px-10">
        <Header />
        <GalleryGrid />
      </div>
    </section>
  );
};

export default Gallery;
