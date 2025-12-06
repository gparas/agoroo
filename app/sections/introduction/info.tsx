import { Fragment } from "react/jsx-runtime";
import { DynamicIcon, IconName } from "lucide-react/dynamic";
import FadeIn, { FadeInStagger } from "@/components/fade-in";

const ROWS = [
  {
    title: "Guest Support",
    description: "Always available to assist day or night.",
    icon: "message-circle-more",
    value: "24/7",
  },
  {
    title: "Self Check-In",
    description: "Total flexibility with smart lock access",
    icon: "key-round",
    value: "100%",
  },
  {
    title: "Cleaning Standards",
    description: "Professionally cleaned before stay",
    icon: "sparkles",
    value: "5-Star",
  },
];

const IntroductionInfo = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      <FadeInStagger className="flex flex-col gap-6 rounded-4xl bg-white p-8 lg:col-start-2 xl:col-start-3">
        {ROWS.map((row, index) => (
          <Fragment key={index}>
            <FadeIn>
              <div className="flex flex-col gap-x-4 md:flex-row md:items-center">
                <p className="text-3xl md:text-4xl">{row.value}</p>
                <div className="flex-1">
                  <p className="text-xl md:text-2xl">{row.title}</p>
                  <p className="hidden text-gray-600 md:block">
                    {row.description}
                  </p>
                </div>
                <DynamicIcon
                  name={row.icon as IconName}
                  className="hidden size-8 md:block"
                  strokeWidth={1.5}
                />
              </div>
            </FadeIn>
            {index < ROWS.length - 1 && <hr className="border-gray-200" />}
          </Fragment>
        ))}
      </FadeInStagger>
    </div>
  );
};

export default IntroductionInfo;
