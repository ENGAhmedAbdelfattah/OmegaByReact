import React from "react";
import AllLogin from "./sections/AllLogin";

function Login({ onHandleLinksActiveClosed }) {
  return (
    <main onClick={onHandleLinksActiveClosed}>
      <AllLogin />
    </main>
  );
}
export default Login;
