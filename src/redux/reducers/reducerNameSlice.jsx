import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: 'Welcome to Redux!'
};

const reducerNameSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    updateMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const { updateMessage } = reducerNameSlice.actions;

export default reducerNameSlice.reducer;
