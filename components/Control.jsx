import React from "react";

const Control = () => {
  return (
    <div className="bg-BG h-screen w-screen relative">
      <div className="w-2/5 h-3/5 absolute -translate-x-1/2 left-1/2 bottom-0">
        <div className="w-full">
          <p className="font-title text-white font-medium text-5xl text-center">
            Take Control of Your <br />{" "}
            <span className="text-white/50 font-title">
              Finances with FinFlow
            </span>
          </p>
        </div>

        <div className="w-full py-4">
          <p className="font-title text-center text-bgGrayBorder/70">
            Unlock the full potential of your finances with FinFlow, the
            cutting-edge SaaS solution designed to streamline your financial
            operations.
          </p>
        </div>

        <div className="px-2 w-full py-6 ">
          <div className="h-14 rounded-lg border-2 grid grid-cols-5 gap-2 bg-white/10">
            <div className="col-span-3 h-full relative">
              <input
                type="search"
                className="bg-transparent border-transparent w-4/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-bgGrayBorder font-title"
                placeholder="Enter your email address"
              />
            </div>
            <div className="col-span-2 h-full py-1 px-3">
              <button className="w-full h-full flex bg-gradient-to-tl from-Blue to-Blu rounded-lg border-2 border-Blue">
                <p className="text-white  font-title m-auto ">Join Waitlist </p>
                <img src="/assets/direction.png" className="h-4 m-auto" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Control;
