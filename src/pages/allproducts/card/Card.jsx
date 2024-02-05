import React, { useContext } from 'react'
import Rate from '../../../component/rating/Rate'
import { Link, useNavigate } from 'react-router-dom'
import { myContext } from '../../../context/Data'
export default function Card() {
    const {mode}= useContext(myContext)
    const navigate = useNavigate()
    const handeleProfuctInfo=()=>{
        console.log('g');
        return navigate('/product/fff/123')
      }
  return (
    <div  className='flex w-1/2 h-auto gap-3 mx-auto ' onClick={()=>{handeleProfuctInfo()}} style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
        <img src="https://m.media-amazon.com/images/I/61pz7VA6KoL._AC_UY218_.jpg" alt="" />
        <div className='flex flex-col gap-2 py-3'>
        <h1>Apple iPhone 12, 64GB, Blue - Fully Unlocked (Renewed)</h1>
        <div><Rate value={4.5}/> 4933+</div>
        <h1>₹474.95 <span>M.R.P: ₹ 397.76</span></h1>
        <p>Save Extra with NO Cost EMI</p>
    <p>Free Delivery</p>
        </div>
    </div>
  )
}
