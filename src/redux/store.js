import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchslice";
import cartslice from "./cartslice";
import likedslice from "./likedslice";
import orderslice from "./orderslice";

export const store = configureStore({
    reducer:{
        search:searchSlice,
        cart: cartslice,
        liked:likedslice,
        order:orderslice,
        
    },
});     