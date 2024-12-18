import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "themeSlice",
  initialState: true, // true = dark mode
  reducers: {
    toggleTheme: (state) => !state, // toggle between true/false
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
