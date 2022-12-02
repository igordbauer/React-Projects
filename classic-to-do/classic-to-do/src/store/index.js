import { configureStore } from '@reduxjs/toolkit';
import { taskSlice } from './taskSlice';
import { calendarSlice } from './calendarSlice';
import { formSlice } from './formSlice'

const store = configureStore({
  reducer: {
    taskReducer: taskSlice.reducer,
    calendarReducer: calendarSlice.reducer,
    formReducer: formSlice.reducer
  }
})
export default store;