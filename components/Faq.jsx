import React, { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqItems = [
    {
      question: "Does FinFlow support businesses of all sizes?",
      answer:
        "Yes, FinFlow is scalable and offers flexible plans to meet the needs of businesses at different growth stages. Whether you’re a small startup or a large enterprise.",
    },
    {
      question: "What types of reports can I generate with FinFlow?",
      answer:
        "FinFlow allows you to generate expense reports, revenue summaries, and custom financial insights tailored to your needs.",
    },
    {
      question: "How does FinFlow automate expense tracking?",
      answer:
        "FinFlow uses AI-powered tools to categorize expenses automatically and provides real-time updates for better financial visibility.",
    },
    {
      question: "What kind of customer support does FinFlow offer?",
      answer:
        "FinFlow provides 24/7 customer support via live chat, email, and a comprehensive help center with detailed guides.",
    },
  ];

  return (
    <div className="w-screen h-screen relative">
      <div className="absolute w-3/5 h-4/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-full ">
          <p className="font-title flex justify-center text-center font-medium text-Header text-5xl">
            Frequently Asked Questions
          </p>
        </div>

        <div className="h-4/5 w-full absolute bottom-0 block overflow-y-auto ">
          <div className="absolute top-1/2 h-fit w-full -translate-y-1/2 ">
            {faqItems.map((item, index) => (
              <div key={index} className="h-fit pb-2 w-full">
                <div
                  className="py-2 bg-bgGrayBorder rounded-md relative px-4 flex items-center cursor-pointer"
                  onClick={() => handleClick(index)}
                >
                  <p className="font-title font-medium text-Header text-lg">
                    {item.question}
                  </p>
                  <img
                    src="/assets/arrow.png"
                    alt="Toggle"
                    className={`absolute right-4 top-1/2 -translate-y-1/2 transition-transform duration-200 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {activeIndex === index && item.answer && (
                  <div className="py-2 rounded-md px-4 bg-white shadow-md">
                    <p className="font-title text-Location text-sm">
                      {item.answer}
                    </p>
                  </div>
                )}
                {activeIndex === index && !item.answer && (
                  <div className="py-2 rounded-md px-4 bg-white shadow-md">
                    <p className="font-title text-Location text-sm ">
                      No answer is currently available for this question.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
