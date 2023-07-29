import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import cartSlice from "./cart/cartSlice";
export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
