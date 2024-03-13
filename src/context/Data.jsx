import React, { createContext, useEffect, useState } from "react";
import { fetchData } from "../api/api";
import { useDispatch, useSelector } from "react-redux";
import { getSearchData } from "../redux/searchslice";
import { apidata } from "../apidata";
import {
  deleteCartData,
  getCartLogin,
  getCartdata,
  getEmptycart,
  getcartLoc,
} from "../redux/cartslice";
import { doc, getDoc } from "firebase/firestore";
import { fireDB } from "../firebase/Firebase";
import {
  getDeleteLiked,
  getLikedUpdate,
  setLikedLogout,
  setLikedOnRefresh,
} from "../redux/likedslice";
import Logo from "../component/navbar/logo/Logo";
import { setOrderOnLogout, setOrderPlacedOnRefresh } from "../redux/orderslice";

// {=================================================================
//                     CREATE NEW CONTEXT
// =================================================================}

export const myContext = createContext();

// =================================================================
//                     CONTEXT FUNCTION
// =================================================================

export default function Data({ children }) {
  //
  const dispatch = useDispatch();
  const [productDetails, setproductDetails] = useState({});

  // =================================================================
  //                  MODE TYPE FROM LOCAL STOREGE
  // =================================================================
  const [mode, setMode] = useState(() => {
    const storemode = localStorage.getItem("mode");
    return storemode ? JSON.parse(storemode) : "light";
  });
  const [open, setOpen] = useState(false);
  const [order, setOrder] = useState([]);

  // =================================================================
  //              GET USER DETAILS FROM LOCAL STORAGE
  // =================================================================

  const [user, setUser] = useState(() => {
    const storeData = localStorage.getItem("user");
    return storeData ? JSON.parse(storeData) : {};
  });

  const [search, setSearch] = useState("");

  // =================================================================
  //          SET USER DETAIL IN LOCAL STORAGE ON LOGIN
  // =================================================================

  const handelUser = (arg) => {
    localStorage.setItem("user", JSON.stringify(arg));
  };
  // =================================================================
  //              TOGGLE BETWEEEN LIGHT AND DARK MODE
  // =================================================================
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

  // =================================================================
  //                  LIKED DATA ALL FUNCTIONS
  // =================================================================

  useEffect(() => {
    const handelLikedOnLoading = () => {
      const storeLiked = localStorage.getItem("liked")
        ? JSON.parse(localStorage.getItem("liked"))
        : [];
      dispatch(setLikedOnRefresh(storeLiked));
    };
    handelLikedOnLoading();
  }, []);
  const handelLikedData = (product, type) => {
    if (!type) {
      dispatch(getLikedUpdate(product));
    } else {
      dispatch(getDeleteLiked(product));
    }
  };
  const handelLougoutLiked = () => {
    dispatch(setLikedLogout([]));
    dispatch(setOrderOnLogout([]));
  };

  // =================================================================
  //                      ORDER FUNCTION
  // =================================================================

  const handelOnCompleteOrder = () => {
    dispatch(getEmptycart([]));
  };

  useEffect(() => {
    const handelOrderOnRefresh = () => {
      const storeOrder = localStorage.getItem("order")
        ? JSON.parse(localStorage.getItem("order"))
        : [];
      dispatch(setOrderPlacedOnRefresh(storeOrder));
    };
    handelOrderOnRefresh();
  }, []);

  // ================================================================
  //                          SORT FILTER
  // =================================================================

  const [sortFilter, setSortFilter] = useState([]);
  const [product,setproduct] =useState([])
  const handelFilterData= ()=>{
    const product1 = useSelector((store) => store.search.searchData)
    // console.log(product);
    setproduct(product1)
  }
  const handelSortFilter = (event) => {
    // console.log(event.target.value);
    // const product = useSelector((store) => store.search)
    // console.log(product);
    if (event.target.value == "Low to High") {
      const filter = [...product].sort((a, b) => {
        let s =parseFloat(a.offer.price.replace(/[₹,$]/g, '')) -parseFloat(b.offer.price.replace(/[₹,$]/g, '')) ;
        return s
      });

      setSortFilter(filter);
    }
    else if(event.target.value == 'High to Low'){
      const filter = [...product].sort((a, b) => {
        let s =parseFloat(b.offer.price.replace(/[₹,$]/g, '')) -parseFloat(a.offer.price.replace(/[₹,$]/g, '')) ;
        console.log('s',s);
        return s
      });

      setSortFilter(filter);
    }
    else if(event.target.value == 'reset'){
      

      setSortFilter([]);
    }
  };
  console.log(sortFilter);

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
        handelLougoutLiked,
        handelOnCompleteOrder,
        handelSortFilter,
        sortFilter,
        setSortFilter,
        handelFilterData,
      }}
    >
      {children}
    </myContext.Provider>
  );
}
