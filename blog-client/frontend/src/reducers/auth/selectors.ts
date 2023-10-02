import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export const selectIsAuthorized = createSelector(
  (state: RootState) => state.Auth,
  ({ isAuthorized }) => isAuthorized
);

export const selectToken = createSelector(
  (state: RootState) => state.Auth,
  ({ token }) => token
);
