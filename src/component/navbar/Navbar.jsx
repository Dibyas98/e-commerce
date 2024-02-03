import React, { useState, Fragment, useContext } from "react";
import { myContext } from "../../context/Data";
import Menu from "./menu/Menu";
import Mode from "./mode/Mode";
import Cart from "./cart/Cart";
import Logo from "./logo/Logo";
import MobileBar from "./mobile-bar/MobileBar";
import MobileMenu from "./mobile-menu/MobileMenu";


export default function Navbar() {
  
  const { mode, togglemode } = useContext(myContext);

  return (
    <div className="sticky top-0 z-50 bg-white ">
<MobileMenu/>


      <header className="relative bg-white">
        <p
          className="flex items-center justify-center h-10 px-4 text-sm font-medium text-white bg-pink-600 sm:px-6 lg:px-8"
          style={{
            backgroundColor: mode === "dark" ? "rgb(62 64 66)" : "",
            color: mode === "dark" ? "white" : "",
          }}
        >
          Get free delivery on orders over ₹300
        </p>
        <nav
          aria-label="Top"
          className="px-4 bg-gray-100 shadow-xl sm:px-6 lg:px-8 "
          style={{
            backgroundColor: mode === "dark" ? "#282c34" : "",
            color: mode === "dark" ? "white" : "",
          }}
        >
          <div className="">
            <div className="flex items-center h-16">
              <MobileBar/>

              {/* Logo */}
              <Logo/>
              <Menu />
              <Mode />
              <Cart />

            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
