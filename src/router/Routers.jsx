// libraries
import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// component
import Home from "./../component/UI/pages/home/Home";
import TmPreload from "./../component/common/TmPreload";

// const LazyHome = lazy(() => {
//   return Promise.all([
//     import("./../component/UI/pages/home/Home"),
//     new Promise((resolve) => setTimeout(resolve, 0)),
//   ]).then(([moduleExports]) => {
//     document.body.style.overflow = "auto";
//     return moduleExports;
//   })
// });

const LazyLogin = lazy(() => {
  return Promise.all([
    import("./../component/UI/pages/login/Login"),
    new Promise((resolve) => setTimeout(resolve, 0)),
  ]).then(([moduleExports]) => {
    document.body.style.overflow = "auto";
    return moduleExports;
  });
});
const LazySignUp = lazy(() => {
  return Promise.all([
    import("./../component/UI/pages/signup/SignUp"),
    new Promise((resolve) => setTimeout(resolve, 0)),
  ]).then(([moduleExports]) => {
    document.body.style.overflow = "auto";
    return moduleExports;
  });
});
const LazyPricing = lazy(() => {
  return Promise.all([
    import("./../component/UI/pages/pricing/Pricing"),
    new Promise((resolve) => setTimeout(resolve, 0)),
  ]).then(([moduleExports]) => {
    document.body.style.overflow = "auto";
    return moduleExports;
  });
});
const LazyContactUs = lazy(() => {
  return Promise.all([
    import("./../component/UI/pages/contactUs/ContactUs"),
    new Promise((resolve) => setTimeout(resolve, 0)),
  ]).then(([moduleExports]) => {
    document.body.style.overflow = "auto";
    return moduleExports;
  });
});
const LazyAboutUs = lazy(() => {
  return Promise.all([
    import("./../component/UI/pages/aboutUs/AboutUs"),
    new Promise((resolve) => setTimeout(resolve, 0)),
  ]).then(([moduleExports]) => {
    document.body.style.overflow = "auto";
    return moduleExports;
  });
});
const LazyNotFound = lazy(() => {
  return Promise.all([
    import("./../component/UI/pages/notFound/NotFound"),
    new Promise((resolve) => setTimeout(resolve, 0)),
  ]).then(([moduleExports]) => {
    document.body.style.overflow = "auto";
    return moduleExports;
  });
});
function Router({ onHandleLinksActiveClosed }) {
  return (
    <Routes>
      {/* <Route
        path="home"
        element={
          <Suspense fallback={<TmPreload/>}>
            <LazyHome onHandleLinksActiveClosed= {onHandleLinksActiveClosed}/>
          </Suspense>
        }
      /> */}
      <Route
        path="/home"
        element={<Home onHandleLinksActiveClosed={onHandleLinksActiveClosed} />}
      />
      <Route path="/" element={<Navigate to="/Home" />} />
      <Route
        path="pricing"
        element={
          <Suspense fallback={<TmPreload />}>
            <LazyPricing
              onHandleLinksActiveClosed={onHandleLinksActiveClosed}
            />
          </Suspense>
        }
      />
      <Route
        path="contactus"
        element={
          <Suspense fallback={<TmPreload />}>
            <LazyContactUs
              onHandleLinksActiveClosed={onHandleLinksActiveClosed}
            />
          </Suspense>
        }
      />
      <Route
        path="aboutus"
        element={
          <Suspense fallback={<TmPreload />}>
            <LazyAboutUs
              onHandleLinksActiveClosed={onHandleLinksActiveClosed}
            />
          </Suspense>
        }
      />
      <Route
        path="login"
        element={
          <Suspense fallback={<TmPreload />}>
            <LazyLogin onHandleLinksActiveClosed={onHandleLinksActiveClosed} />
          </Suspense>
        }
      />
      <Route
        path="signup"
        element={
          <Suspense fallback={<TmPreload />}>
            <LazySignUp onHandleLinksActiveClosed={onHandleLinksActiveClosed} />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<TmPreload />}>
            <LazyNotFound
              onHandleLinksActiveClosed={onHandleLinksActiveClosed}
            />
          </Suspense>
        }
      />
    </Routes>
  );
}
export default Router;

// export default Router;

// libraries
// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// // component
// import Home from "./../component/UI/pages/home/Home";
// import Login from './../component/UI/pages/login/Login';
// import SignUp from './../component/UI/pages/signup/SignUp';
// import Pricing from './../component/UI/pages/pricing/Pricing';
// import ContactUs from './../component/UI/pages/contactUs/ContactUs';
// import AboutUs from './../component/UI/pages/aboutUs/AboutUs';
// import NotFound from "./../component/UI/pages/notFound/NotFound";

// function Router() {
//   return (
//     <Routes>
//       <Route path="/home" element={<Home />} />
//       <Route path="/" element={<Navigate to="/Home" />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/signup" element={<SignUp />} />
//       <Route path="/pricing" element={<Pricing />} />
//       <Route path="/contactUs" element={<ContactUs />} />
//       <Route path="/aboutUs" element={<AboutUs />} />
//       <Route path="/notFound" element={<NotFound />} />
//     </Routes>
//   );
// }
