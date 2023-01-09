import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";

function Card({ className, image, header, paragraph, lang }) {
  const defaultSectionTopOffset = 920;
  // const defaultSectionTopOffset =
  //   lang === "en" ? 920 : lang === "ar" ? 920 : 1020;
  const [sectionTopOffset, setSectionTopOffset] = useState(
    defaultSectionTopOffset
  );
  const [offset, setOffset] = useState(0);
  const [widthPage, setWidthPage] = useState(0);

  const SectionTop = useRef();
  useEffect(() => {
    const onScroll = () => {
      setOffset(window.pageYOffset);
      setWidthPage(window.innerWidth);
      setTimeout(() => {}, 0);
      setTimeout(() => {
        if (lang === "en") {
          if (offset > sectionTopOffset) {
            SectionTop.current.classList.add("show-cards");
          }
        } else if (lang === "ar") {
          if (offset > sectionTopOffset) {
            SectionTop.current.classList.add("show-cards-ar");
          }
        }
      }, 1);
    };
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset, sectionTopOffset, lang]);

  useEffect(() => {
    if (widthPage < 768) {
      setSectionTopOffset(defaultSectionTopOffset + 310);
    }
    if (widthPage > 768 && widthPage < 992) {
      setSectionTopOffset(defaultSectionTopOffset - 40);
    }
    if (widthPage > 992) {
      setSectionTopOffset(defaultSectionTopOffset - 100);
    }
  }, [widthPage]);

  return (
    <div ref={SectionTop} className={`card ${className}`}>
      <div className="hand-img">
        <div className="image-in">
          <img src={image} alt="" />
        </div>
      </div>
      <h4>{header}</h4>
      {lang === "en" && paragraph.includes("CDNs") ? (
        <p>
          {paragraph.split("CDNs")[0]}
          <a href="https://en.wikipedia.org/wiki/Content_delivery_network">
            CDNs
          </a>
          {paragraph.split("CDNs")[1]}
        </p>
      ) : lang === "ar" && paragraph.includes("CDNs") ? (
        <p>
          {paragraph.split("CDNs")[0]}
          <a href="https://en.wikipedia.org/wiki/Content_delivery_network">
            CDNs
          </a>
          {paragraph.split("CDNs")[1]}
        </p>
      ) : (
        <p>{paragraph}</p>
      )}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    lang: state.langDir.lang,
  };
};
export default connect(mapStateToProps)(Card);
