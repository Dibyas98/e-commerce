import React, { useContext } from 'react'
import { myContext } from '../../../context/Data'

export default function Logo() {
    const {mode} = useContext(myContext)
  return (
    <div className="flex ml-4 lg:ml-0">
                <a href={"/"} className="flex">
                  <div className="flex ">
                    <h1
                      className="px-2 py-1 text-2xl font-bold text-black rounded "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      E-Bharat
                    </h1>
                  </div>
                </a>
              </div>
  )
}
