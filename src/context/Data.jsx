import React, { createContext, useState } from "react";

export const myContext = createContext();
export default function Data({ children }) {
  const [mode, setMode] = useState("light");
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(()=>{
    const storeData = localStorage.getItem('user');
    return storeData? JSON.parse(storeData):{}
  });

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





  return (
    <myContext.Provider
      value={{
        mode,
        togglemode,
        open,
        setOpen,
        user,
        setUser,
        handelUser
      }}
    >
      {children}
    </myContext.Provider>
  );
}
