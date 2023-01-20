import { createSlice } from "@reduxjs/toolkit";
import { generateCalendar } from "../utils";

const calendar = generateCalendar(new Date().getFullYear());

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: calendar,
  reducers: {},
});
export const calendarActions = calendarSlice.actions;
