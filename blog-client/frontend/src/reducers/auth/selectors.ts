import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export const selectToken = createSelector(
  (state: RootState) => state.Auth,
  ({ token }) => token
);
