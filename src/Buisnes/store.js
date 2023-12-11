import { configureStore } from "@reduxjs/toolkit";

import PostSlice from "./Slices/PostSlice";
import UserSlice from "./Slices/UserSlice";

export const store = configureStore({
  reducer: {
    PostSlice,
    UserSlice,
  },
});
