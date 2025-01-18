// "use client";
// import Image from "next/image";
// import React from "react";
// import FinFlow from "@/public/assets/FinFlow.svg";
// import { animate, motion } from "motion/react";

// const hoverBorder = {
//   initial: {
//     scaleX: 0.1,
//   },
//   animate: {
//     scaleX: 1,
//     transition: {
//       duration: 0.4,
//     },
//   },
// };
// const Nav = () => {
//   return (
//     <div
//       id="products"
//       className="flex w-10/12 h-14 justify-between absolute top-10 left-1/2 -translate-x-1/2"
//     >
//       <div className="flex gap-2 h-full">
//         <img className="h-10 w-11 mt-1.5" src="/assets/Layer_2 (1).svg" />
//         <img className="w-28 h-10 mt-1.5" src="/assets/FinFlow.svg" />
//       </div>

//       <div className="bg-NavBg/10 jus rounded-2xl border border-NavBg flex space-x-8 w-96 h-14 py-3 px-6">
//         <p className="text-white font-title h-7 relative cursor-pointer">
//           Product
//           <motion.span
//             variants={hoverBorder}
//             initial="initial"
//             whileHover="animate"
//             className="w-full h-full absolute left-0 top-0  z-10 border-b-2 border-white"
//           ></motion.span>
//         </p>
//         <p className="text-white font-title h-7 relative cursor-pointer">
//           Insights
//           <motion.span
//             variants={hoverBorder}
//             initial="initial"
//             whileHover="animate"
//             className="w-full h-full absolute left-0 top-0  z-10 border-b-2 border-white"
//           ></motion.span>
//         </p>

//         <p className="text-white font-title h-7 relative cursor-pointer">
//           Company
//           <motion.span
//             variants={hoverBorder}
//             initial="initial"
//             whileHover="animate"
//             className="w-full h-full absolute left-0 top-0  z-10 border-b-2 border-white"
//           ></motion.span>
//         </p>
//         <p className="text-white font-title h-7 relative cursor-pointer">
//           Pricing
//           <motion.span
//             variants={hoverBorder}
//             initial="initial"
//             whileHover="animate"
//             className="w-full h-full absolute left-0 top-0  z-10 border-b-2 border-white"
//           ></motion.span>
//         </p>

//       </div>

//       <button className="h-14 w-44 px-4 py-2.5 rounded-xl border-2 border-white bg-gradient-to-r from-white to-offWhite">
//         <p className="font-title text-sm">Get Started For Free</p>
//       </button>
//     </div>
//   );
// };

// export default Nav;

"use client"; // Enables the component to run on the client side
import Image from "next/image"; // Optimized image component from Next.js
import React from "react";
import { delay, motion } from "framer-motion"; // Framer Motion for animations

// Variants for the hover animation on the underline effect
const hoverBorder = {
  initial: {
    scaleX: 0.1, // Starts with a small scale on the X-axis
  },
  animate: {
    scaleX: 1, // Expands to full width
    transition: {
      duration: 0.4, // Duration of the animation
    },
  },
};

const draw = {
  initial: {
    y: -50,
    // opacity: 0,
  },
  visible: {
    y: 0,
    // opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.1,
      // type: spring,
      damping: 200,
    },
  },
};

const Nav = () => {
  return (
    <div
      id="products"
      className="flex w-10/12 h-14 justify-between absolute top-10 left-1/2 -translate-x-1/2"
    >
      {/* Logo Section */}
      <div className="flex gap-2 overflow-hidden h-full">
        {/* Small logo */}
        <motion.img
          variants={draw}
          initial="initial"
          animate="visible"
          className="h-10 w-11 mt-1.5"
          src="/assets/Layer_2 (1).svg"
          alt="Logo"
        />
        {/* Brand name/logo */}
        <motion.img
          variants={draw}
          initial="initial"
          animate="visible"
          className="w-28 h-10 mt-1.5"
          src="/assets/FinFlow.svg"
          alt="FinFlow Logo"
        />
      </div>
      {/* Navigation Links */}
      <div className="bg-NavBg/10 rounded-2xl border border-NavBg flex space-x-8 w-96 h-14 py-3 px-6">
        {["Product", "Insights", "Company", "Pricing"].map((item, index) => (
          <p
            key={index}
            className="text-white font-title h-7 relative cursor-pointer"
          >
            {item}
            {/* Underline animation */}
            <motion.span
              variants={hoverBorder}
              initial="initial"
              whileHover="animate"
              whileTap="animate"
              className="w-full h-full absolute left-0 top-0 z-10 border-b-2 border-white"
            ></motion.span>
          </p>
        ))}
      </div>
      {/* Call-to-Action Button */}
      {/* <button className="h-14 w-44 px-4 py-2.5 rounded-xl border-2 border-white bg-gradient-to-r from-white to-offWhite overflow-hidden">
        <p className="font-title text-sm">Get Started For Free</p>
      </button> */}

      <button className="h-14 w-44 px-4 py-2.5 rounded-xl border-2 border-white bg-gradient-to-r from-white to-offWhite overflow-hidden">
        <p className="font-title text-sm">
          {Array.from("Get Started For Free").map((l, i) => (
            <motion.span
              key={i}
              // key={i}
              initial={{ opacity: 0, y: 10 }}
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
  );
};

export default Nav;
