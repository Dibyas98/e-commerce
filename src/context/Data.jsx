import React, { createContext, useState } from "react";
import { fetchData } from "../api/api";
import { useDispatch } from "react-redux";
import { getSearchData } from "../redux/searchslice";
import { deleteCartData, getCartdata } from "../redux/cartslice";

export const myContext = createContext();
export default function Data({ children }) {
  const dispatch = useDispatch();
  const [mode, setMode] = useState(()=>{
    const storemode = localStorage.getItem('mode');
    return storemode? JSON.parse(storemode):'light';
  });
  const [open, setOpen] = useState(false);
  const[order,setOrder] = useState([]);
  const [user, setUser] = useState(()=>{
    const storeData = localStorage.getItem('user');
    return storeData? JSON.parse(storeData):{}
  });
  const [search,setSearch] = useState('');

  const handelUser = (arg)=>{
    localStorage.setItem('user',JSON.stringify(arg))
  }




  const togglemode = () => {
    if (mode == "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(17,24,39)";
      localStorage.setItem('mode',JSON.stringify('dark'))
    } else {
      setMode("light");
      localStorage.setItem('mode',JSON.stringify('light'))
      document.body.style.backgroundColor = "white";
    }

  };
  const handelSearch = (arg) =>{
    setSearch(arg)
    fetchData(arg).then(data => dispatch(getSearchData(data)))
  }

  const handelAddCart = (data) =>{
    if(Object.keys(user).length == 0){
      alert ('You are not login');
    }else{
      dispatch(getCartdata(data));
    }
  }

  const handelCartDelete =  (data)=>{
    dispatch(deleteCartData(data))
  }

 



  return (
    <myContext.Provider
      value={{
        mode,
        togglemode,
        open,
        setOpen,
        user,
        setUser,
        handelUser,
        order,
        handelSearch,
        search,
        handelAddCart,
        handelCartDelete
      }}
    >
      {children}
    </myContext.Provider>
  );
}
