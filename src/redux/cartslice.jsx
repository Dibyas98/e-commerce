import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartdata:[]
}
const cartslice = createSlice({
    name:'cart',
    initialState:initialState,
    reducers:{
        getCartdata:(state,actions)=>{
            state.cartdata = [...state.cartdata,actions.payload]
        }
    }
})
export const {getCartdata} = cartslice.actions;
export default cartslice.reducer;