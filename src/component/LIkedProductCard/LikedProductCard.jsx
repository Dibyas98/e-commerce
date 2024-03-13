import React, { useContext,useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Rate from "../rating/Rate";
import { myContext } from "../../context/Data";
import { useSelector } from "react-redux";
export default function LikedProductCard({ prod }) {
  const { mode, handelAddCart, handelLikedData } = useContext(myContext);
    const LikedData = useSelector((store) => store.liked.liked)
    // const productDetails = LikedData.find((ent) => ent.product_id == params.id)
    window.scrollTo(0, 0);
    const[like,setlike] = useState(true);
    const handelLikeBtn = async (arg) => {
        setlike(!like);
        handelLikedData(prod, arg);
    }
    

    // const handelLikedOrNot = LikedData.find((ent) => ent.product_id == params.id);
    // useEffect(()=>{
    //     if(handelLikedOrNot){
    //         setlike(!like)
    //     }
    // },[])

  return (
    <div className="w-full flex items-center gap-2  xl:w-2/4  p-2">
      <div
        className="flex w-full h-auto xl:gap-8 items-center"
        style={{
          backgroundColor: mode === "dark" ? "#282c34" : "",
          color: mode === "dark" ? "white" : "",
        }}
      >
        <div className="flex justify-between w-28 h-28">
          <img src={prod.product_photos[0]} className="rounded-2xl" alt="" />
        </div>
        <div className="flex w-3/5 flex-col gap-2 py-3">
          <h1>{prod.product_title}</h1>
          <div className="flex w-auto gap-2">
            {prod.offer.store_rating ? (
              <Rate value={prod.offer.store_rating} />
            ) : null}
            {/* <h1>{prod.
                        rating_count
                    }+</h1> */}
          </div>
          <h1>
            {prod.offer.price}{" "}
            {prod.original_price ? (
              <span className="px-2 line-through">
                M.R.P: {prod.offer.original_price}
              </span>
            ) : null}
          </h1>
          <p>shipping:- {prod.offer.shipping}</p>
          {/* <p>Free Delivery</p> */}
        </div>
      </div>
      <div className="flex flex-col gap-5 items-center">
        <button
          className="flex px-0 xl:px-6  ml-auto text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600"
          onClick={() => handelAddCart(prod)}
        >
          Add To Cart
        </button>
        <button className="inline-flex items-center justify-center w-10 h-10 p-0 ml-4 text-gray-500 bg-gray-200 border-0 rounded-full">
          <svg
            onClick={() => handelLikeBtn(like)}
            style={{ fill: like ? "red" : "white" }}
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
