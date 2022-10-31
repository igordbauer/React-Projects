// import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true }


const counterSlice = createSlice({
  name: 'Counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    increase(state, action) {
      state.counter = state.counter + action.payload
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter
    }
  }
})

const initialAuthState = { isAuthenticated: false }

const authenticationSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false
    }
  }
})

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
export const counterActions = counterSlice.actions
export const authActions = authenticationSlice.actions

export default store;