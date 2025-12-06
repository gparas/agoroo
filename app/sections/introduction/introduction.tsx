import BgImage from "./bg-image";
import IntroductionHeading from "./heading";
import IntroductionInfo from "./info";

const Introduction = () => {
  return (
    <section
      className="relative flex h-screen flex-col overflow-hidden bg-gray-800 p-6"
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
