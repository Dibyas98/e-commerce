import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchslice";

export const store = configureStore({
    reducer:{
        search:searchSlice
    },
});