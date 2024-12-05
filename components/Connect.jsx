import React from "react";

const Connect = () => {
  return (
    <div className="h-screen relative">
      <div className="absolute flex w-full h-4/5 top-1/2 -translate-y-1/2">
        <div className="left w-1/2 h-full relative">
          <img src="/assets/machine.png" className=" flex  h-full m-auto" />

          <div className="absolute duration-100 justify-between p-4 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 h-96 w-96 bg-white rounded-xl ">
            <div className="w-full h-full relative">
              <div className="h-1/5 w-full relative">
                <p className="font-title text-Header font-medium text-xl absolute left-1/2 -translate-x-1/2 top-1/4 -translate-y-1/4">
                  Integrations List
                </p>
              </div>

              <div className="h-3/5 w-full absolute top-1/2 -translate-y-1/2 ">
                <div className="h-1/3 py-1">
                  <div className="w-full h-full flex py-2 pl-4 pr-6 bg-bgGray rounded-lg">
                    <div className="w-1/6 ">
                      <img
                        src="/assets/linkedin.png"
                        className="h-full m-auto"
                      />
                    </div>
                    <div className="w-4/6 block pl-2">
                      <p className="font-title text-Header font-medium text-lg h-1/2">
                        LinkedIn Company
                      </p>
                      <p className="h-1/2 text-Location text-sm">
                        Ability to connect with other
                      </p>
                    </div>
                    <div className="w-1/6 relative">
                      <img
                        className=" absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
                        src="/assets/elements.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="h-1/3 py-1">
                  <div className="w-full h-full flex py-2 pl-4 pr-6 bg-bgGray rounded-lg">
                    <div className="w-1/6 ">
                      <img src="/assets/reddit.png" className="h-full m-auto" />
                    </div>
                    <div className="w-4/6 block pl-2">
                      <div className="w-full h-1/2 relative">
                        <div className="absolute h-1/2 w-5/6 rounded-lg top-1/2 -translate-y-1/2 bg-Location/10"></div>
                      </div>
                      <div className="w-full h-1/2 relative">
                        <div className="absolute h-1/2 w-4/6 rounded-lg top-1/2 -translate-y-1/2 bg-Location/5"></div>
                      </div>
                    </div>
                    <div className="w-1/6 relative">
                      <img
                        className=" absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
                        src="/assets/elements.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="h-1/3 py-1">
                  <div className="w-full h-full flex py-2 pl-4 pr-6 bg-bgGray rounded-lg">
                    <div className="w-1/6 ">
                      <img src="/assets/pin.png" className="h-full m-auto" />
                    </div>
                    <div className="w-4/6 block pl-2">
                      <div className="w-full h-1/2 relative">
                        <div className="absolute h-1/2 w-5/6 rounded-lg top-1/2 -translate-y-1/2 bg-Location/10"></div>
                      </div>
                      <div className="w-full h-1/2 relative">
                        <div className="absolute h-1/2 w-4/6 rounded-lg top-1/2 -translate-y-1/2 bg-Location/5"></div>
                      </div>
                    </div>
                    <div className="w-1/6 relative">
                      <img
                        className=" absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
                        src="/assets/elements.png"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute h-1/5 w-full bottom-0">
                <div className="h-full w-full relative">
                  <button className="absolute bottom-1 rounded-lg w-full h-4/6 text-white font-title bg-Header">
                    Connect to FinFlow
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative right w-1/2 h-full ">
          <div className="absolute space-y-0 block w-4/5 right-0 h-full">
            <div className="w-full h-1/3">
              <div className="w-full h-1/3 relative">
                <p className="font-title text-left absolute top-1/2 -translate-y-1/2 font-medium  text-Header text-4xl">
                  Connect with apps
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
                    Recurring subscription fees create a steady
                  </p>
                </div>
                <div className="h-14 absolute w-full top-1/2 -translate-y-1/2 p-4 space-x-2 flex bg-bgGrayBorder rounded-lg">
                  <img src="/assets/bg.png" className="w-4 h-4 my-auto" />
                  <p className="font-title text-Header text-sm m-auto">
                    Subscription models incentivize customer retention.
                  </p>
                </div>
                <div className="h-14 absolute bottom-0 p-4 w-full space-x-2 flex bg-bgGrayBorder rounded-lg">
                  <img src="/assets/bg.png" className="w-4 h-4 my-auto" />
                  <p className="font-title text-Header text-sm m-auto">
                    Subscription models can reduce the need for marketing
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

export default Connect;
