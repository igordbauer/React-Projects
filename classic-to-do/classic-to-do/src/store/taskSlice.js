import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  notStarted: [],
  inProgress: [],
  finished: []
}
export const statusEnum = {
  notStarted: 'notStarted',
  inProgress: 'inProgress',
  finished: 'finished',
}

export const taskSlice = createSlice({
  name: 'task',
  initialState: initialState,
  reducers: {
    AddTaskHandler(state, actions) {

    }
  }
})
export const taskActions = taskSlice.actions