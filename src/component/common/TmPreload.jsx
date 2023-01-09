import React from "react";
import { connect } from 'react-redux';

function TmPreload({ navBarImgs }) {
  document.body.style.overflow = "hidden";
  return (
    <div className="tm-preloader" style={{ overFlow: "hidden" }}>
      <img src={navBarImgs.logoImg} alt="logo" />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    navBarImgs: state.allImages.navBarImgs,
  };
};
export default connect(mapStateToProps)(TmPreload);