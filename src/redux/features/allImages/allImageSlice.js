import { createSlice } from "@reduxjs/toolkit";
// import navBarImgs
import logoImg from "../../../assets/images/logo.svg";
// import footerImgs
//--logoImg imported in navBar before

/* import pagesImgs */
// home page
// landing
import landingBgImg from "../../../assets/images/landingBgImg.svg";
// howWork
import stepBg from "../../../assets/images/stepBg.svg";
import step1 from "../../../assets/images/step1.svg";
import step2 from "../../../assets/images/step2.svg";
import step3 from "../../../assets/images/step3.svg";
import imgAfter1 from "../../../assets/images/imgAfter1.png";
import imgAfter2 from "../../../assets/images/imgAfter2.png";
import imgAfter3 from "../../../assets/images/imgAfter3.png";
// features
import featuresCenterImg from "../../../assets/images/featuresCenterImg.png";
import feature1 from "../../../assets/images/feature1.svg";
import feature2 from "../../../assets/images/feature2.svg";
import feature3 from "../../../assets/images/feature3.svg";
import feature4 from "../../../assets/images/feature4.svg";
import feature5 from "../../../assets/images/feature5.svg";
import feature6 from "../../../assets/images/feature6.svg";
import feature7 from "../../../assets/images/feature7.svg";
import featureAnim1 from "../../../assets/images/featureAnim1.png";
import featureAnim2 from "../../../assets/images/featureAnim2.png";
import featureAnim3 from "../../../assets/images/featureAnim3.png";

// imgAfter1;
// aboutUs
import aboutUs1 from "../../../assets/images/aboutUs1.png";
import aboutUs2 from "../../../assets/images/aboutUs2.svg";
import aboutUs3 from "../../../assets/images/aboutUs3.svg";
// import contactUsImgs
import formContactImg from "../../../assets/images/formContactImg.png";
import contactImg1 from "../../../assets/images/contactImg1.svg";
import contactImg2 from "../../../assets/images/contactImg2.svg";
import contactImg3 from "../../../assets/images/contactImg3.svg";
import contactIcon4 from "../../../assets/images/contactIcon4.svg";
// pricing page
import pricingPage1 from "../../../assets/images/pricingPage1.png";

// import signUpImgs and loginImgs

// allImages
const initialState = {
  navBarImgs: { logoImg },
  footerImgs: {},
  pagesImgs: {
    homeImgs: {
      landingImgs: { landingBgImg },
      howWorkImgs: {
        step1,
        step2,
        step3,
        stepBg,
        imgAfters: {
          imgAfter1,
          imgAfter2,
          imgAfter3,
        },
      },
      featuresImgs: {
        featuresCenterImg,
        feature1,
        feature2,
        feature3,
        feature4,
        feature5,
        feature6,
        feature7,
        featureAnim1,
        featureAnim2,
        featureAnim3,
      },
    },
    aboutUsImgs: {
      aboutUs1,
      aboutUs2,
      aboutUs3,
    },
    contactUsImgs: {
      formContactImg,
      contactImg1,
      contactImg2,
      contactImg3,
      contactIcon4,
    },
    pricingImgs: {
      pricingPage1,
    },
    loginImgs: {},
    signUpImgs: {},
  },
};

const allImageSlice = createSlice({
  name: "allImages",
  initialState,
  reducers: {},
});

export const { getImages } = allImageSlice.actions;

export default allImageSlice.reducer;
