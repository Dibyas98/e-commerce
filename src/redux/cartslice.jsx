import { createSlice } from "@reduxjs/toolkit";
import Login from "../pages/login/Login";

const initialState = {
    cartdata:[]
}
const cartslice = createSlice({
    name:'cart',
    initialState:initialState,
    reducers:{
        getCartdata: (state,actions)=>{
            const existingItem = state.cartdata.find(ele => ele[0].asin === actions.payload[0].asin);

            if (existingItem) {
                // Increment quantity if the item already exists in the cart
                existingItem[1].qnt += 1;
                // console.log(actions); // Log the modified actions object
            } else {
                // Add the item to the cart with an initial quantity if it doesn't exist
                state.cartdata = [...state.cartdata, actions.payload];
            }
            
        },
        getCartLogin:(state,actions) =>{
            console.log(actions.payload);
           state.cartdata= [...actions.payload]
           console.log(state.cartdata);
        // console.log(actions.payload);
        },
        deleteCartData:(state,actions) =>{
            state.cartdata = state.cartdata.filter((ele)=> ele[0].asin != actions.payload[0].asin)
            // console.log(actions);
        }
    }
})
export const {getCartdata,deleteCartData,getCartLogin} = cartslice.actions;
export default cartslice.reducer;