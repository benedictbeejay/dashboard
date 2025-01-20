// import React, { useEffect, useRef } from "react";
// import Link from "next/link";
// import { Link as ScrollLink } from "react-scroll";
// import { motion, useAnimation, useInView } from "framer-motion";

// const stagger = {
//   initial: {
//     opacity: 0,
//     y: 100,
//   },
//   animate: (index) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: 0.5 * index,
//     },
//   }),
// };

// const Footer = () => {
//   const navigationLinks = [
//     { label: "Products", to: "products" },
//     { label: "Company", to: "products" },
//     { label: "Pricing", to: "products" },
//     { label: "Insights", to: "insights" },
//   ];

//   const resourcesLinks = [
//     { label: "Terms & Conditions", href: "/terms" },
//     { label: "Privacy", href: "/privacy" },
//     { label: "Changelog", href: "/changelog" },
//   ];

//   const careersLinks = [
//     { label: "Careers", href: "/careers" },
//     { label: "Contacts", href: "/contacts" },
//     { label: "FAQs", to: "faqs" },
//   ];

//   const text =
//     "Discover new ways to level up your designs with AI, create dynamic.";

//   return (
//     <div className="w-screen h-screen relative">
//       <div className="w-10/12 h-4/5 absolute bottom-0 left-1/2 -translate-x-1/2 block">
//         <div className="w-full h-full relative">
//           <div className="relative w-full h-fit">
//             <img src="/assets/Logo.svg" className="absolute" alt="Logo" />
//             {/* <p className="w-1/3 absolute right-0 font-title text-Location pr-8">
//               Discover new ways to level up your designs with AI, create
//               dynamic.
//             </p> */}
//             <p className="w-1/3 absolute right-0 font-title text-Location pr-8">
//               {Array.from(text).map((letter, index) => (
//                 <motion.span
//                   key={index}
//                   initial={{ opacity: 0, y: 10 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.05 }}
//                   viewport={{ once: true, amount: "all" }}
//                   className={letter === " " ? "inline-block w-[0.25em]" : ""}
//                 >
//                   {letter}
//                 </motion.span>
//               ))}
//             </p>
//           </div>

//           {/* Footer Links */}
//           <div className="h-1/3 w-full absolute top-1/2 -translate-y-1/2 grid grid-cols-2">
//             <div className="grid grid-cols-3">
//               {/* Navigation Section */}
//               <div className="grid grid-rows-5">
//                 <div>
//                   <p className="font-title text-Header font-medium">
//                     Navigation
//                   </p>
//                 </div>
//                 {navigationLinks.map(({ label, to, index }) => (
//                   <motion.div
//                     variants={stagger}
//                     initial="initial"
//                     whileInView="animate"
//                     viewport={{ once: true, amount: "all" }}
//                     key={index}
//                     custom={index}
//                     // key={label}
//                   >
//                     <motion.ScrollLink
//                       to={to}
//                       smooth={true}
//                       offset={-70}
//                       duration={500}
//                       className="font-title text-Header/70 cursor-pointer"
//                     >
//                       {label}
//                     </motion.ScrollLink>
//                   </motion.div>
//                 ))}
//               </div>

//               {/* Resources Section */}
//               <div className="grid grid-rows-5">
//                 <div>
//                   <p className="font-title text-Header font-medium">
//                     Resources
//                   </p>
//                 </div>
//                 {resourcesLinks.map(({ label, href }) => (
//                   <div key={label}>
//                     <Link
//                       href={href}
//                       className="font-title text-Header/70 cursor-pointer"
//                     >
//                       {label}
//                     </Link>
//                   </div>
//                 ))}
//               </div>

//               {/* Careers Section */}
//               <div className="grid grid-rows-5">
//                 <div>
//                   <p className="font-title text-Header font-medium">Careers</p>
//                 </div>
//                 {careersLinks.map(({ label, href, to }) =>
//                   href ? (
//                     <div key={label}>
//                       <Link
//                         href={href}
//                         className="font-title text-Header/70 cursor-pointer"
//                       >
//                         {label}
//                       </Link>
//                     </div>
//                   ) : (
//                     <div key={label}>
//                       <ScrollLink
//                         to={to}
//                         smooth={true}
//                         offset={-70}
//                         duration={500}
//                         className="font-title text-Header/70 cursor-pointer"
//                       >
//                         {label}
//                       </ScrollLink>
//                     </div>
//                   )
//                 )}
//               </div>
//             </div>

//             <div className="absolute right-0 top-0 w-fit flex space-x-8 pr-8">
//               <p className="font-title text-nietz text-lg">Connect with us</p>
//               <img src="/assets/x.png" className="h-5 m-auto" alt="Icon X" />
//               <img src="/assets/ig.png" className="h-5 m-auto" alt="Icon IG" />
//               <img src="/assets/in.png" className="h-5 m-auto" alt="Icon IN" />
//               <img
//                 src="/assets/threads.png"
//                 className="h-5 m-auto"
//                 alt="Icon Threads"
//               />
//             </div>
//           </div>

