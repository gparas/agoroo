import FadeIn from "@/components/fade-in";

const IntroductionHeading = () => {
  return (
    <FadeIn className="flex flex-col gap-4 py-6">
      <p className="text-white">Introduction</p>
      <h2 className="text-4xl text-white md:text-5xl" style={{ maxWidth: 576 }}>
        Stylish Apartment in the Center of Athens
      </h2>
    </FadeIn>
  );
};

export default IntroductionHeading;
