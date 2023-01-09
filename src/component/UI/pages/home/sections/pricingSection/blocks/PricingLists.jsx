import React from "react";
import { connect } from "react-redux";
import PricingItem from "./units/PricingItem";

function PricingLists({ pricing }) {
  return (
    <div className="pricing-block-box">
      <div className="pricing-block-bottom">
        {pricing.items.map((el, inx) => (
          <PricingItem
            key={inx + el.id}
            className={el.id}
            header={el.header}
            advantage={el.advantage}
            isActive={el.isActive}
            priceDefault={el.priceDefault}
            time={pricing.time}
            btnChoose={pricing.btnChoose}
            btnContact={pricing.btnContact}
            priceAfterDiscount={el.priceAfterDiscount}
            coins={pricing.coins}
          />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    pricing: state.dataText.dataJson.home.pricing,
    lang: state.langDir.lang,
  };
};

export default connect(mapStateToProps)(PricingLists);
