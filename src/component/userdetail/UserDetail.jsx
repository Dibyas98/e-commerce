import React, { useContext } from "react";
import { myContext } from "../../context/Data";
import { Link, useNavigate } from "react-router-dom";

export default function UserDetail({displayde}) {
  const { mode, user, setUser, handelUser,handelLougoutLiked} = useContext(myContext);
  const navigate = useNavigate()
  return (
    <div
      className="absolute bg-red-400  rounded-md text-xs text-nowrap top-10"
       style={{left: "-70px" , color: mode === "dark" ? "white" : ""}}
    >
      <div className="px-5 pt-2 flex flex-col gap-2">
      <p className="font-bold">{user.name}</p>
      <p>{user.email}</p>
      </div>
      <div className="flex w-full justify-between p-2">
        <Link to={'/liked'}
          className="text-sm font-medium text-gray-700 "
          
          style={{ color: mode === "dark" ? "white" : "" }}
        >
          Liked
        </Link>
        <Link
          to={"/order"}
          className="text-sm font-medium text-gray-700 "
          style={{ color: mode === "dark" ? "white" : "" }}
        >
          <button>Order</button>
        </Link>
      </div>
      <div className="w-full flex justify-center">
      <button
          className="text-sm font-medium text-gray-700 "
          onClick={(e) => {
            setUser({});
            handelUser({});
            handelLougoutLiked()
            displayde(e)
            localStorage.setItem("cart", JSON.stringify([]));
            return navigate("/login");
          }}
          style={{ color: mode === "dark" ? "white" : "" }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
