import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { changeData } from "../../../redux/features/dataText/dataTextSlice";
import { changeLang } from "../../../redux/features/changLang/changLangSlice";

function Footer({
  footer,
  navBarImgs,
  footerPaths,
  onHandleLinksActiveClosed,
}) {
  const theDate = new Date();
  const year = theDate.getFullYear();

  return (
    <footer className="footer" onClick={onHandleLinksActiveClosed}>
      <div className="container">
        <div className="logo-footer">
          <div className="handle-image">
            <img src={navBarImgs.logoImg} alt="Omega logo" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="links-footer">
          <ul className="list-ul">
            {footer.footerList.map((el, inx) => (
              <li className="list-item" key={inx + el}>
                <NavLink
                  className="list-item"
                  to={Object.values(footerPaths)[inx]}
                >
                  {el}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="copy-right-footer">
          {"© " + year + " "}
          {footer.copyRight}
        </div>
      </div>
    </footer>
  );
}

const mapStateToProps = (state) => {
  return {
    // lang: state.langDir.lang,
    // dir: state.langDir.dir,
    // navBar: state.dataText.dataJson.navBar,
    footer: state.dataText.dataJson.footer,
    navBarImgs: state.allImages.navBarImgs,
    footerPaths: state.allPaths.footerPaths,
  };
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     changeLang: (language, direction) =>
//       dispatch(changeLang({ payloadLang: language, payloadDir: direction })),
//     changeData: (language) => dispatch(changeData(language)),
//   };
// };
export default connect(mapStateToProps)(Footer);
