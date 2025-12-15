import BookButton from "@/components/book-button";
import FadeIn from "@/components/fade-in";

const Header = () => {
  return (
    <FadeIn className="mx-auto mb-16 max-w-96 text-center">
      <p className="mb-3 text-gray-600">Gallery</p>
      <h2 className="mb-8 text-3xl text-balance sm:text-5xl">
        Explore the Apartment
      </h2>
      <BookButton />
    </FadeIn>
  );
};

export default Header;
