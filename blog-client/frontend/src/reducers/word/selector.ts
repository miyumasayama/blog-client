import { createSelector } from "@reduxjs/toolkit";
import { selectAppState } from "../../store";

export const selectWord = createSelector(selectAppState, (state) => state.Word);
