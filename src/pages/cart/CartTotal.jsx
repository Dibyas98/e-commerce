import React, { useContext } from 'react'
import { myContext } from '../../context/Data'

export default function CartTotal() {
    const {mode} = useContext(myContext)
  return (
    <div className="sticky h-full p-6 mt-6 mb-5 bg-white border rounded-lg shadow-md md:mt-0 md:w-1/3 top-28" style={{ backgroundColor: mode === 'dark' ? 'rgb(32 33 34)' : '', color: mode === 'dark' ? 'white' : '', }}>
        <div className="flex justify-between mb-2">
          <p className="text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>Subtotal</p>
          <p className="text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>₹100</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>Shipping</p>
          <p className="text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>₹20</p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between mb-3">
          <p className="text-lg font-bold" style={{ color: mode === 'dark' ? 'white' : '' }}>Total</p>
          <div className=''>
            <p className="mb-1 text-lg font-bold" style={{ color: mode === 'dark' ? 'white' : '' }}>₹200</p>
          </div>
        </div>
        {/* <Modal  /> */}
        <button
          type="button"
          className="w-full py-2 font-bold text-center text-white rounded-lg bg-violet-600 "
        >
          Buy Now
        </button>
      </div>
  )
}
