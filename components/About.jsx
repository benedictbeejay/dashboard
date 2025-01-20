import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const whitebg = {
  initial: {
    // opacity: 0,
    y: -200,
  },
  animate: {
    // opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 1.2,
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
const About = () => {
  const images = [
    "/assets/nietz.png",
    "/assets/focal.png",
    "/assets/command.png",
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("animate");
    }
  }, [isInView]);

  return (
    <div className="w-full h-screen relative bg-Header">
      <div
        ref={ref}
        className="w-10/12 h-5/6 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 block"
      >
        <div className="w-3/5 block h-fit absolute left-1/2 -translate-x-1/2">
          <p className="font-title text-4xl text-white text-center">
            {Array.from("What Client Says About").map((letter, index) => (
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
            <br />
            <span className="text-white/50">
              {" "}
              {Array.from("FinFlow Services ").map((letter, index) => (
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
        <div className="w-full absolute bottom-0 pt-6">
          <div className="w-full h-full grid grid-cols-2 gap-8">
            <div>
              <img src="/assets/man.png" className="h-full" />
            </div>
            <div className="relative">
              <div className="w-full h-4/6 absolute top-1/2 -translate-y-1/2 grid grid-row-6">
                <div className="row-span-4 block overflow-hidden">
                  <div className="h-4/6">
                    <motion.p
                      variants={whitebg}
                      initial="initial"
                      animate={mainControls}
                      viewport={{ once: true, amount: "all" }}
                      className="font-title font-medium text-white text-3xl"
                    >
                      “This app is so easy to use! I can send money to family
                      back home quickly and securely.”
                    </motion.p>
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
                <div className="row-span-2 relative">
                  <div className="flex space-x-2">
                    {images.map((src, index) => (
                      <motion.img
                        variants={stagger}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, amount: "all" }}
                        key={index}
                        custom={index}
                        className="w-fit"
                        src={src}
                        alt={`logo-${index}`}
                      />
                    ))}
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
