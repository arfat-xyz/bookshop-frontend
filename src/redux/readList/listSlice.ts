import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../Types/globalTypes";
interface IList {
  products: IProduct[];
}
const initialState: IList = {
  products: [],
};
export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addToList: (store, action: PayloadAction<IProduct>) => {
      action.payload = { ...action.payload, finished: false }
      console.log(action.payload);
      const exist = store.products.find(
        (product) => product._id === action.payload._id
      );
      if (!exist) {
        store.products.push({ ...action.payload });
      }
    },
    getList: (store, action: PayloadAction<IProduct[]>) => {
      store.products = action.payload
    },
    deleteFromList: (store, action: PayloadAction<IProduct>) => {
      store.products = store.products.filter(
        (product) => product._id !== action.payload._id
      );
    },
    markAsFinished: (store, action: PayloadAction<IProduct>) => {
      console.log(action.payload, 'From redux');
      store.products = store.products.filter((product) => {
        if (product._id === action.payload._id) {
          product.finished = true;
          return product;
        } else {
          return product;
        }
      });
    },
  },
});
export const { addToList, deleteFromList, markAsFinished, getList } = listSlice.actions;
export default listSlice.reducer;
