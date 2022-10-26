import { createStore } from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {
  if (action === 'increment') {
    return {
      counter: state.counter + 1
    }
  }
  if (action === 'decrement') {
    return {
      counter: state.counter - 1
    }
  }
}

const store = createStore(counterReducer)

export default store;