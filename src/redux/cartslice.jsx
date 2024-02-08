import { createSlice } from "@reduxjs/toolkit";
import Login from "../pages/login/Login";

import { doc,setDoc } from "firebase/firestore";
import { fireDB } from "../firebase/Firebase";
import { useContext } from "react";
import { myContext } from "../context/Data";

const user = JSON.parse(localStorage.getItem('user'));


    async function cartToDatabase(carD){
      try {
        await setDoc(doc(fireDB,'cart',user.uid),carD)
      } catch (error) {
      console.log(error);
      }
      
    }

const initialState = {
    cartdata:[]
}
const cartslice = createSlice({
    name:'cart',
    initialState:initialState,
    reducers:{
        getCartdata: (state,actions)=>{
            const existingItem = state.cartdata.find(ele => ele.product_id === actions.payload.product_id);
            // console.log(existingItem);
            if (existingItem) {
                // Increment quantity if the item already exists in the cart
                
                alert('already add')
                return
                // console.log(actions); // Log the modified actions object
            } else {
                // Add the item to the cart with an initial quantity if it doesn't exist
                state.cartdata = [...state.cartdata, actions.payload];
                const carD= {...state.cartdata}
                cartToDatabase(carD)
    localStorage.setItem('cart',JSON.stringify(state.cartdata))
            }
            
            // console.log(state.cartdata);
            
    
    
            
        },
        getCartLogin:(state,actions) =>{
            // console.log(actions.payload);
            Object.values(actions.payload).forEach((value)=>{
                console.log(value);
                state.cartdata=[...state.cartdata,value]
            })
            localStorage.setItem('cart',JSON.stringify(state.cartdata))
        //    state.cartdata= [...actions.payload]
        //    console.log(state.cartdata);
        // console.log(actions.payload);
        },
        deleteCartData:(state,actions) =>{
            state.cartdata = state.cartdata.filter((ele)=> ele.product_id != actions.payload.product_id)
            // console.log(actions);
            const carD= {...state.cartdata}
            cartToDatabase(carD)
            localStorage.setItem('cart',JSON.stringify(state.cartdata))
        },
        getcartLoc:(state,actions) =>{
            state.cartdata = [...actions.payload]
        }
    }
})
export const {getCartdata,deleteCartData,getCartLogin,getcartLoc} = cartslice.actions;
export default cartslice.reducer;