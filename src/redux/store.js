import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchslice";
import cartslice from "./cartslice";

export const store = configureStore({
    reducer:{
        search:searchSlice,
        cart: cartslice
    },
});     