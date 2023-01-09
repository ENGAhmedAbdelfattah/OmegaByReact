import React from "react";
import { connect } from "react-redux";

function AllLogin({ loginPage, loginImgs }) {
  // state
  return (
    <section className="login">
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    // loginPage: state.dataText.dataJson.loginPage,
    // loginImgs: state.allImages.pagesImgs.loginImgs,

  };
};

export default connect(mapStateToProps)(AllLogin);
