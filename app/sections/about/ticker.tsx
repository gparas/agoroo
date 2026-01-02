"use client";

import { Ticker } from "motion-plus/react";
import { DynamicIcon, IconName } from "lucide-react/dynamic";
import { ComfortTickerItems, LocationTickerItems } from "./constants";

const Box = ({ title, icon }: { title: string; icon: IconName }) => {
  return (
    <div
      key={title}
      className="flex items-center gap-x-3 rounded-full border border-zinc-900/10 bg-white py-2 pr-4 pl-2"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-50 ring-1 ring-zinc-900/10">
        <DynamicIcon name={icon} className="size-6 shrink-0 text-zinc-600" />
      </div>
      <span className="text-xl">{title}</span>
    </div>
  );
};

const TickerAbout = () => {
  return (
    <div className="flex flex-col gap-6">
      <Ticker
        velocity={50}
        items={LocationTickerItems.map((item) => (
          <Box
            key={item.title}
            title={item.title}
            icon={item.icon as IconName}
          />
        ))}
      />
      <Ticker
        velocity={-50}
        items={ComfortTickerItems.map((item) => (
          <Box
            key={item.title}
            title={item.title}
            icon={item.icon as IconName}
          />
        ))}
      />
    </div>
  );
};

export default TickerAbout;
