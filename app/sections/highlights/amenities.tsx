import { DynamicIcon, IconName } from "lucide-react/dynamic";
import { SoapDispenserDroplet } from "lucide-react";

import { AMENITIES } from "./constants";

const Amenities = () => {
  return (
    <div>
      <p className="mb-7 text-center text-base/7 text-gray-600">Amenities</p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-flow-col lg:grid-cols-6">
        <div className="sm:col-span-2 lg:col-start-3">
          <div className="flex h-full min-h-60 flex-col items-center justify-center gap-8 rounded-3xl p-8 ring-1 ring-gray-900/10">
            <div className="flex flex-col items-center justify-center gap-1">
              <SoapDispenserDroplet className="size-8" strokeWidth={1.5} />
              <h3 className="flex-1 text-xl">Essentials Kit</h3>
            </div>
          </div>
        </div>
        {AMENITIES.map((columnGroup, columnGroupIdx) => (
          <div key={columnGroupIdx} className="space-y-4 lg:col-span-2">
            {columnGroup.map((column, columnIdx) => (
              <div
                key={columnIdx}
                className="flex items-center gap-8 rounded-3xl p-8 ring-1 ring-gray-900/10"
              >
                <h3 className="flex-1 text-xl">{column.title}</h3>
                <DynamicIcon name={column.icon as IconName} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
