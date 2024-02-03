import React, { useState, Fragment, useContext } from "react";
import { FiSun } from "react-icons/fi";
import { BsFillCloudSunFill } from "react-icons/bs";
import { myContext } from "../../../context/Data";

export default function Mode() {
    const { mode, togglemode } = useContext(myContext);
  return (
    <div className="flex lg:ml-6">
    <button className="" onClick={togglemode}>
      {mode == "light" ? (
        <FiSun className="" size={30} />
      ) : "dark" ? (
        <BsFillCloudSunFill size={30} />
      ) : (
        ""
      )}
    </button>
  </div>
  )
}
