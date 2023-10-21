import { configureStore } from '@reduxjs/toolkit';
import infoSlice from './Slice/storeSlice';

export const store = configureStore({
  reducer: {
    info: infoSlice, // Use the reducer, not infoSlice.reducer
  },
});
