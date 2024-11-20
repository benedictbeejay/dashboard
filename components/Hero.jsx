"use client";
import React from "react";
import "../app/globals.css";
import Nav from "./Nav";

const Hero = () => {
  return (
    <div className="w-full h-screen bg-hero relative">
      <div>
        <Nav />
      </div>
    </div>
  );
};

export default Hero;