//           <div className="w-full h-fit absolute bottom-0">
//             <div className="w-full h-full grid grid-cols-2 py-8 relative"></div>
//             <div className="font-title text-Location absolute top-1/2 -translate-y-1/2">
//               © FinFlow - A Financial Software Company
//             </div>
//             <div className="font-title text-Location absolute top-1/2 -translate-y-1/2 right-0">
//               Emergency Contact : 16247
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

// import React from "react";
// import Link from "next/link";
// import { Link as ScrollLink } from "react-scroll";
// import { motion } from "framer-motion";

// const stagger = {
//   initial: { opacity: 0, y: 100 },
//   animate: (index) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: 0.5 * index },
//   }),
// };

// const Footer = () => {
//   const navigationLinks = [
//     { label: "Products", to: "products" },
//     { label: "Company", to: "products" },
//     { label: "Pricing", to: "products" },
//     { label: "Insights", to: "insights" },
//   ];

//   const resourcesLinks = [
//     { label: "Terms & Conditions", to: "products" },
//     { label: "Privacy", to: "products" },
//     { label: "Changelog", to: "products" },
//   ];

//   const careersLinks = [
//     { label: "Careers", to: "products" },
//     { label: "Contacts", to: "products" },
//     { label: "FAQs", to: "products" },
//   ];

//   const text =
//     "Discover new ways to level up your designs with AI, create dynamic.";

//   return (
//     <div className="w-screen h-screen relative">
//       <div className="w-10/12 h-4/5 absolute bottom-0 left-1/2 transform -translate-x-1/2 block">
//         <div className="w-full h-full relative">
//           <div className="relative w-full h-fit">
//             <img src="/assets/Logo.svg" className="absolute" alt="Logo" />
//             <p className="w-1/3 absolute right-0 font-title text-Location pr-8">
//               {Array.from(text).map((letter, index) => (
//                 <motion.span
//                   key={index}
//                   initial={{ opacity: 0, y: 10 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.05 }}
//                   viewport={{ once: true, amount: "all" }}
//                   className={letter === " " ? "inline-block w-[0.25em]" : ""}
//                 >
//                   {letter}
//                 </motion.span>
//               ))}
//             </p>
//           </div>

//           <div className="h-1/3 w-full absolute top-1/2 transform -translate-y-1/2 grid grid-cols-2">
//             <div className="grid grid-cols-3">
//               <div className="grid grid-rows-5">
//                 <div>
//                   <p className="font-title text-Header font-medium">
//                     Navigation
//                   </p>
//                 </div>
//                 {navigationLinks.map(({ label, to }, index) => (
//                   <motion.div
//                     key={label}
//                     variants={stagger}
//                     initial="initial"
//                     whileInView="animate"
//                     viewport={{ once: true, amount: "all" }}
//                     custom={index}
//                   >
//                     <ScrollLink
//                       to={to}
//                       smooth={true}
//                       offset={-70}
//                       duration={500}
//                       className="font-title text-Header/70 cursor-pointer"
//                     >
//                       {label}
//                     </ScrollLink>
//                   </motion.div>
//                 ))}
//               </div>

//               <div className="grid grid-rows-5">
//                 <div>
//                   <p className="font-title text-Header font-medium">
//                     Resources
//                   </p>
//                 </div>
//                 {/* {resourcesLinks.map(({ label, href }) => (
//                   <div key={label}>
//                     <Link
//                       href={href}
//                       className="font-title text-Header/70 cursor-pointer"
//                     >
//                       {label}
//                     </Link>
//                   </div>
//                 ))} */}
//                 {resourcesLinks.map(({ label, href }) => (
//                   <motion.div
//                     key={label}
//                     variants={stagger}
//                     initial="initial"
//                     whileInView="animate"
//                     viewport={{ once: true, amount: "all" }}
//                     custom={index}
//                   >
//                     <ScrollLink
//                       to={to}
//                       smooth={true}
//                       offset={-70}
//                       duration={500}
//                       className="font-title text-Header/70 cursor-pointer"
//                     >
//                       {label}
//                     </ScrollLink>
//                   </motion.div>
//                 ))}
//               </div>

//               <div className="grid grid-rows-5">
//                 <div>
//                   <p className="font-title text-Header font-medium">Careers</p>
//                 </div>
//                 {careersLinks.map(({ label, href, to }) =>
//                   href ? (
//                     <motion.div key={label}>
//                       <Link
//                         href={href}
//                         className="font-title text-Header/70 cursor-pointer"
//                       >
//                         {label}
//                       </Link>
//                     </motion.div>
//                   ) : (
//                     <motion.div key={label}>
//                       <ScrollLink
//                         to={to}
//                         smooth={true}
//                         offset={-70}
//                         duration={500}
//                         className="font-title text-Header/70 cursor-pointer"
//                       >
//                         {label}
//                       </ScrollLink>
//                     </motion.div>
//                   )
//                 )}
//               </div>
//             </div>

