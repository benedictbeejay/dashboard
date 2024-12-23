import React from "react";

const Advantage = () => {
  return (
    <div className="w-screen h-screen relative">
      <div className="absolute flex w-10/12 h-screen top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2">
        <div className="w-full mt-10">
          <p className="font-title flex justify-center text-center font-medium text-Header text-5xl ">
            Experience the FinFlow Advantage
          </p>
        </div>
        <div className="h-4/5 w-full bottom-4 absolute grid grid-cols-3 gap-6">
          <div className="relative">
            <div className="h-2/5 absolute bottom-0 w-full rounded-lg bg-bgGrayBorder p-4 ">
              <div className="w-full h-full grid grid-rows-3">
                <div className="relative">
                  <p className="text-Blue font-title text-4xl font-medium absolute top-1/2 -translate-y-1/2">
                    2M
                  </p>
                </div>
                <div className="relative">
                  <p className="font-title text-Header absolute top-1/2 -translate-y-1/2">
                    World-wide Users
                  </p>
                </div>
                <div className="relative">
                  <p className="font-title text-Header/70 absolute top-1/2 -translate-y-1/2">
                    Handle cash transactions 70% more efficiently using it’s
                    advanced tools.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-women bg-cover bg-no-repeat relative">
            {/* <img
              src="/assets/women.jpg"
              className="w-full h-full overflow-y-hidden"
            /> */}

            <div className="h-2/5 w-full absolute bottom-0 p-6">
              <div className="w-full h-full bg-white rounded-lg grid grid-rows-3 gap-2 px-4 py-2">
                <div className="relative">
                  <img
                    src="/assets/nietzblack.png"
                    className="absolute top-1/2 -translate-y-1/2"
                  />
                </div>
                <div className="relative">
                  <p className="absolute top-1/2 -translate-y-1/2 font-title text-nietz text-sm">
                    From effortless expense tracking to real-time reporting and
                    seamless integrations,
                  </p>
                </div>
                <div className="relative ">
                  <p className="absolute top-1/2 -translate-y-1/2 font-title text-nietz text-sm">
                    Jessica Lubahn,{" "}
                    <span className="text-Location"> Product Manager</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-4 grid-rows-5">
            <div className="row-span-2 rounded-lg bg-bgGrayBorder p-4 ">
              <div className="w-full h-full grid grid-rows-3">
                <div className="relative">
                  <p className="text-Blue font-title text-4xl font-medium absolute top-1/2 -translate-y-1/2">
                    90%
                  </p>
                </div>
                <div className="relative">
                  <p className="font-title text-Header absolute top-1/2 -translate-y-1/2">
                    Reduce Errors
                  </p>
                </div>
                <div className="relative">
                  <p className="font-title text-Header/70 absolute top-1/2 -translate-y-1/2">
                    Handle cash transactions 70% more efficiently using it's
                    advanced tools.
                  </p>
                </div>
              </div>
            </div>
            <div className="row-span-3 ">
              <img src="/assets/hijabwomen.png" className="pt-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantage;
