// import React, { useState } from "react";

// const Analytics = () => {
//   const [activeButton, setActiveButton] = useState(null);
//   const handleButtonClick = (buttonId) => {
//     setActiveButton(buttonId);
//     console.log("hello");
//   };

//   return (
//     <div className="h-screen relative">
//       <div className="absolute flex w-full h-4/5 top-1/2 -translate-y-1/2">
//         <div className="left w-1/2 h-full relative">
//           <img src="/assets/machine.png" className=" flex  h-full m-auto" />

//           <div className="absolute duration-100 justify-between p-4 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 h-2/5 w-3/5 bg-white rounded-xl ">
//             <div className="w-full h-1/5 flex relative">
//               <div className="w-4/12 h-full block">
//                 <div className="h-1/2 w-full flex">
//                   <p className="font-title text-Balance text-xs my-auto ">
//                     Current Balance
//                   </p>
//                 </div>
//                 <div className="h-1/2 w-full flex">
//                   <p className=" text-Header font-semibold ">$ 250,560.0</p>
//                 </div>
//               </div>
//               <div className="w-7/12 h-full absolute right-0 flex">
//                 <div className="w-1/4 h-full py-1 px-1">
//                   <button
//                     onClick={() => handleButtonClick("A")}
//                     className={`w-full h-full $(activeButton === "A" ? "bg-Blue" : "bg-white") rounded-xl flex justify-evenly`}
//                   >
//                     <p
//                       className={`text-xs  my-auto $(activeButton === "A" ? "text-white" : "text-Balance") flex`}
//                     >
//                       24h
//                     </p>
//                     <span
//                       className={`bg-white$(activeButton === "A" ? "flex" : "hidden") rounded-full h-1.5 w-1.5 my-auto`}
//                     ></span>
//                   </button>
//                 </div>
//                 <div className="w-1/4 h-full p-1 ">
//                   <button
//                     onClick={() => handleButtonClick("B")}
//                     className={`w-full h-full $(activeButton === "B" ? "bg-Blue" : "bg-white") rounded-xl flex justify-evenly`}
//                   >
//                     <p
//                       className={`text-xs  my-auto $(activeButton === "B" ? "text-white" : "text-Balance") flex`}
//                     >
//                       1d
//                     </p>
//                     <span
//                       className={`bg-white$(activeButton === "B" ? "flex" : "hidden") rounded-full h-1.5 w-1.5 my-auto`}
//                     ></span>
//                   </button>
//                 </div>
//                 <div className="w-1/4 h-full">
//                   <button
//                     onClick={() => handleButtonClick("C")}
//                     className={`w-full h-full $(activeButton === "C" ? "bg-Blue" : "bg-white") rounded-xl flex justify-evenly`}
//                   >
//                     <p
//                       className={`text-xs  my-auto $(activeButton === "C" ? "text-white" : "text-Balance") flex`}
//                     >
//                       7d
//                     </p>
//                     <span
//                       className={`bg-white$(activeButton === "C" ? "flex" : "hidden") rounded-full h-1.5 w-1.5 my-auto`}
//                     ></span>
//                   </button>
//                 </div>
//                 <div className="w-1/4 h-full">
//                   <button
//                     onClick={() => handleButtonClick("D")}
//                     className={`w-full h-full $(activeButton === "D" ? "bg-Blue" : "bg-white") rounded-xl flex justify-evenly`}
//                   >
//                     <p
//                       className={`text-xs  my-auto $(activeButton === "D" ? "text-white" : "text-Balance") flex`}
//                     >
//                       6m
//                     </p>
//                     <span
//                       className={`bg-white$(activeButton === "D" ? "flex" : "hidden") rounded-full h-1.5 w-1.5 my-auto`}
//                     ></span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="w-full h-3/5"></div>
//             <div className="w-full h-1/5"></div>
//           </div>
//         </div>
//         <div className="relative right w-1/2 h-full ">
//           <div className="absolute space-y-0 block w-4/5 right-0 h-full">
//             <div className="w-full h-1/3">
//               <div className="w-full h-1/3 relative">
//                 <p className="font-title text-left absolute top-1/2 -translate-y-1/2 font-medium  text-Header text-4xl">
//                   Connect with apps
//                 </p>
//               </div>
//               <div className="w-full h-2/3 relative">
//                 <p className="font-title text-xl absolute top-1/2 -translate-y-1/2 text-Header/70">
//                   In today's fast-paced business environment, organizations are
//                   increasingly relying on customizations and automation to
//                   enhance their operational efficiency and effectiveness.
//                 </p>
//               </div>
//             </div>
//             <div className="absolute w-full h-1/3 bottom-0 ">
//               <div className="w-full h-full relative">
//                 <div className="h-14 top-0 p-4 space-x-2 flex bg-bgGrayBorder rounded-lg">
//                   <img src="/assets/bg.png" className="w-4 h-4 my-auto" />
//                   <p className="font-title text-Header text-sm m-auto">
//                     Recurring subscription fees create a steady
//                   </p>
//                 </div>
//                 <div className="h-14 absolute w-full top-1/2 -translate-y-1/2 p-4 space-x-2 flex bg-bgGrayBorder rounded-lg">
//                   <img src="/assets/bg.png" className="w-4 h-4 my-auto" />
//                   <p className="font-title text-Header text-sm m-auto">
//                     Subscription models incentivize customer retention.
//                   </p>
//                 </div>
//                 <div className="h-14 absolute bottom-0 p-4 w-full space-x-2 flex bg-bgGrayBorder rounded-lg">
//                   <img src="/assets/bg.png" className="w-4 h-4 my-auto" />
//                   <p className="font-title text-Header text-sm m-auto">
//                     Subscription models can reduce the need for marketing
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Analytics;

