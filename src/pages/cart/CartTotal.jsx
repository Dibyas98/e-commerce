import React, { useContext,useState } from 'react'
import { myContext } from '../../context/Data'
import Modal from './Model'

export default function CartTotal({total}) {
    const {mode} = useContext(myContext)
    const [name, setName] = useState("")
    const [address, setAddress] = useState("");
    const [pincode, setPincode] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
  
  
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
        })
      }
    }

    const addressInfo = {
      name,
      address,
      pincode,
      phoneNumber,
      date: new Date().toLocaleString(
        "en-US",
        {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }
      )
    }

    console.log(addressInfo)

  //   var options = {
  //     key: "",
  //     key_secret: "",
  //     amount: parseInt(1 * 100),
  //     currency: "INR",
  //     order_receipt: 'order_rcptid_' + name,
  //     name: "E-Bharat",
  //     description: "for testing purpose",
  //     handler: function (response) {
  //         console.log(response)
  //         toast.success('Payment Successful')
  //     },
  
  //     theme: {
  //         color: "#3399cc"
  //     }
  // };
  
  // var pay = new window.Razorpay(options);
  // pay.open();
  // console.log(pay)


    
  return (
    <div className="sticky h-full p-6 mt-6 mb-5 bg-white border rounded-lg shadow-md md:mt-0 md:w-1/3 top-28" style={{ backgroundColor: mode === 'dark' ? 'rgb(32 33 34)' : '', color: mode === 'dark' ? 'white' : '', }}>
        <div className="flex justify-between mb-2">
          <p className="text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>Subtotal</p>
          <p className="text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>{total}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>Shipping</p>
          <p className="text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>{parseFloat(total*(1/20)).toFixed(2)}</p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between mb-3">
          <p className="text-lg font-bold" style={{ color: mode === 'dark' ? 'white' : '' }}>Total</p>
          <div className=''>
            <p className="mb-1 text-lg font-bold" style={{ color: mode === 'dark' ? 'white' : '' }}>{parseFloat(total+(total*(1/20))).toFixed(2)}</p>
          </div>
        </div>
        <Modal name={name} address={address} pincode={pincode} phoneNumber={phoneNumber} setName={setName} setAddress={setAddress} setPincode={setPincode} setPhoneNumber={setPhoneNumber} buyNow={buyNow} />
            
        
      </div>
  )
}
