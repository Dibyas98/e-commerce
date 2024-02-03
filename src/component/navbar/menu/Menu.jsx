import React,{useContext} from 'react'
import { RiUser3Fill } from "react-icons/ri";
import { myContext } from '../../../context/Data';


export default function Menu() {
    const { mode } = useContext(myContext);
  return (
    <div className="flex items-center ml-auto">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a
                    href={"/allproducts"}
                    className="text-sm font-medium text-gray-700 "
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    All Products
                  </a>
                  <a
                    to={"/order"}
                    className="text-sm font-medium text-gray-700 "
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Order
                  </a>
                  <a
                    to={"/dashboard"}
                    className="text-sm font-medium text-gray-700 "
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Admin
                  </a>

                  <a
                    className="text-sm font-medium text-gray-700 cursor-pointer "
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
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
                    <span
                      className="block ml-3 text-sm font-medium"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      INDIA
                    </span>
                  </a>
                </div>
                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <RiUser3Fill />
                  </a>
                </div>

                
               
              </div>
  )
}
