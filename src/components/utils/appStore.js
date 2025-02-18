import { configureStore } from "@reduxjs/toolkit";
import cartRecucer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartRecucer,
  },
});
export default appStore;
