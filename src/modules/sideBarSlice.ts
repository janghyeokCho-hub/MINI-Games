import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice = createSlice({
  name: "sideBar",
  initialState: { isSideBar: true },
  reducers: {
    setSideBar: (state, _) => {
      state.isSideBar = !state.isSideBar;
    },
  },
});

export const { setSideBar } = sideBarSlice.actions;
export default sideBarSlice;
