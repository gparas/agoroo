import { DynamicIcon, IconName } from "lucide-react/dynamic";
import { FEATURES } from "./constants";

const Highlights = () => {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-base/7 text-gray-600">Features</p>
          <h2 className="text-4xl tracking-tight text-balance sm:text-6xl">
            Home Highlights
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="flex items-center gap-8 rounded-3xl p-8 ring-1 ring-gray-900/10"
            >
              <div className="flex flex-1 items-center justify-items-start gap-5">
                <div className="text-4xl lg:text-5xl">{feature.qty}</div>
                <div className="flex flex-1 flex-col">
                  <h3 className="text-xl tracking-tight lg:text-2xl">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-50 ring-1 ring-gray-900/10">
                <DynamicIcon name={feature.icon as IconName} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
