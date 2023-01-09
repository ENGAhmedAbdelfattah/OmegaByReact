import React from "react";
import Card from "./units/Card";
import { connect } from "react-redux";

function Features({ features, featuresImgs }) {
  return (
    <section className="features">
      <div className="container">
        <div className={`features-top`}>
          <h2 className="features-header">
            <a href="#features-block">{features.header}</a>
          </h2>
          <p className="features-paragraph">{features.paragraph}</p>
        </div>
        <div className="features-block" id="features-block">
          <div className="features-block-top">
            <div className="features-left">
              <Card
                className={"card1"}
                image={featuresImgs.feature1}
                header={features.cards.left[0].header}
                paragraph={features.cards.left[0].paragraph}
              />
              <Card
                className={"card2"}
                image={featuresImgs.feature2}
                header={features.cards.left[1].header}
                paragraph={features.cards.left[1].paragraph}
              />
            </div>
            <div className="hand-center-img ">
              <img
                src={featuresImgs.featuresCenterImg}
                alt="Women president our features"
              />
              <img
                src={featuresImgs.featureAnim1}
                alt=""
                className="feature-anim feature-anim1"
              />
              <img
                src={featuresImgs.featureAnim2}
                alt=""
                className="feature-anim feature-anim2"
              />
              <img
                src={featuresImgs.featureAnim3}
                alt=""
                className="feature-anim feature-anim3"
              />
            </div>
            <div className="features-right">
              <Card
                className={"card3"}
                image={featuresImgs.feature3}
                header={features.cards.right[0].header}
                paragraph={features.cards.right[0].paragraph}
              />
              <Card
                className={"card4"}
                image={featuresImgs.feature4}
                header={features.cards.right[1].header}
                paragraph={features.cards.right[1].paragraph}
              />
            </div>
          </div>
          <div className="features-block-bottom">
            {features.cards.bottom.map((el, inx) => (
              <Card
                key={inx + el.id}
                className={`card card${5 + inx}`}
                image={featuresImgs[`feature${5 + inx}`]}
                header={el.header}
                paragraph={el.paragraph}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    features: state.dataText.dataJson.home.features,
    featuresImgs: state.allImages.pagesImgs.homeImgs.featuresImgs,
  };
};

export default connect(mapStateToProps)(Features);
