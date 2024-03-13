import React, { useContext, useEffect, useState } from "react";
import { myContext } from "../../context/Data";

export default function ProductFilter() {
  const { handelSortFilter,setSortFilter } = useContext(myContext);
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
    <div>
      <h1>Fillters</h1>
      <h2>Price</h2>
      <div>
        <input type="range" />
        <select name="" id="">
          <option value="500">500</option>
          <option value="10000">10000</option>
        </select>
        <select name="" id=""></select>
      </div>
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
      <input
        type="radio"
        name="sort"
        id=""
        checked={sel == "High to Low" ? true : false}
        value={"High to Low"}
        onChange={(e) => {
          handelSel(e)
          handelSortFilter(e)}}
      />
      High to Low
      <input
        type="radio"
        name="sort"
        id=""
        value={'reset'}
        checked={sel == "reset" ? true : false}
        onChange={(e) => {
          handelSel(e)
          handelSortFilter(e)}}
      />
      Reset
    </div>
  );
}
