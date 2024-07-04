import { configureStore } from "@reduxjs/toolkit";
import cart from "./slices/cart.slice";
import purchases from "./slices/purchase.slice";

const store = configureStore({
    reducer: {
        cart,
        purchases,
    }
});

export default store;