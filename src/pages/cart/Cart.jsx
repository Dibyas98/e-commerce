import React, { useContext } from 'react'
import { myContext } from '../../context/Data'
import CartProduct from './CartProduct'
import CartTotal from './CartTotal'
import { useSelector } from 'react-redux'


export default function Cart() {
    const {mode} = useContext(myContext)
    const cartList = useSelector((store) => store.cart.cartdata);
    console.log(cartList.length);
  return (
    <div className="h-auto pt-5 bg-gray-100 " style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
    <h1 className="mb-10 text-2xl font-bold text-center">Cart Items</h1>
    <div className="justify-center max-w-5xl px-6 mx-auto md:flex md:space-x-6 xl:px-0 ">
        
        {/* cartproduct */}
        <div className="flex-col justify-center md:w-2/3">
  {cartList.length > 0 ? (
    cartList.map((ele) => {
      return <CartProduct key={ele.asin} />;
    })
  ) : (
    <h1>No Product Add</h1>
  )}
</div>

      
        {/* carttotal */}
      <CartTotal/>
    </div>
  </div>
  )
}
