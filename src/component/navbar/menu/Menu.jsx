import React, { useContext, useEffect, useRef, useState } from 'react';
import { RiUser3Fill } from "react-icons/ri";
import { myContext } from '../../../context/Data';
import { Link, useNavigate } from 'react-router-dom';
import UserDetail from '../../userdetail/UserDetail';
import { useDispatch } from 'react-redux';

export default function Menu() {
    const { mode, user, setUser, handelUser } = useContext(myContext);
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [userdis, setUserdis] = useState(false);
    const userDetailRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!userDetailRef.current.contains(event.target)) {
                setUserdis(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [setUserdis]);

    const handleUserDetail = (e) => {
      e.stopPropagation();
        setUserdis(!userdis);
    };

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
                {Object.keys(user).length === 0 ? <Link
                    to={"/signup"}
                    className="text-sm font-medium text-gray-700 "
                    style={{ color: mode === "dark" ? "white" : "" }}
                >
                    Signup
                </Link> : null}

                {Object.keys(user).length === 0 ? <Link to={'/login'}
                    className="text-sm font-medium text-gray-700 cursor-pointer "
                    style={{ color: mode === "dark" ? "white" : "" }}
                >
                    Login
                </Link> : <></>}
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
            <div className="hidden lg:ml-8 lg:flex lg:flex-col relative">
                <p className="flex items-center text-gray-700 "  onClick={(e)=>handleUserDetail(e)}>
                    {Object.keys(user).length > 0 ? <RiUser3Fill   style={{ color: mode === "dark" ? "white" : "" }} /> : <></>}
                </p>
                {userdis ? <div ref={userDetailRef}><UserDetail displayde={handleUserDetail}/></div> : <></>}
            </div>
        </div>
    );
}
