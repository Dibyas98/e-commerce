import React,{useState} from "react";
import Loading from '../../component/loading/Loading'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";
import Track from "../../component/track/Track";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/Firebase";
import { Timestamp,doc,setDoc } from "firebase/firestore";
import { useSelector } from "react-redux";

export default function SignUp() {
    const [loading,setloading] = useState(false)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const cart= useSelector((store) => store.cart.cartdata)
    const sigup = async () =>{
        setloading(true);
        if(name === '' || email === '' || password === ''){
            setloading(false)
            return toast.error("All fields are required");
        }
        
        try {
          const users = await createUserWithEmailAndPassword(auth, email, password);
          // await users.user.displayName=name
            const user={
              name:name,
              uid:users.user.uid,
              email:users.user.email,
              time:Timestamp.now()
            }
            const cart = {}
            const order = {}
            const liked = {}
           await setDoc(doc(fireDB,'users',users.user.uid),user)
           await setDoc(doc(fireDB,'cart',users.user.uid),cart)
           await setDoc(doc(fireDB,'order',users.user.uid),order)
           await setDoc(doc(fireDB,'liked',users.user.uid),liked)
           setloading(false)
          return navigate('/login')
       
       ;
        } catch (error) {
          console.log(error);
          setloading(false)
          
        }
    }
  return (
    <div className="flex justify-center py-20 h-1/2">
      {loading && <div className="fixed flex items-center justify-center w-screen h-screen bg=[#ddd]"><Loading/></div>}
      <div className="px-10 py-10 bg-gray-800 rounded-xl">
        <div className="">
          <h1 className="mb-4 text-xl font-bold text-center text-white">
            Signup
          </h1>
        </div>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Name"
          />
        </div>

        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Password"
          />
        </div>
        <div className="flex justify-center mb-3 ">
          <button
            onClick={sigup}
            className="w-full px-2 py-2 font-bold text-white bg-red-500 rounded-lg disabled:bg-red-300"
            disabled={loading?true:false}
          >
            Signup
          </button>
        </div>
        <ToastContainer />
        <div>
          <h2 className="text-white">
            Have an account{" "}
            <Link className="font-bold text-red-500 " to={"/login"}>
              Login
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}
