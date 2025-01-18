import React from "react";
import { animate, delay, motion } from "framer-motion";
// import { transform } from "@node_modules/next/dist/build/swc/generated-native";

const whitebg = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.3,
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
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

const Machine = () => {
  return (
    <div className="h-screen relative">
      <div className="absolute flex w-10/12 h-4/5 top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2">
        <div className="left w-1/2 h-full relative overflow-hidden ">
          <img src="/assets/machine.png" className=" flex  h-full m-auto" />

          <motion.div
            variants={whitebg}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="absolute  duration-100 justify-between p-4 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 h-96 w-96 bg-white rounded-xl "
          >
            <motion.div
              className="w-full mb-3 mt-4 flex gap-2 h-1/6 rounded-xl py-3 px-4 bg-offWhite border-2
              border-border/10"
            >
              <img src="/assets/stars.png" />
              <input
                type="text"
                className="bg-transparent"
                placeholder="Search target audience"
              />
            </motion.div>
            <div className="w-full h-4/5 gap-2 block space-y-2 ">
              <div
                className="w-full flex  gap-2 h-1/5 rounded-xl py-2 px-4 bg-offWhite border-2
              border-border/10"
              >
                <div className="w-3/5 block">
                  <div className="h-1/2 flex">
                    <p className="font-title  font-medium text-Header text-sm">
                      26 - 40 Software Engineer
                    </p>
                  </div>

                  <div className="h-1/2 flex">
                    <img src="/assets/location.png" />
                    <p className="font-title ml-2 font-medium text-Location text-sm">
                      London, UK
                    </p>
                  </div>
                </div>
                <div className="w-2/5 relative">
                  <div className="w-fit h-1/2 flex gap-1 absolute top-1/2 -translate-y-1/2 right-0">
                    <img src="/assets/circle.png" className="h-2 w-2 m-auto" />
                    <p className="font-title text-Location">17 Online</p>
                  </div>
                </div>
              </div>
              <div
                className="w-full flex  gap-2 h-1/5 rounded-xl py-2 px-4 bg-offWhite border-2
              border-border/10"
              >
                <div className="w-3/5 block">
                  <div className="h-1/2 flex">
                    <div className="h-2/3 w-4/5 bg-Location/10 rounded-md"></div>
                  </div>
                  <div className="h-1/2 flex">
                    <div className="h-2/3 w-2/5 bg-Location/5 rounded-md"></div>
                  </div>
                </div>
                <div className="w-2/5 relative">
                  <div className="w-5/6 h-1/2  flex gap-1 absolute top-1/2 -translate-y-1/2 right-0">
                    <div className="h-2/3 w-full m-auto rounded-md bg-Location/5"></div>
                  </div>
                </div>
              </div>
              <div
                className="w-full flex  gap-2 h-1/5 rounded-xl py-2 px-4 bg-offWhite border-2
              border-border/10"
              >
                <div className="w-3/5 block">
                  <div className="h-1/2 flex">
                    <div className="h-2/3 w-4/5 bg-Location/10 rounded-md"></div>
                  </div>
                  <div className="h-1/2 flex">
                    <div className="h-2/3 w-2/5 bg-Location/5 rounded-md"></div>
                  </div>
                </div>
                <div className="w-2/5 relative">
                  <div className="w-5/6 h-1/2  flex gap-1 absolute top-1/2 -translate-y-1/2 right-0">
                    <div className="h-2/3 w-full m-auto rounded-md bg-Location/5"></div>
                  </div>
                </div>
              </div>
              <div
                className="w-full flex  gap-2 h-1/5 rounded-xl py-2 px-4 bg-offWhite border-2
              border-border/10"
              >
                <div className="w-3/5 block">
                  <div className="h-1/2 flex">
                    <div className="h-2/3 w-4/5 bg-Location/10 rounded-md"></div>
                  </div>
                  <div className="h-1/2 flex">
                    <div className="h-2/3 w-2/5 bg-Location/5 rounded-md"></div>
                  </div>
                </div>
                <div className="w-2/5 relative">
                  <div className="w-5/6 h-1/2  flex gap-1 absolute top-1/2 -translate-y-1/2 right-0">
                    <div className="h-2/3 w-full m-auto rounded-md bg-Location/5"></div>
                  </div>
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
                  {Array.from(" Machine learning and AI").map((l, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
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
                  viewport={{ once: true }}
                  className="font-title text-xl absolute top-1/2 -translate-y-1/2 text-Header/70"
                >
                  In today's fast-paced business environment, organizations are
                  increasingly relying on customizations and automation to
                  enhance their operational efficiency and effectiveness.
                </motion.p>
              </div>
            </div>
            {/* <div className="absolute w-full h-1/3 bottom-0 ">
              <div className="w-full h-full relative">
                <div className="h-14 top-0 p-4 space-x-2 flex bg-bgGrayBorder rounded-lg">
                  <img src="/assets/bg.png" className="w-4 h-4 my-auto" />
                  <p className="font-title text-Header text-sm m-auto">
                    Ensure you have the latest security patches installed
                  </p>
                </div>
                <div className="h-14 absolute w-full top-1/2 -translate-y-1/2 p-4 space-x-2 flex bg-bgGrayBorder rounded-lg">
                  <img src="/assets/bg.png" className="w-4 h-4 my-auto" />
                  <p className="font-title text-Header text-sm m-auto">
                    Updates often introduce new features, bug fixes
                  </p>
                </div>
                <div className="h-14 absolute bottom-0 p-4 w-full space-x-2 flex bg-bgGrayBorder rounded-lg">
                  <img src="/assets/bg.png" className="w-4 h-4 my-auto" />
                  <p className="font-title text-Header text-sm m-auto">
                    No need to manually check for and install updates
                  </p>
                </div>
              </div>
            </div> */}

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

export default Machine;
