import React from "react";

const About = () => {
  return (
    <div className="w-full h-screen relative bg-Header">
      <div className="w-10/12 h-5/6 absolute  top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 block">
        <div className="w-3/5 block h-fit absolute left-1/2 -translate-x-1/2">
          <p className="font-title text-4xl text-white text-center">
            What Client Says About <br />
            <span className="text-white/50">FinFlow Services</span>
          </p>
        </div>
        <div className=" w-full absolute bottom-0 pt-6">
          <div className="w-full h-full grid grid-cols-2 gap-8">
            <div>
              <img src="/assets/man.png" className="h-full" />
            </div>

            <div className="relative">
              <div className="w-full h-4/6 absolute top-1/2 -translate-y-1/2 grid grid-row-6">
                <div className="row-span-4 block">
                  <div className="h-4/6">
                    <p className="font-title font-medium text-white text-3xl">
                      “This app is so easy to use! I can send money to family
                      back home quickly and securely.”
                    </p>
                  </div>
                  <div className="h-2/6 w-full">
                    <p className="font-title text-white font-medium">
                      Jessica Lubahn,
                      <span className="text-white/50 font-title">
                        {" "}
                        Product Manager
                      </span>
                    </p>
                  </div>
                </div>
                <div className="row-span-2 relative ">
                  {/* <div className="h-2/5 inline">
                    <img className="w-fit" src="/assets/nietz.png" />
                    <img className="w-fit" src="/assets/focal.png" />
                    <img className="w-fit" src="/assets/command.png" />
                  </div> */}
                  <div className="flex space-x-2">
                    <img className="w-fit" src="/assets/nietz.png" />
                    <img className="w-fit" src="/assets/focal.png" />
                    <img className="w-fit" src="/assets/command.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
