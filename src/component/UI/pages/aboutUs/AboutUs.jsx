import React from "react";
import { connect } from "react-redux";

function AboutUs({
  aboutUs,
  aboutUsImgs,
  onHandleLinksActiveClosed,
}) {
  return (
    <main className="aboutUs" onClick={onHandleLinksActiveClosed}>
      <div className="container">
        <div className="aboutUs-top">
          <h2>{aboutUs.header}</h2>
          <p>{aboutUs.paragraph}</p>
        </div>
        <div className="aboutUs-bottom">
          <div className="aboutUs-bottom-left">
            <div className="cart-top">
              <h3>{aboutUs.card.header}</h3>
              <p>{aboutUs.card.paragraph}</p>
            </div>
            <div className="cart-bottom">
              <div className="item item1">
                <div className="hand-img">
                  <img src={aboutUsImgs.aboutUs2} alt="" />
                </div>
                <div className="item-text">
                  <h3>{aboutUs.card.items.item1.header}</h3>
                  <p>{aboutUs.card.items.item1.paragraph}</p>
                </div>
              </div>
              <div className="item item2">
                <div className="hand-img">
                  <img src={aboutUsImgs.aboutUs3} alt="" />
                </div>
                <div className="item-text">
                  <h3>{aboutUs.card.items.item2.header}</h3>
                  <p>{aboutUs.card.items.item2.paragraph}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="aboutUs-bottom-right">
            <div className="hand-image">
              <img
                src={aboutUsImgs.aboutUs1}
                alt="persons talking and work on laptops"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    aboutUs: state.dataText.dataJson.aboutUs,
    aboutUsImgs: state.allImages.pagesImgs.aboutUsImgs,
  };
};

export default connect(mapStateToProps)(AboutUs);
