import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const whitebg = {
  initial: {
    y: 500,
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.8,
      delay: 1,
    },
  },
};

const offWhitebg = {
  initial: {
    y: 500,
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.8,
      delay: 3,
    },
  },
};

const greybg = {
  initial: {
    y: -500,
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.8,
      delay: 2,
    },
  },
};

const Advantage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("animate");
    }
  }, [isInView, mainControls]);

  return (
    <div className="w-screen h-screen relative">
      <div className="absolute flex w-10/12 h-screen top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2">
        <div className="w-full mt-10">
          <p className="font-title flex justify-center text-center font-medium text-Header text-5xl">
            {Array.from("Experience the FinFlow Advantage").map(
              (letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true, amount: "all" }}
                  className={letter === " " ? "inline-block w-[0.25em]" : ""}
                >
                  {letter}
                </motion.span>
              )
            )}
          </p>
        </div>
        <div
          ref={ref}
          className="h-4/5 w-full bottom-4 absolute grid grid-cols-3 gap-6 overflow-hidden"
        >
          <div className="relative">
            <motion.div
              variants={whitebg}
              initial="initial"
              animate={mainControls}
              className="h-2/5 absolute bottom-0 w-full rounded-lg bg-bgGrayBorder p-4"
            >
              <div className="w-full h-full grid grid-rows-3 elements">
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
                    Handle cash transactions 70% more efficiently using its
                    advanced tools.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="rounded-lg bg-women bg-cover bg-no-repeat relative">
            <div className="h-2/5 w-full absolute bottom-0 p-6 overflow-hidden">
              <motion.div
                variants={offWhitebg}
                initial="initial"
                animate={mainControls}
                className="w-full h-full bg-white rounded-lg grid grid-rows-3 gap-2 px-4 py-2 elements"
              >
                <div className="relative ">
                  <img
                    src="/assets/nietzblack.png"
                    className="absolute top-1/2 -translate-y-1/2"
                  />
                </div>
                <div className="relative ">
                  <p className="absolute top-1/2 -translate-y-1/2 font-title text-nietz text-sm">
                    From effortless expense tracking to real-time reporting and
                    seamless integrations,
                  </p>
                </div>
                <div className="relative">
                  <p className="absolute top-1/2 -translate-y-1/2 font-title text-nietz text-sm">
                    Jessica Lubahn,{" "}
                    <span className="text-Location"> Product Manager</span>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="grid gap-4 grid-rows-5 overflow-hidden">
            <motion.div
              variants={greybg}
              initial="initial"
              animate={mainControls}
              className="row-span-2 rounded-lg bg-bgGrayBorder p-4"
            >
              <div className="w-full h-full grid grid-rows-3 elements">
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
                    Handle cash transactions 70% more efficiently using its
                    advanced tools.
                  </p>
                </div>
              </div>
            </motion.div>
            <div className="row-span-3">
              <img src="/assets/hijabwomen.png" className="pt-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantage;
