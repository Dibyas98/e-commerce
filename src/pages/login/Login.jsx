import React,{useContext, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { myContext } from '../../context/Data';
import Loading from '../../component/loading/Loading'
import { ToastContainer, toast } from 'react-toastify';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, fireDB } from '../../firebase/Firebase';
import { Firestore, collection, doc, getDoc, getFirestore } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { getCartLogin } from '../../redux/cartslice';

export default function Login() {
    const [loading,setloading] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {setUser,handelUser} = useContext(myContext);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    

    
    
    const signin = async ()=>{
        setloading(true)
        if(email == '' || password == ''){
            setloading(false)
            return toast.error("All fields are required",{
                autoClose:1000,
                position:'top-center',
                hideProgressBar:true
                
            });
        }
        try {
            const res = await signInWithEmailAndPassword(auth,email,password);
            // console.log(res.user.uid);
            const userref = doc(fireDB,'users',res.user.uid);
            const dataSnap = (await getDoc(userref)).data();
            console.log(dataSnap);
            
            setUser(dataSnap)
            console.log(dataSnap);
            handelUser(dataSnap)
            setloading(false);
            const cart = doc(fireDB,'cart',res.user.uid);
            const cartSnap =(await getDoc(cart)).data();
            dispatch(getCartLogin(cartSnap))
            console.log(cartSnap);
            return navigate('/')
            
        } catch (error) {
            setloading(false);
            return toast.warning(error,{
                autoClose:500
            })
            
        }
    }
  return (
    <div className='flex justify-center py-20 h-54'>
            {loading && <div className="fixed flex items-center justify-center w-screen h-screen bg=[#ddd]"><Loading/></div>}
            <div className='px-10 py-10 bg-gray-800 rounded-xl'>
                <div className="">
                    <h1 className='mb-4 text-xl font-bold text-center text-white'>Login</h1>
                </div>
                <div>
                    <input type="email"
                        name='email'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Email'
                    />
                </div>
                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Password'
                    />
                </div>
                <div className='flex justify-center mb-3 '>
                    <button
                    onClick={signin}
                        className='w-full px-2 py-2 font-bold text-black bg-yellow-500 rounded-lg disabled:bg-yellow-200' disabled={loading?true:false}>
                        Login
                        
                    </button>
                </div>
                <ToastContainer />
                <div>
                    <h2 className='text-white'>Don't have an account <Link className='font-bold text-yellow-500 ' to={'/signup'}>Signup</Link></h2>
                </div>
            </div>
        </div>
  )
}