import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

function Landing({ landing, landingImgs, lang }) {
  const [landingNewHeader, setLandingNewHeader] = useState("");
  useEffect(() => {
    let arrHeader = landing.header.split("");
    let headerAsClone = [];
    let num = 0;
    const numSet = setInterval(() => {
      if (num < arrHeader.length) {
        headerAsClone.push(arrHeader[num]);
        setLandingNewHeader(headerAsClone.join(""));
        num++;
      }
    }, 63);
    return () => {
      clearInterval(numSet);
    };
  }, [landing]);

  return (
    <section className="homeLanding">
      <div className="container-wrapped">
        <div className="container">
          <h1 className="landing-header">
            <span>{landing.headerSpan + " "}</span>
            {landingNewHeader}
          </h1>
          <div className="landing-btns">
            <button type="button" className="btn-start">
              {landing.btnStart}
            </button>
            <a className="btn-docs" href="https://docs.omegastream.net/">
              {landing.btnDocs}
              {lang === "en" ? (
                <i className="fas fa-angle-left"></i>
              ) : lang === "ar" ? (
                <i className="fas fa-angle-right"></i>
              ) : (
                ""
              )}
            </a>
          </div>
        </div>
        <div className="hand-img one">
          <img src={landingImgs.landingBgImg} alt="" />
        </div>
        <div className="hand-img two">
          <img src={landingImgs.landingBgImg} alt="" />
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    landing: state.dataText.dataJson.home.landing,
    landingImgs: state.allImages.pagesImgs.homeImgs.landingImgs,
    lang: state.langDir.lang,
  };
};

export default connect(mapStateToProps)(Landing);
