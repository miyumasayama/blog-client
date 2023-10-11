import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Tokens } from "../../types/auth";
import { StorageHelper } from "../../utils/storageHelper";

const storageHelper = new StorageHelper();

const initialState: Tokens = {
  token: storageHelper.get("token"),
};

const authSlice = createSlice({
  name: "demo-Reducer",
  initialState,
  reducers: {
    setToken: (state: Tokens, action: PayloadAction<Tokens["token"]>) => {
      if (!action.payload) return;
      storageHelper.set("token", action.payload.toString());
      state.token = action.payload;
    },
    removeToken: (state: Tokens) => {
      storageHelper.remove("token");
      state.token = undefined;
    },
  },
});

export const { setToken } = authSlice.actions;
export const AuthReducer = authSlice.reducer;
