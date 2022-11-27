import { configureStore } from '@reduxjs/toolkit';
import { taskSlice } from './taskSlice';


const store = configureStore({
  reducer: {
    taskReducer: taskSlice.reducer
  }
})
export default store;