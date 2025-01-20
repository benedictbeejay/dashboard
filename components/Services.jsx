"use client";
import { animate, motion } from "framer-motion";

const img = {
  initial: {
    scaleX: 0,
    scaleY: 0,
    y: 100,
  },
  animate: {
    scaleX: 1,
    scaleY: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.2,
    },
  },
};

const stagger = {
  initial: {
    y: 100,
  },
  animate: {
    y: 0,
    transition: {
      delay: 0.2,
    },
  },
};

const drag = {};

const Services = () => {
  return (
    <div className="w-full h-screen relative">
      <div className="w-10/12 h-4/5 absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2">
        {/* Title Section */}
        <div className="w-4/6 absolute top-0 left-1/2 -translate-x-1/2 px-2">
          <motion.p className="font-title flex justify-center text-center font-medium text-Header text-5xl">
            {Array.from("Tailored Services for Your Needs").map((l, i) => (
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
          </motion.p>
        </div>

        {/* Cards Section */}
        <div className="absolute bottom-16 gap-4 flex w-full h-4/6 left-1/2 -translate-x-1/2">
          {/* Left Card */}
          <div className="left flex w-1/2 py-4 px-4 gap-2 rounded-lg border-bgGrayBorder bg-bgGray ">
            <motion.img
              variants={img}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="w-1/2 flex"
              src="/assets/Rectangle 2324.png"
              alt="SEO Optimization"
            />
            <div className="SEO block relative w-1/2">
              <motion.div className="w-full h-1/8 flex gap-4">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  whileDrag={{ scale: 0.9, rotate: 10 }}
                  drag
                  dragConstraints={{ top: 0, left: 0, bottom: 0, right: 0 }}
                  src="/assets/icon.png"
                  alt="SEO Icon"
                />
                <p className="font-title font-medium py-2 text-Header">
                  SEO optimization
                </p>
              </motion.div>
              <p className="text-Header/70 absolute bottom-0 font-title">
                {Array.from(
                  "Unlock the full potential of your finances with FinFlow, the cutting-edge SaaS solution."
                ).map((l, i) => (
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

          {/* Right Card */}
          <div className="right flex w-1/2 py-4 px-4 gap-2 rounded-lg border-bgGrayBorder bg-bgGray">
            <motion.img
              variants={img}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: "all" }}
              className="w-1/2 flex"
              src="/assets/Rectangle 2326.png"
              alt="Lead Capture Forms"
            />
            <div className="SEO block relative w-1/2">
              <div className="w-full h-1/8 flex gap-4">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  whileDrag={{ scale: 0.9, rotate: 10 }}
                  drag
                  dragConstraints={{ top: 0, left: 0, bottom: 0, right: 0 }}
                  src="/assets/icon (1).png"
                  alt="Forms Icon"
                />
                <p className="font-title font-medium py-2 text-Header">
                  Lead capture forms
                </p>
              </div>
              <p className="text-Header/70 absolute bottom-0 font-title">
                {Array.from(
                  "Unlock the full potential of your finances with FinFlow, the cutting-edge SaaS solution."
                ).map((l, i) => (
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
        </div>
      </div>
    </div>
  );
};

export default Services;
