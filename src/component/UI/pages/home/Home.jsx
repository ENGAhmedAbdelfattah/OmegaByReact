import React from "react";
import Landing from "./sections/landing/Landing";
import HowWork from "./sections/howWork/HowWork";
import Features from "./sections/features/Features";
import Comparison from "./sections/comparison/Comparison";
import PricingSection from "./sections/pricingSection/PricingSection";
import PricingAsks from "./../pricing/sections/PricingAsks/PricingAsks";

function Home({ onHandleLinksActiveClosed }) {
  return (
    <main className="home" onClick={onHandleLinksActiveClosed}>
      <Landing />
      <HowWork />
      <Features />
      <Comparison />
      <PricingSection />
      <PricingAsks />
    </main>
  );
}

export default Home;
