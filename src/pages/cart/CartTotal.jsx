import React, { useContext, useState } from "react";
import { myContext } from "../../context/Data";
import Modal from "./Model";
import { doc, setDoc } from "firebase/firestore";
import { fireDB } from "../../firebase/Firebase";
import { useDispatch, useSelector } from "react-redux";
import { getEmptycart } from "../../redux/cartslice";
import { getOrderPlaced } from "../../redux/orderslice";

export default function CartTotal({ total }) {
  const { mode, user, handelOnCompleteOrder } = useContext(myContext);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const cartItems = useSelector((store) => store.cart.cartdata);
  const dispatch = useDispatch();

  const buyNow = async () => {
    // validation
    if (name === "" || address == "" || pincode == "" || phoneNumber == "") {
      return toast.error("All fields are required", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    const addressInfo = {
      name,
      address,
      pincode,
      phoneNumber,
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };

    var options = {
      key: "rzp_test_eZp7Hm4J0YB3rD",
      key_secret: "gIYblgfhjV785qtqeEkrFNMN",
      amount: parseInt(parseFloat(total+(total*(1/20))).toFixed(2)*100),
      currency: "INR",
      order_receipt: "order_rcptid_" + name,
      name: "E-Bharat",
      description: "for testing purpose",
      handler: function (response) {
        console.log(response);

        // toast.success('Payment Successful')

        const paymentId = response.razorpay_payment_id;
        // console.log(paymentId);

        const orderInfo = {};
        orderInfo[paymentId] = {
          cartItems,
          addressInfo,
          date: new Date().toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          }),
        };
        console.log(orderInfo);
        dispatch(getOrderPlaced(orderInfo));
        handelOnCompleteOrder();
      },

      theme: {
        color: "#3399cc",
      },
    };

    var pay = new window.Razorpay(options);
    pay.open();
    // console.log(pay)
  };

  return (
    <div
      className="sticky h-full p-6 mt-6 mb-5 bg-white border rounded-lg shadow-md md:mt-0 md:w-1/3 top-28"
      style={{
        backgroundColor: mode === "dark" ? "rgb(32 33 34)" : "",
        color: mode === "dark" ? "white" : "",
      }}
    >
      <div className="flex justify-between mb-2">
        <p
          className="text-gray-700"
          style={{ color: mode === "dark" ? "white" : "" }}
        >
          Subtotal
        </p>
        <p
          className="text-gray-700"
          style={{ color: mode === "dark" ? "white" : "" }}
        >
          {parseFloat(total).toFixed(2)}
        </p>
      </div>
      <div className="flex justify-between">
        <p
          className="text-gray-700"
          style={{ color: mode === "dark" ? "white" : "" }}
        >
          Shipping
        </p>
        <p
          className="text-gray-700"
          style={{ color: mode === "dark" ? "white" : "" }}
        >
          {parseFloat(total * (1 / 20)).toFixed(2)}
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between mb-3">
        <p
          className="text-lg font-bold"
          style={{ color: mode === "dark" ? "white" : "" }}
        >
          Total
        </p>
        <div className="">
          <p
            className="mb-1 text-lg font-bold"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            {parseFloat(total + total * (1 / 20)).toFixed(2)}
          </p>
        </div>
      </div>
      <Modal
        name={name}
        address={address}
        pincode={pincode}
        phoneNumber={phoneNumber}
        setName={setName}
        setAddress={setAddress}
        setPincode={setPincode}
        setPhoneNumber={setPhoneNumber}
        buyNow={buyNow}
      />
    </div>
  );
}
