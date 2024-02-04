import React,{useContext} from 'react'
import { RiUser3Fill } from "react-icons/ri";
import { myContext } from '../../../context/Data';
import { Link, useNavigate } from 'react-router-dom';


export default function Menu() {
    const { mode,user,setUser,handelUser} = useContext(myContext);
    const navigate = useNavigate()
  return (
    <div className="flex items-center ml-auto">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link
                    to={"/"}
                    className="text-sm font-medium text-gray-700 "
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Home
                  </Link>
                  <Link
                    to={"/order"}
                    className="text-sm font-medium text-gray-700 "
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Order
                  </Link>
                  {Object.keys(user).length === 0?<Link
                    to={"/signup"}
                    className="text-sm font-medium text-gray-700 "
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Signup
                  </Link>:null}

                  {Object.keys(user).length===0?<Link to={'/login'}
                    className="text-sm font-medium text-gray-700 cursor-pointer "
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Login
                  </Link>:<button
                    
                    className="text-sm font-medium text-gray-700 " onClick={() =>{ 
                      setUser({})
                      // console.log(user); // Clears user data
                      handelUser({});  
                      return navigate('/login')
                    }}
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Logout
                  </button>}
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
                    <RiUser3Fill style={{ color: mode === "dark" ? "white" : "" }}/>
                  </a>
                </div>

                
               
              </div>
  )
}
