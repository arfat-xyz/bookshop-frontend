import { configureStore } from "@reduxjs/toolkit";
// import logger from "redux-logger";
import cartSlice from "./cart/cartSlice";
import listSlice from "./readList/listSlice";
import userSlice from "./user/userSlice";
import { apiSlice } from "./api/apiSlice";
export const store = configureStore({
  reducer: {
    cart: cartSlice,
    list: listSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
    user: userSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
