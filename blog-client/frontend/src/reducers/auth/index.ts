import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StorageHelper } from "../../utils/storageHelper";

type AuthState = {
  token?: string;
  isAuthorized: boolean;
};

const storageHelper = new StorageHelper();

const initialState: AuthState = {
  token: storageHelper.get("token"),
  isAuthorized: storageHelper.has("token"),
};

const authSlice = createSlice({
  name: "demo-Reducer",
  initialState,
  reducers: {
    setToken: (state: AuthState, action: PayloadAction<AuthState["token"]>) => {
      if (!action.payload) return;
      storageHelper.set("token", action.payload.toString());
      state.token = action.payload;
      state.isAuthorized = true;
    },
    removeToken: (state: AuthState) => {
      storageHelper.remove("token");
      state.token = undefined;
      state.isAuthorized = false;
    },
  },
});

export const { setToken } = authSlice.actions;
export const AuthReducer = authSlice.reducer;
