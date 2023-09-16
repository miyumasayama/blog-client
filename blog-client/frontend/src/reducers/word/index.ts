import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type WordState = {
  page: number;
};

const initialState: WordState = {
  page: 1,
};

const WordSlice = createSlice({
  name: "Word-Reducer",
  initialState,
  reducers: {
    reset: () => initialState,
    setWordPage: (state: WordState, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const { reset, setWordPage } = WordSlice.actions;

export const WordReducer = WordSlice.reducer;
