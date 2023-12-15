import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: {
    avatar: "Avatar2",
    name: "Test",
    email: "test@example.com",
    login: "qwerty",
    password: "12345",
    id: "01",
  },
  usersDB: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    changeUserProfile: (state, action) => {
      state.profile = action.payload;
    },
    getUsersFromLS: (state, action) => {
      state.usersDB = action.payload;
    },
    searchUsers: (state, action) => {
      state.profile = state.usersDB.filter(
        (user) => user.id === action.payload
      )[0];
    },
  },
});

export const { changeUserProfile, getUsersFromLS, searchUsers } =
  userSlice.actions;

export default userSlice.reducer;
