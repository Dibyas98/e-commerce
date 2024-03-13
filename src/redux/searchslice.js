import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchData: []
};

const searchSlice = createSlice({
  name: 'search',
  initialState: initialState,  // Use the correct initial state object
  reducers: {
    getSearchData: (state, action) => {
      
      state.searchData = action.payload.data;  // Update the searchData property
      // console.log(state.searchData);
    },
    setSearchonRefresh:(state,action)=>{
      state.searchData = []
    }
  }
});

export const { getSearchData,setSearchonRefresh } = searchSlice.actions;
export default searchSlice.reducer;
