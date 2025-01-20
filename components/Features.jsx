"use client";

import Analytics from "./Analytics";
import Connect from "./Connect";
import Machine from "./Machine";
import Why from "./Why";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <div className="w-full h-1/5 relative mb-20">
      <div className="absolute top-0 h-full left-1/2 -translate-x-1/2">
        <p className="font-title flex justify-center text-center font-medium text-Header text-5xl ">
          {Array.from("Explore Our Feature Set on FinFlow").map((l, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true, amount: "all" }}
              className={l === " " ? "inline-block w-[0.25em]" : ""}
            >
              {l}
            </motion.span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Features;
