import { createSlice } from "@reduxjs/toolkit";

export const priorityEnum = {
    low: 'low',
    medium: 'medium',
    high: 'high'
}

const initialState = {
    title: '',
    description: '',
    priority: priorityEnum['low']
}

export const formSlice = createSlice({
    name: 'taskForm',
    initialState: initialState,
    reducers: {
        titleHandler(state, actions) {
            state.title = actions.payload
        },
        descriptionHandler(state, actions) {
            state.description = actions.payload
        },
    }

})
export const formActions = formSlice.actions