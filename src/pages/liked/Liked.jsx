import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import Card from '../allproducts/card/Card';
import { myContext } from '../../context/Data';
import LikedProductCard from '../../component/LIkedProductCard/LikedProductCard';


export default function Liked() {
  const { mode, user } = useContext(myContext);
  const LikedProduct = useSelector((store) => store.liked.liked);
  console.log(LikedProduct);
  return (
    <div className='flex flex-col items-start xl:items-center h-auto gap-4 py-11 ' style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
      {
        LikedProduct.length > 0 ? LikedProduct.map((prod) =>{
          return <LikedProductCard key={prod.product_id} prod={prod}></LikedProductCard>
      }):<h1 className='text-5xl'>No Product Add</h1>
      }
    </div>
  )
}
