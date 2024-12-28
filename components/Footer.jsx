// import Link from "next/link";
// import React from "react";

// const Footer = () => {
//   return (
//     <div className="w-screen h-screen relative">
//       <div className="w-10/12 h-4/5 absolute bottom-0 left-1/2 -translate-x-1/2 block">
//         <div className="w-full h-full relative">
//           <div className="relative w-full h-fit">
//             <img src="/assets/Logo.svg" className="absolute" />
//             <p className="w-1/3 absolute right-0 font-title text-Location pr-8">
//               Discover new ways to level up your designs with AI , create
//               dynamic.
//             </p>
//           </div>

//           <div className="h-1/3 w-full absolute top-1/2 -translate-y-1/2 grid grid-cols-2 ">
//             <div className="grid grid-cols-3">
//               <div className="grid grid-rows-5">
//                 <div>
//                   <p className="font-title text-Header font-medium">
//                     Navigation
//                   </p>
//                 </div>
//                 <div>
//                   <Link href="/Nav" className="font-title text-Header/70">
//                     Products
//                   </Link>
//                 </div>
//                 <div>
//                   <p className="font-title text-Header/70">Company</p>
//                 </div>
//                 <div>
//                   <p className="font-title text-Header/70">Pricing</p>
//                 </div>
//                 <div>
//                   <p className="font-title text-Header/70">Insights</p>
//                 </div>
//               </div>
//               <div className="grid grid-rows-5">
//                 <div>
//                   <p className="font-title text-Header font-medium">
//                     Resources
//                   </p>
//                 </div>
//                 <div>
//                   <p className="font-title text-Header/70">
//                     Terms & Conditions
//                   </p>
//                 </div>
//                 <div>
//                   <p className="font-title text-Header/70">Privacy</p>
//                 </div>
//                 <div>
//                   <p className="font-title text-Header/70">Changelog</p>
//                 </div>
//                 <div>
//                   <p className="font-title text-Header/70"></p>
//                 </div>
//               </div>
//               <div className="grid grid-rows-5">
//                 <div>
//                   <p className="font-title text-Header font-medium">Careers</p>
//                 </div>
//                 <div>
//                   <p className="font-title text-Header/70">Careers</p>
//                 </div>
//                 <div>
//                   <p className="font-title text-Header/70">Contacts</p>
//                 </div>
//                 <div>
//                   <p className="font-title text-Header/70">FAQs</p>
//                 </div>
//                 <div>
//                   <p className="font-title text-Header/70"></p>
//                 </div>
//               </div>
//             </div>
//             <div></div>
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

const Footer = () => {
  return (
    <div className="w-screen h-screen relative">
      <div className="w-10/12 h-4/5 absolute bottom-0 left-1/2 -translate-x-1/2 block">
        <div className="w-full h-full relative">
          <div className="relative w-full h-fit">
            <img src="/assets/Logo.svg" className="absolute" alt="Logo" />
            <p className="w-1/3 absolute right-0 font-title text-Location pr-8">
              Discover new ways to level up your designs with AI, create
              dynamic.
            </p>
          </div>

          {/* Footer Links */}
          <div className="h-1/3 w-full absolute top-1/2 -translate-y-1/2 grid grid-cols-2">
            <div className="grid grid-cols-3">
              {/* Navigation Section */}
              <div className="grid grid-rows-5">
                <div>
                  <p className="font-title text-Header font-medium">
                    Navigation
                  </p>
                </div>
                <div>
                  <ScrollLink
                    to="products"
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="font-title text-Header/70 cursor-pointer"
                  >
                    Products
                  </ScrollLink>
                </div>
                <div>
                  <ScrollLink
                    to="products"
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="font-title text-Header/70 cursor-pointer"
                  >
                    Company
                  </ScrollLink>
                </div>
                <div>
                  <ScrollLink
                    to="products"
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="font-title text-Header/70 cursor-pointer"
                  >
                    Pricing
                  </ScrollLink>
                </div>
                <div>
                  <ScrollLink
                    to="insights"
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="font-title text-Header/70 cursor-pointer"
                  >
                    Insights
                  </ScrollLink>
                </div>
              </div>

              {/* Resources Section */}
              <div className="grid grid-rows-5">
                <div>
                  <p className="font-title text-Header font-medium">
                    Resources
                  </p>
                </div>
                <div>
                  <Link
                    href="/terms"
                    className="font-title text-Header/70 cursor-pointer"
                  >
                    Terms & Conditions
                  </Link>
                </div>
                <div>
                  <Link
                    href="/privacy"
                    className="font-title text-Header/70 cursor-pointer"
                  >
                    Privacy
                  </Link>
                </div>
                <div>
                  <Link
                    href="/changelog"
                    className="font-title text-Header/70 cursor-pointer"
                  >
                    Changelog
                  </Link>
                </div>
              </div>

              {/* Careers Section */}
              <div className="grid grid-rows-5">
                <div>
                  <p className="font-title text-Header font-medium">Careers</p>
                </div>
                <div>
                  <Link
                    href="/careers"
                    className="font-title text-Header/70 cursor-pointer "
                  >
                    Careers
                  </Link>
                </div>
                <div>
                  <Link
                    href="/contacts"
                    className="font-title text-Header/70 cursor-pointer"
                  >
                    Contacts
                  </Link>
                </div>
                <div>
                  <ScrollLink
                    to="faqs"
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="font-title text-Header/70 cursor-pointer"
                  >
                    FAQs
                  </ScrollLink>
                </div>
              </div>
            </div>
            <div className="absolute right-0 top-0 w-fit flex space-x-8 pr-8">
              <p className="font-title text-nietz text-lg">Connect with us</p>
              <img src="/assets/x.png" className="h-5 m-auto" />
              <img src="/assets/ig.png" className="h-5 m-auto" />
              <img src="/assets/in.png" className="h-5 m-auto" />
              <img src="/assets/threads.png" className="h-5 m-auto" />
            </div>
          </div>

          <div className="w-full h-fit absolute bottom-0 ">
            <div className="w-full h-full grid grid-cols-2 py-8 relative"></div>
            <div className="font-title text-Location absolute top-1/2 -translate-y-1/2">
              © FinFlow - A Financial Software Company
            </div>
            <div className="font-title text-Location absolute top-1/2 -translate-y-1/2 right-0">
              Emergency Contact : 16247
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
