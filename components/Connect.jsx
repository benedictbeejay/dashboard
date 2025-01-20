import React from "react";
import { animate, delay, motion } from "framer-motion";

const whitebg = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 1,
    },
  },
};

const stagger = {
  initial: {
    opacity: 0,
    // y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    // y: 0,
    transition: {
      delay: 0.5 * index,
    },
  }),
};

const paragraph = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: -50,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 1,
    },
  },
};

const Connect = () => {
  return (
    <div className="h-screen relative">
      <div className="absolute flex w-10/12 h-4/5 top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2">
        <div className="left w-1/2 h-full relative">
          <img src="/assets/machine.png" className=" flex  h-full m-auto" />

          <motion.div
            variants={whitebg}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: "all" }}
            className="absolute duration-100 justify-between p-4 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 h-96 w-96 bg-white rounded-xl "
          >
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
                  <button className="absolute bottom-1 rounded-lg w-full h-4/6 text-white font-title bg-Header hover:bg-Blu duration-300 ">
                    {Array.from("Connect to FinFlow").map((l, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: "all" }}
                        transition={{ delay: i * 0.1 }}
                        className={l === " " ? "inline-block w-[0.25em]" : ""}
                      >
                        {l}
                      </motion.span>
                    ))}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="relative right w-1/2 h-full ">
          <div className="absolute space-y-0 block w-4/5 right-0 h-full">
            <div className="w-full h-1/3">
              <div className="w-full h-1/3 relative">
                <p className="font-title text-left absolute top-1/2 -translate-y-1/2 font-medium  text-Header text-4xl">
                  {Array.from("Connect with apps").map((l, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: "all" }}
                      transition={{ delay: i * 0.05 }}
                      className={l === " " ? "inline-block w-[0.25em]" : ""}
                    >
                      {l}
                    </motion.span>
                  ))}
                </p>
              </div>
              <div className="w-full h-2/3 relative">
                <motion.p
                  variants={paragraph}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: "all" }}
                  className="font-title text-xl absolute top-1/2 -translate-y-1/2 text-Header/70"
                >
                  In today's fast-paced business environment, organizations are
                  increasingly relying on customizations and automation to
                  enhance their operational efficiency and effectiveness.
                </motion.p>
              </div>
            </div>

            <div className="absolute w-full h-1/3 bottom-0">
              <div className="w-full h-full relative">
                {[
                  {
                    text: "Ensure you have the latest security patches installed",
                    position: "top-0",
                  },
                  {
                    text: "Updates often introduce new features, bug fixes",
                    position: "top-1/2 -translate-y-1/2",
                  },
                  {
                    text: "No need to manually check for and install updates",
                    position: "bottom-0",
                  },
                ].map((item, index) => (
                  <motion.div
                    variants={stagger}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    key={index}
                    custom={index}
                    className={`h-14 absolute w-full ${item.position} p-4 space-x-2 flex bg-bgGrayBorder rounded-lg`}
                  >
                    <img src="/assets/bg.png" className="w-4 h-4 my-auto" />
                    <p className="font-title text-Header text-sm m-auto">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
