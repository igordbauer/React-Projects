import { createSlice } from "@reduxjs/toolkit";
import { monthIndexEnum, weekEnum } from "../utils/enums";
const initialState = {
  month: monthIndexEnum[new Date().getMonth()],
  day: new Date().getDate(),
  weekDay: weekEnum[new Date().getDay()],
};

export const chosenDaySlice = createSlice({
  name: "chosenDay",
  initialState: initialState,
  reducers: {
    setDay(state, actions) {
      state.day = actions.payload.day;
      state.month = actions.payload.month;
      state.weekDay = actions.payload.weekDay;
    },
  },
});
export const chosenDayActions = chosenDaySlice.actions;
