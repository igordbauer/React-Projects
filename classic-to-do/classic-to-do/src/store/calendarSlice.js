import { createSlice } from "@reduxjs/toolkit";
import { generateCalendar } from "../utils";
import { weekIndexOfEnum, monthIndexEnum } from "../utils/enums";

const calendar = generateCalendar(new Date().getFullYear());

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: calendar,
  reducers: {
    taskHandler(state, actions) {
      const month = actions.payload.month;
      const day = actions.payload.day;
      const title = actions.payload.title;
      const description = actions.payload.description;
      console.log(actions.payload);
      state[month].days[day - 1].taskList.inProgress.push({
        id: title,
        title: title,
        description: description,
        data: "aqqqq",
      });
    },
  },
});
export const calendarActions = calendarSlice.actions;
