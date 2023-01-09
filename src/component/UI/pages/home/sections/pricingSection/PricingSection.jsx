import React from "react";
import PricingLists from "./blocks/PricingLists";
import { connect } from "react-redux";

function PricingSection({ pricing }) {
  return (
    <section className="pricing">
      <div className="container">
        <div className={`pricing-top`}>
          <h2 className="pricing-header">
            <a href="#pricing-block">{pricing.header}</a>
          </h2>
          <p className="pricing-paragraph" id="pricing-block">
            {pricing.paragraph}
          </p>
        </div>
        <div className="pricing-block">
          <PricingLists />
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    pricing: state.dataText.dataJson.home.pricing,
  };
};

export default connect(mapStateToProps)(PricingSection);
