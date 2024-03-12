import React, { createContext, useEffect, useState } from "react";
import { fetchData } from "../api/api";
import { useDispatch } from "react-redux";
import { getSearchData } from "../redux/searchslice";
import {
  deleteCartData,
  getCartLogin,
  getCartdata,
  getcartLoc,
} from "../redux/cartslice";
import { doc, getDoc } from "firebase/firestore";
import { fireDB } from "../firebase/Firebase";
import { getDeleteLiked, getLikedUpdate, setLikedLogout, setLikedOnRefresh } from "../redux/likedslice";
import Logo from "../component/navbar/logo/Logo";

export const myContext = createContext();
export default function Data({ children }) {
  const dispatch = useDispatch();
  const [mode, setMode] = useState(() => {
    const storemode = localStorage.getItem("mode");
    return storemode ? JSON.parse(storemode) : "light";
  });
  const [open, setOpen] = useState(false);
  const [order, setOrder] = useState([]);
  const [user, setUser] = useState(() => {
    const storeData = localStorage.getItem("user");
    return storeData ? JSON.parse(storeData) : {};
  });
  const [search, setSearch] = useState("");

  const handelUser = (arg) => {
    localStorage.setItem("user", JSON.stringify(arg));
  };

  const togglemode = () => {
    if (mode == "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(17,24,39)";
      localStorage.setItem("mode", JSON.stringify("dark"));
    } else {
      setMode("light");
      localStorage.setItem("mode", JSON.stringify("light"));
      document.body.style.backgroundColor = "white";
    }
  };
  const handelSearch = (arg) => {
    // setSearch(arg)
    console.log(arg);
    fetchData(arg).then((dat) => dispatch(getSearchData(dat)));
  };

  const handelAddCart = (data) => {
    if (Object.keys(user).length == 0) {
      alert("You are not login");
    } else {
      dispatch(getCartdata(data));
    }
  };

  const handelCartDelete = (data) => {
    dispatch(deleteCartData(data));
  };

  useEffect(() => {
    const handelCartOnLoading = () => {
      const storecart = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [];
      dispatch(getcartLoc(storecart));
    };
    handelCartOnLoading();
  }, [user]);

  const HandelCartOnLogin = () => {
    cartSnap.cart.length > 0 ? dispatch(getCartLogin(cartSnap)) : null;
  };
 

  // LIKED DATA ALL FUNCTIONS

  useEffect(()=>{
    const handelLikedOnLoading = ()=>{
      const storeLiked = localStorage.getItem('liked')
      ?JSON.parse(localStorage.getItem('liked')):[];
      dispatch(setLikedOnRefresh(storeLiked))
    };
    handelLikedOnLoading();
  },[])
  const handelLikedData = (product, type) => {
    if (!type) {
      dispatch(getLikedUpdate(product));
    } else {
      dispatch(getDeleteLiked(product));
    }
  };
const handelLougoutLiked = ()=>{
  console.log('h');
  dispatch(setLikedLogout([]))
}
  return (
    <myContext.Provider
      value={{
        mode,
        togglemode,
        open,
        setOpen,
        user,
        setUser,
        handelUser,
        order,
        handelSearch,
        search,
        handelAddCart,
        handelCartDelete,
        HandelCartOnLogin,
        handelLikedData,
        handelLougoutLiked
      }}
    >
      {children}
    </myContext.Provider>
  );
}
