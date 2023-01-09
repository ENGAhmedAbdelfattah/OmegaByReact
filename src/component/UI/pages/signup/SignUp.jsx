import React from "react";
import AllSignUp from "./sections/AllSignUp";

function SignUp({ onHandleLinksActiveClosed }) {
  return (
    <main onClick={onHandleLinksActiveClosed}>
      <AllSignUp />
    </main>
  );
}

export default SignUp;
