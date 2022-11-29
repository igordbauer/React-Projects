import { configureStore } from '@reduxjs/toolkit';
import { taskSlice } from './taskSlice';
import { calendarSlice } from './calendarSlice';

const store = configureStore({
  reducer: {
    taskReducer: taskSlice.reducer,
    calendarReducer: calendarSlice.reducer
  }
})
export default store;