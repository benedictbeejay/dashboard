"use client";

import Analytics from "./Analytics";
import Connect from "./Connect";
import Machine from "./Machine";

const Features = () => {
  return (
    <div className="w-full h-fit| relative">
      <div className="w-10/12 h-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-4/6  absolute top-0 left-1/2 -translate-x-1/2 ">
          <p className="font-title flex justify-center text-center font-medium text-Header text-5xl ">
            Explore Our Feature Set on FinFlow
          </p>
        </div>
        <div className="h-fit absolute w-full mt-20">
          <Machine />
          <Connect />
          <Analytics />
        </div>
      </div>
    </div>
  );
};

export default Features;
