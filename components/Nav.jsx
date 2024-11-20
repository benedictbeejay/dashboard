"use client";
import Image from "next/image";
import React from "react";
import FinFlow from "@/public/assets/FinFlow.svg";

const Nav = () => {
  return (
    <div className="w-10/12 h-14 absolute top-10 left-1/2 -translate-x-1/2">
      <div className="flex gap-2">
        <img src="/assets/Layer_2 (1).svg" />
        <img src="/assets/FinFlow.svg" />
      </div>

      <div></div>
    </div>
  );
};

export default Nav;
