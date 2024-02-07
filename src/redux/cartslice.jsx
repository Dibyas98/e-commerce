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
        },
        deleteCartData:(state,actions) =>{
            state.cartdata = state.cartdata.filter((ele)=> ele.asin != actions.payload.asin)
            // console.log(actions);
        }
    }
})
export const {getCartdata,deleteCartData} = cartslice.actions;
export default cartslice.reducer;