import { configureStore } from "@reduxjs/toolkit";

import PostSlice from "./Slices/PostSlice";

export const store = configureStore({
  reducer: {
    PostSlice,
  },
});
