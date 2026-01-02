import BgImage from "./bg-image";
import IntroductionHeading from "./heading";
import IntroductionInfo from "./info";

const Introduction = () => {
  return (
    <section
      id="introduction"
      className="relative flex flex-col overflow-hidden bg-zinc-800 p-6 sm:h-screen"
      style={{ minHeight: 680 }}
    >
      <BgImage />
      <div className="relative container mx-auto flex flex-1 flex-col">
        <div className="flex flex-1 flex-col justify-between">
          <IntroductionHeading />
          <IntroductionInfo />
        </div>
      </div>
    </section>
  );
};

export default Introduction;
