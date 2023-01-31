import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  checkedList: {
    cuisines: [],
    excludes: []
  },
  optionsQuery: ""
}

export const checkedOptionsSlice = createSlice({
  name: "checkedOptions",
  initialState,
  reducers: {
    addChecked: (state, action) => {
      let temp = state.checkedList[action.payload.category];
      temp.push(action.payload.checked);
      state.checkedList[action.payload.category] = temp;
    },
    removeChecked: (state, action) => {
      state.checkedList[action.payload.category] = state.checkedList[action.payload.category]
        .filter((checked) => checked !== action.payload.checked)
    },
    setOptionsQuery: (state, action) => {
      state.optionsQuery = action.payload;
    },
    resetChecked: (state) => {
      state.checkedList.cuisines = [];
      state.checkedList.excludes = [];
    }
  }
});

export const { addChecked, removeChecked, setOptionsQuery, resetChecked } = checkedOptionsSlice.actions

export default checkedOptionsSlice.reducer