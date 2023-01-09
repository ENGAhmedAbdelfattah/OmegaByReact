import React from "react";
import { connect } from "react-redux";

function LoginSignUp({ signUpPage, signUpImgs }) {
  return (
    <section className="login">
    </section>
  );
}
const mapStateToProps = (state) => {
  return {
    // signUpPage: state.dataText.dataJson.signUpPage,
    // signUpImgs: state.allImages.pagesImgs.signUpImgs,

  };
};

export default connect(mapStateToProps)(LoginSignUp);
