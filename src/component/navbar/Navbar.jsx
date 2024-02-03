import React, { useState,Fragment,useContext } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { Dialog, Transition } from '@headlessui/react'
import { FiSun } from 'react-icons/fi'
// import { a } from 'react-router-dom'
import { BsFillCloudSunFill } from 'react-icons/bs'
import { myContext } from '../../context/Data'
import { RiUser3Fill } from "react-icons/ri";

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { mode } = useContext(myContext)
  return (
    <div className="sticky top-0 z-50 bg-white "  >
       {/* Mobile menu */}
       <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex flex-col w-full max-w-xs pb-12 overflow-y-auto bg-white shadow-xl" style={{ backgroundColor: mode === 'dark' ? 'rgb(40, 44, 52)' : '', color: mode === 'dark' ? 'white' : '', }}>
                <div className="flex px-4 pb-2 pt-28">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center p-2 -m-2 text-gray-400 rounded-md"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <RxCross2 />
                  </button>
                </div>
                <div className="px-4 py-6 space-y-6 border-t border-gray-200">
                  
                  <a to={'/allproducts'} className="text-sm font-medium text-gray-900 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    All Products
                  </a>
                  <div className="flow-root">
                    <a to={'/order'} style={{ color: mode === 'dark' ? 'white' : '', }} className="block p-2 -m-2 font-medium text-gray-900">
                      Order
                    </a>
                  </div>

                  <div className="flow-root">
                    <a to={'/dashboard'} className="block p-2 -m-2 font-medium text-gray-900" style={{ color: mode === 'dark' ? 'white' : '', }}>
                      admin
                    </a>
                  </div>

                  <div className="flow-root">
                    <a className="block p-2 -m-2 font-medium text-gray-900 cursor-pointer" style={{ color: mode === 'dark' ? 'white' : '', }}>
                      Logout
                    </a>
                  </div>
                  <div className="flow-root">
                    <a to={'/'} className="block p-2 -m-2 font-medium text-gray-900 cursor-pointer">
                      <img
                        className="inline-block w-10 h-10 rounded-full"
                        src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                        alt="Dan_Abromov" />                                        </a>
                  </div>
                </div>

                <div className="px-4 py-6 border-t border-gray-200">
                  <a href="#" className="flex items-center p-2 -m-2">
                    <img
                      src="img/indiaflag.png"
                      alt=""
                      className="flex-shrink-0 block w-5 h-auto"
                    />
                    <span className="block ml-3 text-base font-medium text-gray-900" style={{ color: mode === 'dark' ? 'white' : '', }}>INDIA</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      



      
    <header className="relative bg-white">
      <p className="flex items-center justify-center h-10 px-4 text-sm font-medium text-white bg-pink-600 sm:px-6 lg:px-8" style={{ backgroundColor: mode === 'dark' ? 'rgb(62 64 66)' : '', color: mode === 'dark' ? 'white' : '', }}>
        Get free delivery on orders over ₹300
      </p>
      <nav aria-label="Top" className="px-4 bg-gray-100 shadow-xl sm:px-6 lg:px-8 " style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
        <div className="">
          <div className="flex items-center h-16">
            <button
              type="button"
              className="p-2 text-gray-400 bg-white rounded-md lg:hidden"
              onClick={() => setOpen(true)} style={{ backgroundColor: mode === 'dark' ? 'rgb(80 82 87)' : '', color: mode === 'dark' ? 'white' : '', }}
            >
              <span className="sr-only">Open menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>

            </button>

            {/* Logo */}
            <div className="flex ml-4 lg:ml-0">
              <a href={'/'} className='flex'>
                <div className="flex ">
                  <h1 className='px-2 py-1 text-2xl font-bold text-black rounded ' style={{ color: mode === 'dark' ? 'white' : '', }}>E-Bharat</h1>
                </div>
              </a>
            </div>


            <div className="flex items-center ml-auto">
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">

                <a href={'/allproducts'} className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                  All Products
                </a>
                <a to={'/order'} className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                  Order
                </a>
                <a to={'/dashboard'} className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                  Admin
                </a>

                <a className="text-sm font-medium text-gray-700 cursor-pointer " style={{ color: mode === 'dark' ? 'white' : '', }}>
                  Logout
                </a>
              </div>
              <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      src="https://ecommerce-sk.vercel.app/img/indiaflag.png"
                      alt=""
                      className="flex-shrink-0 block w-5 h-auto"
                    />
                    <span className="block ml-3 text-sm font-medium" style={{ color: mode === 'dark' ? 'white' : '', }}>INDIA</span>
                  </a>
                </div>
                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                  <RiUser3Fill />
                  </a>
                </div>
                
                {/* Search */}
                <div className="flex lg:ml-6">
                  <button className='' >
                    {/* <MdDarkMode size={35} style={{ color: mode === 'dark' ? 'white' : '' }} /> */}
                    {mode === 'light' ?
                      (<FiSun className='' size={30} />
                      ) : 'dark' ?
                        (<BsFillCloudSunFill size={30} />
                        ) : ''}
                  </button>
                </div>
                
                 {/* Cart */}
                 <div className="flow-root ml-4 lg:ml-6">
                  <a to={'/cart'} className="flex items-center p-2 -m-2 group" style={{ color: mode === 'dark' ? 'white' : '', }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>

                    <span className="ml-2 text-sm font-medium text-gray-700 group-" style={{ color: mode === 'dark' ? 'white' : '', }}>0</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                  </div>
              </div>
            </div>
          </div>
      </nav>
    </header>
    </div>

  )
}
