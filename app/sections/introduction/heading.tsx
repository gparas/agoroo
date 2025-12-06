import FadeIn from "@/components/fade-in";

const IntroductionHeading = () => {
  return (
    <FadeIn className="flex flex-col gap-4 py-6">
      <p className="text-white">Introduction</p>
      <h2 className="text-4xl text-white md:text-5xl" style={{ maxWidth: 576 }}>
        5th Avenue apartment in the heart of New York
      </h2>
    </FadeIn>
  );
};

export default IntroductionHeading;
