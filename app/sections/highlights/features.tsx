import { DynamicIcon, IconName } from "lucide-react/dynamic";
import FadeIn, { FadeInStagger } from "@/components/fade-in";

import { FEATURES } from "./constants";

const Features = () => {
  return (
    <FadeInStagger className="mb-20 grid grid-cols-1 gap-4 lg:grid-cols-3">
      {FEATURES.map((feature) => (
        <FadeIn
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
        </FadeIn>
      ))}
    </FadeInStagger>
  );
};

export default Features;
