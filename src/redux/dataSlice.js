import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data = [...state.data, action.payload];
    },
  },
});
export const { addData } = dataSlice.actions;

// Export reducer
export default dataSlice.reducer;
