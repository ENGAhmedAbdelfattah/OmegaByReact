import React from "react";
import { connect } from "react-redux";

function ContactLanding({ contactLanding, contactUsImgs }) {
  return (
    <section className="contactsLanding">
      <div className="container">
        <h2 className="landing-header">{contactLanding.header}</h2>
        {/* <p className="landing-paragraph">{contactLanding.paragraph}</p> */}
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    contactLanding: state.dataText.dataJson.contactsPage.contactLanding,
    contactUsImgs: state.allImages.pagesImgs.contactUsImgs,
  };
};

export default connect(mapStateToProps)(ContactLanding);
