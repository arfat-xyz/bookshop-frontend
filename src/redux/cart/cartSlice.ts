import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../Types/globalTypes";
interface ICart {
  products: IProduct[];
}
const initialState: ICart = {
  products: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (store, action: PayloadAction<IProduct>) => {
      const exist = store.products.find(
        (product) => product._id === action.payload._id
      );
      if (!exist) {
        store.products.push({ ...action.payload });
      }
    },
    deleteFromCart: (store, action: PayloadAction<IProduct>) => {
      store.products = store.products.filter(
        (product) => product._id !== action.payload._id
      );
    },
  },
});
export const { addToCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;
