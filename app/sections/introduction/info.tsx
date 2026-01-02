import { Fragment } from "react/jsx-runtime";
import { DynamicIcon, IconName } from "lucide-react/dynamic";

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
      <div className="flex flex-col gap-6 rounded-4xl bg-white p-8 lg:col-start-2 xl:col-start-3">
        {ROWS.map((row, index) => (
          <Fragment key={index}>
            <div>
              <div className="flex flex-col gap-x-4 md:flex-row md:items-center">
                <p className="text-3xl md:text-4xl">{row.value}</p>
                <div className="flex-1">
                  <p className="text-xl md:text-2xl">{row.title}</p>
                  <p className="hidden text-zinc-600 md:block">
                    {row.description}
                  </p>
                </div>
                <DynamicIcon
                  name={row.icon as IconName}
                  className="hidden size-8 md:block"
                  strokeWidth={1.5}
                />
              </div>
            </div>
            {index < ROWS.length - 1 && <hr className="border-zinc-200" />}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default IntroductionInfo;
