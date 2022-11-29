import { createSlice } from "@reduxjs/toolkit";
import { generateCalendar } from "../utils";

const calendar = generateCalendar(2022)

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: calendar,
  reducers: {

  }
})
export const calendarActions = calendarSlice.actions