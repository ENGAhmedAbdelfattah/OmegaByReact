import { configureStore } from "@reduxjs/toolkit";
// import { logger } from "redux-logger";
import changLangReducer from "../features/changLang/changLangSlice";
import dataReducer from "../features/dataText/dataTextSlice";
import imageReducer from "../features/allImages/allImageSlice";
import allPathsReducer from "../features/allPaths/allPathsSlice";

const store = configureStore({
  reducer: {
    langDir: changLangReducer,
    dataText: dataReducer,
    allImages: imageReducer,
    allPaths: allPathsReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
