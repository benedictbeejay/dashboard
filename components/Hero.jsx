"use client";
import React from "react";
import "../app/globals.css";
import Nav from "./Nav";
import { motion } from "framer-motion"; // Removed unnecessary imports like 'animate' and 'delay'.

// Animation variants for different elements
const hero = {
  initial: {
    y: -200,
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.5, // Adds a slight delay to the animation for a smooth effect.
    },
  },
};

const unlock = {
  initial: {
    y: 200,
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.8, // A slightly longer delay for sequential animations.
    },
  },
};

const card = {
  initial: {
    y: -200,
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.5,
      delay: 1, // Animates later for a cascading effect.
    },
  },
};

const Hero = () => {
  return (
    <div className="w-full h-screen bg-hero bg-cover bg-no-repeat relative">
      <div>
        {/* Navigation bar component */}
        <Nav />

        {/* Main content section */}
        <div className="absolute flex h-4/6 top-48 w-10/12 left-1/2 -translate-x-1/2">
          {/* Left Section */}
          <article className="left w-1/2 h-full space-y-12">
            <div className="w-full space-y-4 overflow-hidden">
              {/* Animated Heading */}
              <motion.h1
                variants={hero}
                initial="initial"
                animate="animate"
                className="text-7xl font-title text-white"
              >
                Boost Your Marketing ROI
              </motion.h1>

              {/* Animated Paragraph */}
              <motion.p
                variants={unlock}
                initial="initial"
                animate="animate"
                className="text-white font-title"
              >
                Unlock the full potential of your finances with FinFlow, the
                cutting-edge SaaS solution designed to streamline.
              </motion.p>

              {/* Button with hover effect */}
              <button className="h-14 w-44 px-4 py-2.5 rounded-xl border-2 border-white bg-gradient-to-r from-white to-offWhite hover:scale-105 transition-transform">
                <p className="font-title text-sm">
                  {/* Animated text characters */}
                  {Array.from("Get 14 Days Free Trial").map((l, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 100 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className={l === " " ? "inline-block w-[0.25em]" : ""}
                    >
                      {l}
                    </motion.span>
                  ))}
                </p>
              </button>
            </div>

            {/* Recognition Section */}
            <div className="w-full flex">
              <div className="w-1/2 m-auto">
                <p className="font-title m-auto text-sm text-white">
                  No big deal, just some recognition for my work
                </p>
              </div>
              <div className="w-1/2 m-auto">
                {/* Added alt text for accessibility */}
                <img
                  className="m-auto"
                  src="/assets/Award.png"
                  alt="Award Badge"
                />
              </div>
            </div>
          </article>

          {/* Right Section */}
          <article className="right w-1/2 h-full relative">
            <div className="w-full h-80 absolute bottom-0">
              <div className="h-3/5 w-80 my-24 ml-12 rounded-lg border-2 border-white bg-gradient-to-r from-white to-offWhite overflow-hidden">
                <div className="w-full px-4 py-3 h-1/2">
                  {/* Animated testimonial */}
                  <motion.p
                    variants={card}
                    initial="initial"
                    animate="animate"
                    className="font-title font-medium"
                  >
                    "From effortless expense tracking to real-time reporting and
                    seamless integrations"
                  </motion.p>
                </div>
                <div className="w-full h-1/2 py-5">
                  <div className="w-3/5 h-full ml-4 flex">
                    {/* Added alt text for user image */}
                    <img src="/assets/Ellipse 61.png" alt="Jessica Lubahn" />
                    <div className="w-4/5 block pl-2 py-1">
                      {/* Animated name */}
                      <p className="font-title font-medium">
                        {Array.from("Jessica Lubahn").map((l, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className={
                              l === " " ? "inline-block w-[0.25em]" : ""
                            }
                          >
                            {l}
                          </motion.span>
                        ))}
                      </p>

                      {/* Animated designation */}
                      <p className="font-title font-normal text-black/60">
                        {Array.from("Product Manager").map((l, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className={
                              l === " " ? "inline-block w-[0.25em]" : ""
                            }
                          >
                            {l}
                          </motion.span>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Hero;
