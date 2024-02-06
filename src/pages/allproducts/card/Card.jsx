import React, { useContext } from 'react'
import Rate from '../../../component/rating/Rate'
import { Link, useNavigate } from 'react-router-dom'
import { myContext } from '../../../context/Data'
export default function Card({ prod }) {
    const { mode } = useContext(myContext)
    return (
        <Link to={`/product/${prod.asin}/${prod.title}`} className='flex w-1/2 h-auto gap-3 mx-auto ' style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
            <div className='flex justify-center w-36'>
                <img src={prod.image} alt="" />
            </div>
            <div className='flex flex-col gap-2 py-3'>
                <h1>{prod.title}</h1>
                <div className='flex w-auto gap-2'>
                    <Rate value={prod.stars} />
                    <h1>{prod.
                        rating_count
                    }+</h1>
                </div>
                <h1>{prod.price} {prod.original_price
                    ? <span className='px-2 line-through'>M.R.P: {prod.original_price
                    }</span> : null}</h1>
                <p>Save Extra with NO Cost EMI</p>
                <p>Free Delivery</p>
            </div>
        </Link>
    )
}
