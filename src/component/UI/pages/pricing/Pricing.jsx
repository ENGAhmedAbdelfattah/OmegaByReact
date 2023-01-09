import React from "react";
import PricingLanding from "./sections/PricingLanding/PricingLanding";
import PricingBlock from "./sections/PricingBlock/PricingBlock";
import PricingAsks from "./sections/PricingAsks/PricingAsks";

function Pricing({onHandleLinksActiveClosed }) {
  return (
    <main className="pricing-page" onClick={onHandleLinksActiveClosed}>
      <PricingLanding />
      <PricingBlock />
      {/* <PricingAsks /> */}
    </main>
  );
}

export default Pricing;
