import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./slices/itemsSlice"; // Example slice

export const store = configureStore({
  reducer: {
    items: itemsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
