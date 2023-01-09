import React from "react";
import { connect } from "react-redux";
import Step from "./units/Step";

function HowWork({ howWork, howWorkImgs }) {
  return (
    <section className="how-work">
      <div className="container">
        <div className={`how-work-top`} id="how-work-block">
          <h2 className="how-work-header">
            <a href="#how-work-block">{howWork.header}</a>
          </h2>
          <p className="how-work-paragraph">{howWork.paragraph}</p>
        </div>
        <div className="steps-wrapped">
          <div className="steps-container">
            {howWork.steps.map((el, inx) => (
              <Step
                key={inx + el.id}
                className={`step${inx + 1}`}
                imageInside={howWorkImgs[`step${inx + 1}`]}
                imgAfter={howWorkImgs.imgAfters[`imgAfter${inx + 1}`]}
                header={el.header}
                paragraph={el.paragraph}
              />
            ))}
          </div>
          <div className="hand-img-line">
            <img src={howWorkImgs.stepBg} alt="" />
          </div>
        </div>
        <span className="note">{howWork.note}</span>
      </div>
      <div className="circleBg"></div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    howWork: state.dataText.dataJson.home.howWork,
    howWorkImgs: state.allImages.pagesImgs.homeImgs.howWorkImgs,
  };
};

export default connect(mapStateToProps)(HowWork);
