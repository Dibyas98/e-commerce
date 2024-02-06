import React, { useContext } from 'react'
import { myContext } from '../../context/Data'

export default function Order() {
    const{order,mode} = useContext(myContext);
  return (
    <h2 className='h-auto pt-4 text-5xl text-center' style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}> <p className='h-40'>No Order</p></h2>
        
  )
}
