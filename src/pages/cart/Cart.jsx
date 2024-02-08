import React, { useContext, useState,useEffect } from "react";
import { myContext } from "../../context/Data";
import CartProduct from "./CartProduct";
import CartTotal from "./CartTotal";
import { auth, fireDB } from "../../firebase/Firebase";
import { Timestamp,doc,setDoc } from "firebase/firestore";
import { useSelector } from "react-redux";

export default function Cart() {
  const { mode,user } = useContext(myContext);
  const cartList = useSelector((store) => store.cart.cartdata);
  const cartData = useSelector((store) => store.cart);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    if (cartList.length > 0) {
      let total = 0;
      cartList.forEach((ele) => {
        let bal = parseFloat(ele[1].qnt*(ele[0].price.split("$")[1])); // Convert to number
        total += bal;
      });
      setTotalAmount(total);
    } else {
      setTotalAmount(0); // Reset total amount if cart is empty
    }
    console.log(cartList);
    const carD= {...cartList}
    async function cartToDatabase(){
      try {
        await setDoc(doc(fireDB,'cart',user.uid),carD)
      } catch (error) {
      console.log(error);
      }
      
    }
    cartToDatabase()
  }, [cartList]); // Run this effect whenever cartList changes
// console.log(user.uid);
  return (
    <div
      className="h-auto pt-5 bg-gray-100 "
      style={{
        backgroundColor: mode === "dark" ? "#282c34" : "",
        color: mode === "dark" ? "white" : "",
      }}
    >
      <h1 className="mb-10 text-2xl font-bold text-center">Cart Items</h1>
      <div className="justify-center max-w-5xl px-6 mx-auto md:flex md:space-x-6 xl:px-0 ">
        {/* cartproduct */}
        <div className="flex-col justify-center md:w-2/3">
          {cartList.length > 0 ? (
            cartList.map((ele) => {
              return <CartProduct key={ele[0].asin} prod={ele}/>;
            })
          ) : (
            <h1>No Product Add</h1>
          )}
        </div>

        {/* carttotal */}
        <CartTotal total={totalAmount}/>
      </div>
    </div>
  );
}
