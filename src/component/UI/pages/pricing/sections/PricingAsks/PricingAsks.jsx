import React from "react";
import { connect } from "react-redux";
import PriceUnit from "./units/PriceUnit";

// <PriceUnit/>
function PricingAsks({ pricingAsks }) {
  return (
    <section className="pricing-asks">
      <div className="container">
        <div className={`pricing-asks-top`}>
          <h2>
            <a href="#pricing-asks-block">{pricingAsks.header}</a>
          </h2>
          <p id="pricing-asks-block">{pricingAsks.paragraph}</p>
        </div>
        <div className="pricing-asks-bottom">
          {pricingAsks.items.map((el, inx) => (
            <PriceUnit
              key={inx + el.id}
              className={`${"unit" + (inx + 1)}`}
              ask={el.ask}
              answer={el.answer}
              index={inx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    pricingAsks: state.dataText.dataJson.pricingPage.asks,
  };
};

export default connect(mapStateToProps)(PricingAsks);
