import { createSlice } from "@reduxjs/toolkit";
import { doc,setDoc } from "firebase/firestore";
import { fireDB } from "../firebase/Firebase";

const initialState={
    order:[]
}
const user = JSON.parse(localStorage.getItem('user'));
async function orderDatabase(arg){
    try {
        await setDoc(doc(fireDB,'order',user.uid),arg)
        console.log('done');
        
    } catch (error) {
        console.log(error);
    }
}
const orderslice= createSlice({
    name:'order',
    initialState:initialState,
    reducers:{
        getOrderPlaced: (state,actions)=>{
            state.order = [...state.order,actions.payload];
            const orderD={...state.order}
            console.log(orderD);
            orderDatabase(orderD)
            localStorage.setItem('order',JSON.stringify(state.order))
        },
        setOrderPlacedOnRefresh: (state,actions) =>{
            console.log(actions.payload);
            state.order=[...state.order,...actions.payload]
        },
        setOrderOnLogin: (state,actions) =>{
            console.log(actions.payload);
            Object.values(actions.payload).forEach((value)=>{
                // console.log(value);
                state.order=[...state.order,value]
            })
            localStorage.setItem('order',JSON.stringify(state.order))
        },
        setOrderOnLogout: (state,actions) =>{
            state.order=[];
            localStorage.setItem('order',JSON.stringify(actions.payload))
        }
    }
})

export const {getOrderPlaced,setOrderPlacedOnRefresh,setOrderOnLogin,setOrderOnLogout} = orderslice.actions;
export default orderslice.reducer;