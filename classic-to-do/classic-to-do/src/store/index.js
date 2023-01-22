import { configureStore } from "@reduxjs/toolkit";
import { calendarSlice } from "./calendarSlice";
import { formSlice } from "./formSlice";
import { chosenDaySlice } from "./chosenDaySlice";

const store = configureStore({
  reducer: {
    calendarReducer: calendarSlice.reducer,
    formReducer: formSlice.reducer,
    chosenDayReducer: chosenDaySlice.reducer,
  },
});
export default store;
