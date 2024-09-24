import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: JSON.parse(localStorage.getItem("userData")) || null,
};

const authSlice = createSlice({
  name: "AuthSlice",
  initialState,
  reducers: {
    addUserData: (state, action) => {
      state.userData = action.payload;
      localStorage.setItem("userData", JSON.stringify(action.payload));
    },
    removeUserData: (state) => {
      state.userData = null;
      localStorage.removeItem("userData");
    },
  },
});

export const { addUserData, removeUserData } = authSlice.actions;
export default authSlice.reducer;
