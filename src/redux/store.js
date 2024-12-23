import { configureStore } from '@reduxjs/toolkit';
import reducerNameSlice from './reducers/reducerNameSlice';

const store = configureStore({
  reducer: {
    message: reducerNameSlice,
  },
});

export default store;
