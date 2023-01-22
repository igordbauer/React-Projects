import { createSlice } from "@reduxjs/toolkit";
import { generateCalendar } from "../utils";

const calendar = generateCalendar(new Date().getFullYear());

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: calendar,
  reducers: {
    taskHandler(state, actions) {
      const id = actions.payload.id;
      const month = actions.payload.month;
      const day = actions.payload.day;
      const title = actions.payload.title;
      const description = actions.payload.description;
      const date = actions.payload.date;

      state[month].days[day - 1].taskList.inProgress.push({
        id: id,
        title: title,
        description: description,
        data: date,
      });
    },
  },
});
export const calendarActions = calendarSlice.actions;
