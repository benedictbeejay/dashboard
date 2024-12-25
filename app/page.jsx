"use client";

import Hero from "@components/Hero";
import Features from "@components/Features";
import Services from "@components/Services";
import About from "@components/About";
import Machine from "@components/Machine";
import Connect from "@components/Connect";
import Analytics from "@components/Analytics";
import Why from "@components/Why";
import Advantage from "@components/Advantage";
import Faq from "@components/Faq";
import Control from "@components/Control";

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
      <Advantage />
      <Faq />
      <Control />
    </div>
  );
};

export default Home;
