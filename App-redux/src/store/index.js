// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './counterSlice';
import { authenticationSlice } from './authSlice';
// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'increment') {
//     return {
//       ...state,
//       counter: state.counter + 1,
//     }
//   }
//   if (action.type === 'decrement') {
//     return {
//       ...state,
//       counter: state.counter - 1,

//     }
//   }
//   if (action.type === 'increase') {
//     return {
//       ...state,
//       counter: state.counter + action.value,
//     }
//   }
//   if (action.type === 'toggle') {
//     return {
//       ...state,
//       showCounter: !state.showCounter
//     }
//   }
//   return state
// }

const store = configureStore({
  reducer: {
    counterReducer: counterSlice.reducer,
    authReducer: authenticationSlice.reducer
  }
})

export default store;