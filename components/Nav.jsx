"use client";
import Image from "next/image";
import React from "react";
import FinFlow from "@/public/assets/FinFlow.svg";

const Nav = () => {
  return (
    <div className="flex w-10/12 h-14 justify-between absolute top-10 left-1/2 -translate-x-1/2">
      <div className="flex gap-2 h-full">
        <img className="h-10 w-11 mt-1.5" src="/assets/Layer_2 (1).svg" />
        <img className="w-28 h-10 mt-1.5" src="/assets/FinFlow.svg" />
      </div>

      <div className="bg-NavBg/10 jus rounded-2xl border border-NavBg flex space-x-8 w-96 h-14 py-3 px-6">
        <p className="text-white font-title h-7">Product</p>
        <p className="text-white font-title h-7">Insights</p>
        <p className="text-white font-title h-7">Company</p>
        <p className="text-white font-title h-7">Pricing</p>
      </div>

      <button className="h-14 w-44 px-4 py-2.5 rounded-xl  bg-white">
        <p className="font-title text-sm">Get Started For Free</p>
      </button>
    </div>
  );
};

export default Nav;
