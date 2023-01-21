import { configureStore } from "@reduxjs/toolkit";
import { taskSlice } from "./taskSlice";
import { calendarSlice } from "./calendarSlice";
import { formSlice } from "./formSlice";
import { chosenDaySlice } from "./chosenDaySlice";

const store = configureStore({
  reducer: {
    taskReducer: taskSlice.reducer,
    calendarReducer: calendarSlice.reducer,
    formReducer: formSlice.reducer,
    chosenDayReducer: chosenDaySlice.reducer,
  },
});
export default store;
