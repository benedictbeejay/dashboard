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
const Control = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("animate");
    }
  }, [isInView, mainControls]);

  return (
    <div className="bg-BG h-screen w-screen relative">
      <div className="w-2/5 h-3/5 absolute -translate-x-1/2 left-1/2 bottom-0">
        <div className="w-full">
          <p className="font-title text-white font-medium text-5xl text-center">
            {Array.from("Take Control of Your").map((letter, index) => (
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
            ))}{" "}
            <br />{" "}
            <span className="text-white/50 font-title">
              {Array.from("Finances with FinFlow").map((letter, index) => (
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
              ))}
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

        <div ref={ref} className="px-2 w-full py-6 ">
          <div className="h-14 rounded-lg border-2 grid grid-cols-5 gap-2 bg-white/10">
            <div className="col-span-3 h-full relative">
              <input
                type="search"
                className=" pl-2 bg-transparent border-transparent w-4/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-bgGrayBorder font-title"
                placeholder="Enter your email address"
              />
            </div>
            <div className="col-span-2 h-full py-1 px-3 overflow-hidden">
              <motion.button
                variants={whitebg}
                initial="initial"
                animate={mainControls}
                className="w-full h-full flex bg-gradient-to-tl from-Blue to-Blu rounded-lg border-2 border-Blue"
              >
                <p className="text-white  font-title m-auto ">Join Waitlist </p>
                <img src="/assets/direction.png" className="h-4 m-auto" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Control;
