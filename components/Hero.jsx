"use client";
import React from "react";
import "../app/globals.css";
import Nav from "./Nav";

const Hero = () => {
  return (
    <div className="w-full h-screen bg-hero relative">
      <div>
        <Nav />
        <div className="absolute flex h-4/6 top-48 w-10/12 left-1/2 -translate-x-1/2">
          <article className="left w-1/2 h-full space-y-12 ">
            <div className="w-full space-y-4 ">
              <h1 className="text-7xl font-title  text-white">
                Boost Your Marketing ROI
              </h1>

              <p className="text-white font-title">
                Unlock the full potential of your finances with FinFlow, the
                cutting-edge SaaS solution designed to streamline.
              </p>

              <button className="h-14 w-44 px-4 py-2.5 rounded-xl  border-2 border-white bg-gradient-to-r from-white to-offWhite">
                <p className="font-title text-sm">Get 14 Days Free Trial</p>
              </button>
            </div>
            <div className="w-full flex ">
              <div className="w-1/2 m-auto">
                <p className="font-title m-auto text-sm text-white">
                  No big deal, just some recognition for my work
                </p>
              </div>
              <div className="w-1/2 m-auto">
                <img className="m-auto" src="/assets/Award.png" />
              </div>
            </div>
          </article>
          <article className="right w-1/2 h-full relative">
            <div className="w-full h-80 absolute bottom-0">
              <div className="h-3/5 w-80 my-24 ml-12 rounded-lg  border-2 border-white bg-gradient-to-r from-white to-offWhite">
                <div className="w-full px-4 py-3 h-1/2">
                  <p className="font-title font-medium">
                    "From effortless expense tracking to real-time reporting and
                    seamless integrations"
                  </p>
                </div>
                <div className="w-full h-1/2 py-5">
                  <div className="w-3/5  h-full ml-4 flex">
                    <img src="/assets/Ellipse 61.png" />
                    <div className="w-4/5 block pl-2 py-1">
                      <p className="font-title font-medium">Jessica Lubahn</p>
                      <p className="font-title font-normal text-black/60">
                        Product Manager
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Hero;
