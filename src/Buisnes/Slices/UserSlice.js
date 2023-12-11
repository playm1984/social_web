import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: {
    avatar: "Avatar2",
    name: "Test",
    email: "test@example.com",
    login: "qwerty",
    password: "12345",
  },
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    changeUserProfile: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const { changeUserProfile } = userSlice.actions;

export default userSlice.reducer;
