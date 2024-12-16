import React, { useState } from "react";

const Analytics = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
    // console.log(`Button ${buttonId} clicked`);
  };

  const [dateButton, setDateButton] = useState(null);

  const dateButtonClick = (dateId) => {
    setDateButton(dateId);
  };

  return (
    <div className="h-screen relative">
      <div className="absolute flex w-full h-4/5 top-1/2 -translate-y-1/2">
        {/* Left Section */}
        <div className="left w-1/2 h-full relative">
          <img
            src="/assets/machine.png"
            alt="Machine Illustration"
            className="flex h-full m-auto"
          />

          <div className="absolute duration-100 p-4 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 h-2/5 w-3/5 bg-white rounded-xl">
            <div className="w-full h-1/5 flex relative">
              <div className="w-4/12">
                <div className="h-1/2 w-full flex">
                  <p className="font-title text-Balance text-xs my-auto">
                    Current Balance
                  </p>
                </div>
                <div className="h-1/2 w-full flex">
                  <p className="text-Header font-semibold">$ 250,560.0</p>
                </div>
              </div>
              <div className="w-7/12 flex justify-between p-1 absolute right-0 h-full">
                {/* Buttons */}
                {["24h", "7d", "30d", "6m"].map((label, index) => {
                  const buttonId = String.fromCharCode(65 + index); // Generate A, B, C, D
                  return (
                    <button
                      key={buttonId}
                      onClick={() => handleButtonClick(buttonId)}
                      className={`w-1/4 h-full rounded-xl px-1 text-sm flex justify-evenly items-center transition-all duration-400 ${
                        activeButton === buttonId
                          ? "bg-Blue text-white"
                          : "bg-white text-Balance"
                      }`}
                    >
                      {label}
                      {activeButton === buttonId && (
                        <span className="bg-white rounded-full h-1.5 w-1.5 transition-all duration-400 ease-in-out "></span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="w-full h-3/5 ">
              <div className=" w-full h-1/2 flex">
                <div className="w-1/6 h-full relative pr-1">
                  <div className="w-11/12 h-3/4 absolute bottom-0 rounded-md bg-Chart "></div>
                </div>
                <div className="w-1/6 "></div>
                <div className="w-1/6 "></div>
                <div className="w-1/6 h-full relative">
                  <div className="w-11/12 h-full absolute bottom-0 rounded-md bg-Blue"></div>
                </div>
                <div className="w-1/6 h-full relative">
                  <div className="w-11/12 h-1/4 absolute bottom-0 rounded-md bg-Chart"></div>
                </div>
                <div className="w-1/6 h-full relative">
                  <div className="w-11/12 h-1/2 absolute bottom-0 rounded-md bg-Chart"></div>
                </div>
              </div>

              <div className="w-full h-1/2 flex">
                <div className="w-1/6 h-full"></div>
                <div className="w-1/6 h-full">
                  <div className="w-11/12 h-3/4 rounded-md bg-down"></div>
                </div>
                <div className="w-1/6 h-full">
                  <div className="w-11/12 h-2/4 rounded-md bg-down"></div>
                </div>
                <div className="w-1/6 h-full"></div>
                <div className="w-1/6 h-full"></div>
                <div className="w-1/6 h-full"></div>
              </div>
            </div>
            <div className="w-full h-1/5 relative">
              <div className="h-2/3 w-full m-auto flex absolute top-1/2 -translate-y-1/2">
                {["JAN", "FEB", "MAR", "APR", "MAY", "JUN"].map(
                  (label, index) => {
                    const dateId = label; // Use the label as the unique identifier
                    return (
                      <button
                        key={dateId}
                        onClick={() => dateButtonClick(dateId)}
                        className={`w-1/6 h-full rounded-xl px-1 text-sm flex justify-center items-center transition-all duration-400 ${
                          dateButton === dateId
                            ? "bg-Chart text-Blue"
                            : "bg-white text-month"
                        }`}
                      >
                        {label}
                      </button>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative right w-1/2 h-full ">
          <div className="absolute space-y-0 block w-4/5 right-0 h-full">
            <div className="w-full h-1/3">
              <div className="w-full h-1/3 relative">
                <p className="font-title text-left absolute top-1/2 -translate-y-1/2 font-medium  text-Header text-4xl">
                  Analytics and reporting
                </p>
              </div>
              <div className="w-full h-2/3 relative">
                <p className="font-title text-xl absolute top-1/2 -translate-y-1/2 text-Header/70">
                  In today's fast-paced business environment, organizations are
                  increasingly relying on customizations and automation to
                  enhance their operational efficiency and effectiveness.
                </p>
              </div>
            </div>
            <div className="absolute w-full h-1/3 bottom-0 ">
              <div className="w-full h-full relative">
                <div className="h-14 top-0 p-4 space-x-2 flex bg-bgGrayBorder rounded-lg">
                  <img src="/assets/bg.png" className="w-4 h-4 my-auto" />
                  <p className="font-title text-Header text-sm my-auto">
                    Gain data-driven insights to inform strategic choices
                  </p>
                </div>
                <div className="h-14 absolute w-full top-1/2 -translate-y-1/2 p-4 space-x-2 flex bg-bgGrayBorder rounded-lg">
                  <img src="/assets/bg.png" className="w-4 h-4 my-auto" />
                  <p className="font-title text-Header text-sm m-auto">
                    Track key metrics and KPIs to measure success
                  </p>
                </div>
                <div className="h-14 absolute bottom-0 p-4 w-full space-x-2 flex bg-bgGrayBorder rounded-lg">
                  <img src="/assets/bg.png" className="w-4 h-4 my-auto" />
                  <p className="font-title text-Header text-sm m-auto">
                    {/* Track key metrics and KPIs to measure success
                     */}
                    Identify trends and patterns to predict future outcomes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
