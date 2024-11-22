"use client";

const Services = () => {
  return (
    <div className="w-full h-screen relative">
      <div className="w-10/12 h-4/5 absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2">
        <div className="w-4/6 absolute top-0 left-1/2 -translate-x-1/2 px-2">
          <p className="font-title font-medium text-Header text-5xl ">
            Tailored Services for Your Needs
          </p>
        </div>

        <div className="absolute bottom-16 gap-4 flex w-full h-4/6 left-1/2 -translate-x-1/2 ">
          <div className="left flex w-1/2 py-4 px-4 gap-2 rounded-lg border-bgGrayBorder bg-bgGray">
            <img className="w-1/2 flex " src="/assets/Rectangle 2324.png" />
            <div className="SEO block relative w-1/2">
              <div className="w-full h-1/8 flex gap-4">
                <img src="/assets/icon.png" />
                <p className="font-title font-medium py-2 text-Header">
                  SEO optimization
                </p>
              </div>
              <p className="text-Header/70 absolute bottom-0 font-title ">
                Unlock the full potential of your finances with FinFlow, the
                cutting-edge SaaS solution{" "}
              </p>
            </div>
          </div>

          <div className="right flex w-1/2 py-4 px-4 gap-2 rounded-lg border-bgGrayBorder bg-bgGray">
            <img className="w-1/2 flex " src="/assets/Rectangle 2326.png" />
            <div className="SEO block relative w-1/2">
              <div className="w-full h-1/8 flex gap-4">
                <img src="/assets/icon (1).png" />
                <p className="font-title font-medium py-2 text-Header">
                  Lead capture forms
                </p>
              </div>
              <p className="text-Header/70 absolute bottom-0 font-title ">
                Unlock the full potential of your finances with FinFlow, the
                cutting-edge SaaS solution{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
