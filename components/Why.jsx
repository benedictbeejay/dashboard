import React from "react";

const Why = () => {
  return (
    <div className="h-screen relative">
      <div className="h-4/5 absolute top-1/2 -translate-y-1/2 w-full">
        <div className="">
          <p className="font-title flex justify-center text-center font-medium text-Header text-5xl ">
            Why Should You Use FinFlow
          </p>
        </div>
        <div className="h-4/5 w-full bottom-0 absolute grid grid-cols-3 gap-3">
          <div className="rounded-xl bg-bgGray block p-6">
            <div>
              <p className="font-title font-medium text-xl text-Header">
                Scalability and Reach
              </p>
            </div>
            <img className="w-full" src="/assets/ai-marketing.png" />
            <div className="w-full">
              <p className="text-Header font-title">
                Unlike traditional on-premise software, SaaS products are
                inherently scalable. Marketing efforts can reach a wider
                audience.
              </p>
            </div>
          </div>
          <div className="rounded-xl bg-bgGray block p-6">
            <div>
              <p className="font-title font-medium text-xl text-Header">
                Recurring Revenue
              </p>
            </div>
            <img className="w-full" src="/assets/ai-analysis.png" />
            <div className="w-full">
              <p className="text-Header font-title">
                SaaS businesses typically operate on a subscription model,
                generating recurring revenue from long-term customer.
              </p>
            </div>
          </div>
          <div className="rounded-xl bg-bgGray block p-6">
            <div>
              <p className="font-title font-medium text-xl text-Header">
                Data-Driven Insights
              </p>
            </div>
            <img className="w-full" src="/assets/ai-deal.png" />
            <div className="w-full">
              <p className="text-Header font-title">
                Marketing a SaaS product allows you to leverage valuable
                customer data for targeted campaigns and continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