import React, { useState } from "react";

const Analytics = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
    // console.log(`Button ${buttonId} clicked`);
  };

  return (
    <div className="h-screen relative">
      <div className="absolute flex w-full h-4/5 top-1/2 -translate-y-1/2">
        {/* Left Section */}
        <div className="left w-1/2 h-full relative">
          <img
            src="/assets/machine.png"
            alt="Machine Illustration"
            className="flex h-full m-auto"
          />

          <div className="absolute duration-100 p-4 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 h-2/5 w-3/5 bg-white rounded-xl">
            {/* Balance Section */}
            <div className="w-full h-1/5 flex">
              <div className="w-4/12">
                <div className="h-1/2 w-full flex">
                  <p className="font-title text-Balance text-xs my-auto">
                    Current Balance
                  </p>
                </div>
                <div className="h-1/2 w-full flex">
                  <p className="text-Header font-semibold">$ 250,560.0</p>
                </div>
              </div>
              <div className="w-7/12 flex justify-between">
                {/* Buttons */}
                {["24h", "1d", "7d", "6m"].map((label, index) => {
                  const buttonId = String.fromCharCode(65 + index); // Generate A, B, C, D
                  return (
                    <button
                      key={buttonId}
                      onClick={() => handleButtonClick(buttonId)}
                      className={`w-1/4 h-full rounded-xl flex justify-evenly items-center transition-all duration-400 ${
                        activeButton === buttonId
                          ? "bg-Blue text-white"
                          : "bg-white text-Balance"
                      }`}
                    >
                      {label}
                      {activeButton === buttonId && (
                        <span className="bg-white rounded-full h-1.5 w-1.5 transition-all duration-400 ease-in-out "></span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="right w-1/2 h-full relative">
          <div className="absolute block w-4/5 right-0 h-full">
            {/* Header Section */}
            <div className="h-1/3">
              <p className="font-title text-4xl text-Header font-medium">
                Connect with apps
              </p>
              <p className="font-title text-xl text-Header/70">
                In today's fast-paced business environment, organizations are
                increasingly relying on customizations and automation to enhance
                their operational efficiency and effectiveness.
              </p>
            </div>

            {/* Subscription Models */}
            <div className="h-1/3">
              {[
                "Recurring subscription fees create a steady",
                "Subscription models incentivize customer retention.",
                "Subscription models can reduce the need for marketing",
              ].map((text, index) => (
                <div
                  key={index}
                  className="h-14 mb-2 p-4 flex bg-bgGrayBorder rounded-lg"
                >
                  <img
                    src="/assets/bg.png"
                    alt={`Icon ${index + 1}`}
                    className="w-4 h-4 my-auto"
                  />
                  <p className="font-title text-Header text-sm ml-2">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
