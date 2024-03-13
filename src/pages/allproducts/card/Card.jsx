import React, { useContext } from 'react'
import Rate from '../../../component/rating/Rate'
import { Link, useNavigate } from 'react-router-dom'
import { myContext } from '../../../context/Data'
export default function Card({ prod }) {
    const { mode } = useContext(myContext)
    const proname = prod.product_title.split(/[ \/]+/).join('%');


    return (
        <Link to={`/${prod.product_id}/${proname}`} className='flex w-full  h-auto gap-8 items-center' style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
            <div className='flex justify-between w-28 h-28'>
                <img src={prod.product_photos[0]} className='rounded-2xl' alt="" />
            </div>
            <div className='flex w-3/5 flex-col gap-2 py-3'>
                <h1>{prod.product_title}</h1>
                <div className='flex w-auto gap-2'>
                    {prod.offer.store_rating?<Rate value={prod.offer.store_rating} />:null}
                    {/* <h1>{prod.
                        rating_count
                    }+</h1> */}
                </div>
                <h1>{prod.offer.price} {prod.original_price
                    ? <span className='px-2 line-through'>M.R.P: {prod.offer.original_price
                    }</span> : null}</h1>
                <p>shipping:- {prod.offer.shipping}</p>
                {/* <p>Free Delivery</p> */}
            </div>
        </Link>
    )
}
