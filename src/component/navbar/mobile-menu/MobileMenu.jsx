import React, { useState, Fragment, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { myContext } from "../../../context/Data";
import { RxCross2 } from 'react-icons/rx'

export default function MobileMenu() {
  const {mode,open,setOpen} = useContext(myContext)
      //  {/* Mobile menu */}
  return (
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
              <Dialog.Panel
                className="relative flex flex-col w-full max-w-xs pb-12 overflow-y-auto bg-white shadow-xl"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(40, 44, 52)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
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
                  <a
                    to={"/allproducts"}
                    className="text-sm font-medium text-gray-900 "
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    All Products
                  </a>
                  <div className="flow-root">
                    <a
                      to={"/order"}
                      style={{ color: mode === "dark" ? "white" : "" }}
                      className="block p-2 -m-2 font-medium text-gray-900"
                    >
                      Order
                    </a>
                  </div>

                  <div className="flow-root">
                    <a
                      to={"/dashboard"}
                      className="block p-2 -m-2 font-medium text-gray-900"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      admin
                    </a>
                  </div>

                  <div className="flow-root">
                    <a
                      className="block p-2 -m-2 font-medium text-gray-900 cursor-pointer"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Logout
                    </a>
                  </div>
                  <div className="flow-root">
                    <a
                      to={"/"}
                      className="block p-2 -m-2 font-medium text-gray-900 cursor-pointer"
                    >
                      {" "}
                    </a>
                  </div>
                </div>

                <div className="px-4 py-6 border-t border-gray-200">
                  <a href="#" className="flex items-center p-2 -m-2">
                    <img
                      src="img/indiaflag.png"
                      alt=""
                      className="flex-shrink-0 block w-5 h-auto"
                    />
                    <span
                      className="block ml-3 text-base font-medium text-gray-900"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      INDIA
                    </span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
  )
}
