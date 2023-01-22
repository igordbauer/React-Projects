import { createSlice } from "@reduxjs/toolkit";
import { generateCalendar } from "../utils";

const calendar = generateCalendar(new Date().getFullYear());

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: calendar,
  reducers: {
    taskHandler(state, actions) {
      const { id, month, day, title, description, date } = actions.payload;
      state[month].days[day - 1].taskList.inProgress.push({
        id,
        title,
        description,
        date,
      });
    },
    deleteTask(state, actions) {
      const { id, month, day } = actions.payload;
      state[month].days[day - 1].taskList.inProgress = state[month].days[
        day - 1
      ].taskList.inProgress.filter((e) => e.id !== id);
    },
  },
});
export const calendarActions = calendarSlice.actions;
