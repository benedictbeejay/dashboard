import React from "react";

const Faq = () => {
  return (
    <div className="w-screen h-screen relative">
      <div className="absolute w-2/5 h-4/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-full">
          <p className="font-title flex justify-center text-center font-medium text-Header text-5xl ">
            Frequently Asked Questions
          </p>
        </div>

        <div className="h-4/5 w-full absolute bottom-0"></div>
      </div>
    </div>
  );
};

export default Faq;
