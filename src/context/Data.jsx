import React, { createContext, useEffect, useState } from "react";
import { fetchData } from "../api/api";
import { useDispatch } from "react-redux";
import { getSearchData } from "../redux/searchslice";
import { deleteCartData, getCartdata, getcartLoc } from "../redux/cartslice";

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
    // setSearch(arg)
   console.log(arg);
    fetchData(arg).then(dat => dispatch(getSearchData(dat)))
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

  useEffect(()=>{
    const handelCartOnLoading = ()=>{
      const storecart = localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[];
      dispatch(getcartLoc(storecart))
    }
    handelCartOnLoading();
  
  },[user])

 



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
