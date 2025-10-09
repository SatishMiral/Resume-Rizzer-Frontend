import { configureStore } from "@reduxjs/toolkit";
import resumeReducer from "./resumeSlice";

export const store = configureStore({
  reducer: {
    resume: resumeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // turn off warnings for File, Blob
    }),
});
