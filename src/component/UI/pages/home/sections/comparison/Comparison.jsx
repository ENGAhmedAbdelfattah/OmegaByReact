import React from "react";
import { connect } from "react-redux";
import Row from "./units/Row";

function Comparison({ comparison }) {
  // clean up code
  return (
    <section className="comparison">
      <div className="container">
        <div className={`comparison-top`}>
          <h2 className="comparison-header">
            <a href="#comparison-block">{comparison.header}</a>
          </h2>
          <p className="comparison-paragraph" id="comparison-block">
            {comparison.paragraph}
          </p>
        </div>
        <div className="comparison-bottom">
          <div className="table-headers">
            <div className="t-head first-header">
              {comparison.columns.firstHeader}
            </div>
            <div className="t-head sec-header">
              {comparison.columns.secHeader}
            </div>
          </div>
          <div className="table-rows">
            {comparison.rows.map((el, inx) => (
              <Row
                key={inx + el.id}
                className={`row${inx + 1}`}
                header={el.header}
                first={el.first}
                sec={el.sec}
                num={el.num}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="container">
        {comparison.notes.map((el, inx) => (
          <span className="note" key={inx}>
            {el}
          </span>
        ))}
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    comparison: state.dataText.dataJson.home.comparison,
  };
};

export default connect(mapStateToProps)(Comparison);
