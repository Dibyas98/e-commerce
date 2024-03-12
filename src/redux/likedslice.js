import { createSlice } from "@reduxjs/toolkit";
import { doc,setDoc } from "firebase/firestore";
import { fireDB } from "../firebase/Firebase";
const initialState={
    liked:[]
}
const user = JSON.parse(localStorage.getItem('user'));

async function likedDatabase(arg){
    try {
        await setDoc(doc(fireDB,'liked',user.uid),arg)
        console.log('done');
        
    } catch (error) {
        
    }
}

const likedslice = createSlice({
    name:'liked',
    initialState:initialState,
    reducers:{
        getLikedOnLogin:(state,actions) =>{
            console.log(actions.payload);
            Object.values(actions.payload).forEach((value)=>{
                // console.log(value);
                state.liked=[...state.liked,value]
            })
            localStorage.setItem('liked',JSON.stringify(state))
            console.log(state.liked);
        },
        getLikedUpdate:(state,actions) =>{
            if(state.liked.length==0){
                state.liked = [actions.payload]
            }else{
                
                state.liked = [...state.liked,actions.payload]
            }
            const likedD={...state.liked}
            console.log(likedD);
            localStorage.setItem('liked',JSON.stringify(state.liked))
            likedDatabase(likedD)
        },
        getDeleteLiked:(state,actions) =>{
            
            state.liked = state.liked.filter((ele)=> ele.product_id != actions.payload.product_id)
            const likedD={...state.liked}
            localStorage.setItem('liked',JSON.stringify(state.liked))
            likedDatabase(likedD)
        },
        setLikedLogout: (state,actions) =>{
            console.log(actions.payload);
            
            state.liked = []
            localStorage.setItem('liked',JSON.stringify(actions.payload))
        },
        setLikedOnRefresh:(state,actions)=>{
            if(actions.payload.liked){
                state.liked = actions.payload.liked
            }else{
                state.liked = actions.payload
            }
            console.log(actions);
            
        }

    }
})
export const {getLikedOnLogin,getLikedUpdate,getDeleteLiked,setLikedLogout,setLikedOnRefresh} = likedslice.actions
export default likedslice.reducer