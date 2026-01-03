"use client";

import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";

const LocationMap = () => {
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <Map
        mapId={"d543b72536ff9d9f6c1ba73e"}
        style={{ width: "100%", height: "100%" }}
        defaultCenter={{ lat: 37.98164493348696, lng: 23.713502126118836 }}
        defaultZoom={16}
        gestureHandling={"greedy"}
        disableDefaultUI
        scrollwheel={false}
        colorScheme="DARK"
      >
        <AdvancedMarker
          position={{ lat: 37.98164493348696, lng: 23.713502126118836 }}
          title={"agoroo"}
        >
          <div className="absolute top-0 left-0 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-rose-700/20">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-400 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                width={24}
                height={24}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </div>
          </div>
        </AdvancedMarker>
      </Map>
    </APIProvider>
  );
};

export default LocationMap;
