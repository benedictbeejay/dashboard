// "use client";
// import React from "react";
// import { animate, delay, motion } from "framer-motion";

// const Why = () => {
//   return (
//     <div className="h-screen relative">
//       <div className="absolute flex w-10/12 h-4/5 top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2">
//         <div className="w-full">
//           <p className="font-title flex justify-center text-center font-medium text-Header text-5xl ">
//             {Array.from("Why Should You Use FinFlow").map((l, i) => (
//               <motion.span
//                 key={i}
//                 initial={{ opacity: 0, y: 10 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.05 }}
//                 viewport={{ once: true }}
//                 className={l === " " ? "inline-block w-[0.25em]" : ""}
//               >
//                 {l}
//               </motion.span>
//             ))}
//           </p>
//         </div>
//         <div className="h-4/5 w-full bottom-0 absolute grid grid-cols-3 gap-3">
//           <div className="rounded-xl bg-bgGray block p-6">
//             <div>
//               <p className="font-title font-medium text-xl text-Header">
//                 Scalability and Reach
//               </p>
//             </div>
//             <img className="w-full" src="/assets/ai-marketing.png" />
//             <div className="w-full">
//               <p className="text-Header font-title">
//                 Unlike traditional on-premise software, SaaS products are
//                 inherently scalable. Marketing efforts can reach a wider
//                 audience.
//               </p>
//             </div>
//           </div>
//           <div className="rounded-xl bg-bgGray block p-6">
//             <div>
//               <p className="font-title font-medium text-xl text-Header">
//                 Recurring Revenue
//               </p>
//             </div>
//             <img className="w-full" src="/assets/ai-analysis.png" />
//             <div className="w-full">
//               <p className="text-Header font-title">
//                 SaaS businesses typically operate on a subscription model,
//                 generating recurring revenue from long-term customer.
//               </p>
//             </div>
//           </div>
//           <div className="rounded-xl bg-bgGray block p-6">
//             <div>
//               <p className="font-title font-medium text-xl text-Header">
//                 Data-Driven Insights
//               </p>
//             </div>
//             <img className="w-full" src="/assets/ai-deal.png" />
//             <div className="w-full">
//               <p className="text-Header font-title">
//                 Marketing a SaaS product allows you to leverage valuable
//                 customer data for targeted campaigns and continuous improvement.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Why;
"use client";
import React from "react";
import { motion } from "framer-motion";

const stagger = {
  initial: {
    opacity: 0,
    // y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    // y: 0,
    transition: {
      delay: 0.8 * index,
    },
  }),
};
const WHY_ITEMS = [
  {
    title: "Scalability and Reach",
    description:
      "Unlike traditional on-premise software, SaaS products are inherently scalable. Marketing efforts can reach a wider audience.",
    imgSrc: "/assets/ai-marketing.png",
  },
  {
    title: "Recurring Revenue",
    description:
      "SaaS businesses typically operate on a subscription model, generating recurring revenue from long-term customers.",
    imgSrc: "/assets/ai-analysis.png",
  },
  {
    title: "Data-Driven Insights",
    description:
      "Marketing a SaaS product allows you to leverage valuable customer data for targeted campaigns and continuous improvement.",
    imgSrc: "/assets/ai-deal.png",
  },
];

const Why = () => {
  return (
    <div className="h-screen relative">
      <div className="absolute flex w-10/12 h-4/5 top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2">
        <div className="w-full">
          <p className="font-title flex justify-center text-center font-medium text-Header text-5xl">
            {Array.from("Why Should You Use FinFlow").map((letter, index) => (
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
        <div className="h-4/5 w-full bottom-0 absolute grid grid-cols-3 gap-3">
          {WHY_ITEMS.map((item, index) => (
            <motion.div
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: "all" }}
              // key={index}
              custom={index}
              key={index}
              className="rounded-xl bg-bgGray block p-6"
            >
              <div>
                <p className="font-title font-medium text-xl text-Header">
                  {item.title}
                </p>
              </div>
              <img className="w-full" src={item.imgSrc} alt={item.title} />
              <div className="w-full">
                <p className="text-Header font-title">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Why;
