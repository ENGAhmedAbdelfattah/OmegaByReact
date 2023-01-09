import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  navbarPaths: {
    home: "/home",
    pricing: "/pricing",
    contactUs: "/contactus",
  },
  footerPaths: {
    termsOfService: "/termsofservice",
    pricing: "/pricing",
    contactUs: "/contactus",
  },
};

const allPathsSlice = createSlice({
  name: "allPaths",
  initialState,
  reducers: {},
});

export const { allPaths } = allPathsSlice.actions;

export default allPathsSlice.reducer;

// aboutUs: "/aboutus",
