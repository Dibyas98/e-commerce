import React, { createContext, useState } from 'react'

export const myContext = createContext();
export default function Data({children}) {
    const [mode,setMode] = useState('light');
    const [open, setOpen] = useState(false);
    const togglemode = () =>{
        if(mode == 'light'){
            setMode('dark');
            document.body.style.backgroundColor =  'rgb(17,24,39)';
        }else{
            setMode('light');
            document.body.style.backgroundColor = 'white'
        }
    }
  return (
    <myContext.Provider value={{mode,togglemode,open,setOpen}}>
        {children}
    </myContext.Provider>
  )
}
