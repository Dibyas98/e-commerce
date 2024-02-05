import React, { useContext } from 'react'
import { myContext } from '../../context/Data'

export default function Order() {
    const{order,mode} = useContext(myContext);
  return (
    <h2 className='h-screen text-5xl text-center'>No Order</h2>
        
  )
}
