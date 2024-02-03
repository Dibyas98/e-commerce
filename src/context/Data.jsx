import React, { createContext, useState } from 'react'

export const myContext = createContext();
export default function Data({children}) {
    const [mode,setMode] = useState('light');
    const togglemode = () =>{
        if(mode == 'light'){
            setMode('dark');
        }else{
            setMode('light')
        }
    }
  return (
    <myContext.Provider value={{}}>
        {children}
    </myContext.Provider>
  )
}
