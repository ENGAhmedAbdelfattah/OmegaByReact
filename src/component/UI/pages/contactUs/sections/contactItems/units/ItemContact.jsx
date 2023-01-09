import React from "react";
import { connect } from "react-redux";

function ItemContact({ image, header, address, className }) {
  return (
    <div className={`item-contact ${className}`}>
      <div className="item-image">
        <img src={image} alt="" />
      </div>
      <div className="item-content">
        <h4 className="item-header">{header}</h4>
        <p className="item-contact-address" dir="ltr">{address}</p>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    lang: state.langDir.lang,
  };
};
export default connect(mapStateToProps)(ItemContact);
