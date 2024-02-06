import React, { useContext, useState,useEffect } from "react";
import { myContext } from "../../context/Data";
import CartProduct from "./CartProduct";
import CartTotal from "./CartTotal";
import { useSelector } from "react-redux";

export default function Cart() {
  const { mode } = useContext(myContext);
  const cartList = useSelector((store) => store.cart.cartdata);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    if (cartList.length > 0) {
      let total = 0;
      cartList.forEach((ele) => {
        let bal = parseFloat(ele.price.split("$")[1]); // Convert to number
        total += bal;
      });
      setTotalAmount(total);
    } else {
      setTotalAmount(0); // Reset total amount if cart is empty
    }
  }, [cartList]); // Run this effect whenever cartList changes

  console.log(totalAmount);
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
              return <CartProduct key={ele.asin} />;
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
