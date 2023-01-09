import React from "react";

function Step({ className, imageInside, imgAfter, header, paragraph }) {

  return (
    <div className={`Step-item ${className}`}>
      <div className="hand-img">
        <div className="image-in">
          <img src={imageInside} alt="" />
        </div>
      </div>
      <div className="text-box">
        <h4>{header}</h4>
        <p>{paragraph}</p>
        <div className="img-after-hand">
          <img src={imgAfter} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Step;
