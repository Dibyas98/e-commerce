import React, { createContext, useState } from "react";
import { fetchData } from "../api/api";
import { useDispatch } from "react-redux";
import { getSearchData } from "../redux/searchslice";

export const myContext = createContext();
export default function Data({ children }) {
  const dispatch = useDispatch();
  const [mode, setMode] = useState("light");
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
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  const handelSearch = (arg) =>{
    setSearch(arg)
    fetchData(arg).then(data => dispatch(getSearchData(data)))
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
        search
      }}
    >
      {children}
    </myContext.Provider>
  );
}
