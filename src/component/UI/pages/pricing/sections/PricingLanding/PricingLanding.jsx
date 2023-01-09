import React from "react";
import { connect } from "react-redux";

function PricingLanding({ pricingLanding, pricingImgs }) {
  return (
    <section className="pricing-landing">
      <div className="container">
        <div className="pricing-left">
          <h2>{pricingLanding.header}</h2>
          <p>{pricingLanding.paragraph}</p>
        </div>
        <div className="pricing-right">
          <div className="hand-img">
            <img
              src={pricingImgs.pricingPage1}
              alt="man carry laptop and look for you"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    pricingLanding: state.dataText.dataJson.pricingPage.landing,
    pricingImgs: state.allImages.pagesImgs.pricingImgs,
  };
};

export default connect(mapStateToProps)(PricingLanding);
