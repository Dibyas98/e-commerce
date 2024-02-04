import React, { useContext } from 'react'
import { myContext } from '../../context/Data'
import CartProduct from './CartProduct'
import CartTotal from './CartTotal'

export default function Cart() {
    const {mode} = useContext(myContext)
  return (
    <div className="h-screen pt-5 bg-gray-100 " style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
    <h1 className="mb-10 text-2xl font-bold text-center">Cart Items</h1>
    <div className="justify-center max-w-5xl px-6 mx-auto md:flex md:space-x-6 xl:px-0 ">
        
        {/* cartproduct */}
      <CartProduct/>

        {/* carttotal */}
      <CartTotal/>
    </div>
  </div>
  )
}
