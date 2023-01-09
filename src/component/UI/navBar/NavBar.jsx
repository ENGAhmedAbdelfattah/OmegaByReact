import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { changeLang } from "../../../redux/features/changLang/changLangSlice";
import { changeData } from "../../../redux/features/dataText/dataTextSlice";
import usePageMeta from "./../../../hooks/usePageMeta";

function NavBar({
  meta,
  lang,
  dir,
  changeLang,
  changeData,
  navBar,
  navBarImgs,
  navbarPaths,
  isDisplay,
  onHandleLinksToggle,
  onHandleLinksActiveClosed,
}) {
  usePageMeta(meta.title, meta.description);

  const handleBtnLang = () => {
    const language = lang === "en" ? "ar" : "en";
    const direction = dir === "ltr" ? "rtl" : "ltr";
    changeLang(language, direction);
    handleLang(language, direction);
    changeData(language);
    localStorage.setItem("language", language);
    localStorage.setItem("direction", direction);
  };
  const handleLang = (language, direction) => {
    if (language === "en" && direction === "ltr") {
      document.getElementsByTagName("html")[0].setAttribute("lang", "en");
      document.getElementsByTagName("html")[0].setAttribute("dir", "ltr");
    } else {
      document.getElementsByTagName("html")[0].setAttribute("lang", "ar");
      document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
    }
  };
  useEffect(() => {
    const language = localStorage.getItem("language");
    const direction = localStorage.getItem("direction");
    if (language && direction) {
      changeLang(language, direction);
      handleLang(language, direction);
      changeData(language);
    }
  }, [changeData, changeLang]);

  const navigate = useNavigate();
  // methods
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSignGo = (path) => {
    navigate(`/${path}`);
  };

  return (
    <>
      <nav className={`nav-links ${offset >= 500 ? "scroll" : ""}`}>
        <div className="container">
          <div className="nav-box">
            <div className="logo-box">
              <div className="logo-img" onClick={() => handleSignGo("home")}>
                <img src={navBarImgs.logoImg} alt="" />
              </div>
              <i
                className="fa-solid fa-bars fa-2x"
                onClick={() => onHandleLinksToggle()}
              ></i>
            </div>

            <div className={`list-box ${isDisplay ? "active" : ""}`}>
              <ul className="list-ul">
                {navBar.navList.map((el, inx) => (
                  <li className="list-item" key={inx + el}>
                    <NavLink
                      className="list-item"
                      to={Object.values(navbarPaths)[inx]}
                      onClick={() => onHandleLinksActiveClosed()}
                    >
                      {el}
                    </NavLink>
                  </li>
                ))}
                <button className="change-lang mobile" onClick={handleBtnLang}>
                  {navBar.lang}
                </button>
              </ul>
            </div>

            <div className="sign-box">
              <button className="change-lang desktop" onClick={handleBtnLang}>
                {navBar.lang}
              </button>
              {/* <button
                type="button"
                className="login"
                onClick={() => handleSignGo("login")}
              >
                {navBar.login}
              </button>
              <button
                type="button"
                className="sign-out"
                onClick={() => handleSignGo("signup")}
              >
                {navBar.signUp}
              </button> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    lang: state.langDir.lang,
    dir: state.langDir.dir,
    navBar: state.dataText.dataJson.navBar,
    navBarImgs: state.allImages.navBarImgs,
    navbarPaths: state.allPaths.navbarPaths,
    meta: state.dataText.dataJson.meta,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeLang: (language, direction) =>
      dispatch(changeLang({ payloadLang: language, payloadDir: direction })),
    changeData: (language) => dispatch(changeData(language)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
