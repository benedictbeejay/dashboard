"use client";

import Hero from "@/components/Hero";
import Features from "@components/Features";
import Services from "@components/Services";
// import Why from "@components/Why";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Features />
      {/* <Why /> */}
    </div>
  );
};

export default Home;
