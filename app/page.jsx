"use client";

import Hero from "@components/Hero";
import Features from "@components/Features";
import Services from "@components/Services";
import About from "@components/About";
import Machine from "@components/Machine";
import Connect from "@components/Connect";
import Analytics from "@components/Analytics";
import Why from "@components/Why";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Features />
      <Machine />
      <Connect />
      <Analytics />
      <Why />
      <About />
    </div>
  );
};

export default Home;