//             <div className="absolute right-0 top-0 w-fit flex space-x-8 pr-8">
//               <p className="font-title text-nietz text-lg">Connect with us</p>
//               <img src="/assets/x.png" className="h-5 m-auto" alt="Icon X" />
//               <img src="/assets/ig.png" className="h-5 m-auto" alt="Icon IG" />
//               <img src="/assets/in.png" className="h-5 m-auto" alt="Icon IN" />
//               <img
//                 src="/assets/threads.png"
//                 className="h-5 m-auto"
//                 alt="Icon Threads"
//               />
//             </div>
//           </div>

//           <div className="w-full h-fit absolute bottom-0">
//             <div className="w-full h-full grid grid-cols-2 py-8 relative"></div>
//             <div className="font-title text-Location absolute top-1/2 transform -translate-y-1/2">
//               © FinFlow - A Financial Software Company
//             </div>
//             <div className="font-title text-Location absolute top-1/2 transform -translate-y-1/2 right-0">
//               Emergency Contact : 16247
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

const stagger = {
  initial: { opacity: 0, y: 100 },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.5 * index },
  }),
};

const Footer = () => {
  const navigationLinks = [
    { label: "Products", to: "products" },
    { label: "Company", to: "products" },
    { label: "Pricing", to: "products" },
    { label: "Insights", to: "insights" },
  ];

  const resourcesLinks = [
    { label: "Terms & Conditions", to: "products" },
    { label: "Privacy", to: "products" },
    { label: "Changelog", to: "products" },
  ];

  const careersLinks = [
    { label: "Careers", to: "products" },
    { label: "Contacts", to: "products" },
    { label: "FAQs", to: "products" },
  ];

  const text =
    "Discover new ways to level up your designs with AI, create dynamic.";

  return (
    <div className="w-screen h-screen relative">
      <div className="w-10/12 h-4/5 absolute bottom-0 left-1/2 transform -translate-x-1/2 block">
        <div className="w-full h-full relative">
          <div className="relative w-full h-fit">
            <img src="/assets/Logo.svg" className="absolute" alt="Logo" />
            <p className="w-1/3 absolute right-0 font-title text-Location pr-8">
              {Array.from(text).map((letter, index) => (
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
            </p>
          </div>

          <div className="h-1/3 w-full absolute top-1/2 transform -translate-y-1/2 grid grid-cols-2">
            <div className="grid grid-cols-3">
              <div className="grid grid-rows-5">
                <div>
                  <p className="font-title text-Header font-medium">
                    Navigation
                  </p>
                </div>
                {navigationLinks.map(({ label, to }, index) => (
                  <motion.div
                    key={label}
                    variants={stagger}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: "all" }}
                    custom={index}
                  >
                    <ScrollLink
                      to={to}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="font-title text-Header/70 cursor-pointer"
                    >
                      {label}
                    </ScrollLink>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-rows-5">
                <div>
                  <p className="font-title text-Header font-medium">
                    Resources
                  </p>
                </div>
                {resourcesLinks.map(({ label, to }, index) => (
                  <motion.div
                    key={label}
                    variants={stagger}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: "all" }}
                    custom={index}
                  >
                    <ScrollLink
                      to={to}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="font-title text-Header/70 cursor-pointer"
                    >
                      {label}
                    </ScrollLink>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-rows-5">
                <div>
                  <p className="font-title text-Header font-medium">Careers</p>
                </div>
                {careersLinks.map(({ label, href, to }, index) =>
                  href ? (
                    <motion.div key={label}>
                      <Link
                        href={href}
                        className="font-title text-Header/70 cursor-pointer"
                      >
                        {label}
                      </Link>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={label}
                      variants={stagger}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true, amount: "all" }}
                      custom={index}
                    >
                      <ScrollLink
                        to={to}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="font-title text-Header/70 cursor-pointer"
                      >
                        {label}
                      </ScrollLink>
                    </motion.div>
                  )
                )}
              </div>
            </div>

            <div className="absolute right-0 top-0 w-fit flex space-x-8 pr-8">
              <p className="font-title text-nietz text-lg">Connect with us</p>
              <img src="/assets/x.png" className="h-5 m-auto" alt="Icon X" />
              <img src="/assets/ig.png" className="h-5 m-auto" alt="Icon IG" />
              <img src="/assets/in.png" className="h-5 m-auto" alt="Icon IN" />
              <img
                src="/assets/threads.png"
                className="h-5 m-auto"
                alt="Icon Threads"
              />
            </div>
          </div>

          <div className="w-full h-fit absolute bottom-0">
            <div className="w-full h-full grid grid-cols-2 py-8 relative"></div>
            <div className="font-title text-Location absolute top-1/2 transform -translate-y-1/2">
              © FinFlow - A Financial Software Company
            </div>
            <div className="font-title text-Location absolute top-1/2 transform -translate-y-1/2 right-0">
              Emergency Contact : 16247
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
