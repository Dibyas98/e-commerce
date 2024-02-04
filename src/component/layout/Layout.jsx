import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import Cart from '../../pages/cart/Cart'
import ProductPage from '../../pages/product-page/ProductPage'



export default function Layout() {
  return (
    <>
      <Navbar></Navbar>
      <ProductPage></ProductPage>
      <Footer></Footer>
    </>
  )
}
