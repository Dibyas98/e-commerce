import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchslice";
import cartslice from "./cartslice";
import likedslice from "./likedslice";

export const store = configureStore({
    reducer:{
        search:searchSlice,
        cart: cartslice,
        liked:likedslice
    },
});     