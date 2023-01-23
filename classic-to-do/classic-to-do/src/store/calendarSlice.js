import { createSlice } from "@reduxjs/toolkit";
import { generateCalendar } from "../utils";

const calendar = generateCalendar(new Date().getFullYear());

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: calendar,
  reducers: {
    taskHandler(state, actions) {
      const { id, month, day, title, description, date, type } =
        actions.payload;
      state[month].days[day - 1].taskList[`${type}`].push({
        id,
        title,
        description,
        date,
      });
    },
    deleteTask(state, actions) {
      const { id, month, day, type } = actions.payload;
      state[month].days[day - 1].taskList[`${type}`] = state[month].days[
        day - 1
      ].taskList.inProgress.filter((e) => e.id !== id);
    },
    finishTask(state, actions) {
      const { id, month, day, title, description, date } = actions.payload;

      state[month].days[day - 1].taskList.finished.push({
        id,
        title,
        description,
        date,
      });
    },
  },
});
export const calendarActions = calendarSlice.actions;
