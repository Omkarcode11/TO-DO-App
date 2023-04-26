import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticated: false,
    id: null,
    name: "Gest",
  },
  reducers: {
    isAuthenticated(state, action) {
      (state.isAuthenticated = action.payload.isAuthenticated),
        (state.name = action.payload.name);
    },
    addUser(state, action) {
      state.isAuthenticated = true;
      state.name = action.payload.name;
      state.id = action.payload.id;
    },
    logout(state, action) {
      state.isAuthenticated = false
      state.id = null
      state.name = 'Guest'
    },
  },
});

export const { isAuthenticated, logout, addUser } = userSlice.actions;
export default userSlice.reducer;
