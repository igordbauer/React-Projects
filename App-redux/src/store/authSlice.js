import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isAuthenticated: false }

export const authenticationSlice = createSlice({
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

export const authActions = authenticationSlice.actions
