import React, { useContext, useEffect, useState } from "react";
import { myContext } from "../../context/Data";

export default function ProductFilter() {
  const { handelSortFilter,setSortFilter,mode } = useContext(myContext);
  const [sel, setSel] = useState("reset");
  const handelSel = (e) => {
    if (e.target.value == "reset") {
      setSel(e.target.value);
    } else if (e.target.value == "High to Low") {
      setSel(e.target.value);
    } else if (e.target.value == "Low to High") {
      setSel(e.target.value);
    }
  };
  useEffect(() =>{
    setSortFilter([])
  },[])
  return (
    <div className=" "  style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '' }}>
      <h1 className="text-center text-2xl font-semibold">Fillters</h1>
      <div >
      <h2 className="text-l font-medium p-2">Sort By</h2>
      {/* <div>
        <input type="range" />
        <select name="" id="">
          <option value="500">500</option>
          <option value="10000">10000</option>
        </select>
        <select name="" id=""></select>
      </div> */}
      <div className="flex justify-between px-2 py-2">
      <span className="">
      <input
        type="radio"
        name="sort"
        id=""
        checked={sel == "Low to High" ? true : false}
        value={"Low to High"}
        onChange={(e) => {
          handelSel(e)
          handelSortFilter(e)}} 
      />
      Low to High
      </span>
      <span><input
        type="radio"
        name="sort"
        id=""
        checked={sel == "High to Low" ? true : false}
        value={"High to Low"}
        onChange={(e) => {
          handelSel(e)
          handelSortFilter(e)}}
      />
      High to Low</span>
      <span><input
        type="radio"
        name="sort"
        id=""
        value={'reset'}
        checked={sel == "reset" ? true : false}
        onChange={(e) => {
          handelSel(e)
          handelSortFilter(e)}}
      />
      Reset</span>
      </div>
      </div>
    </div>
  );
}
