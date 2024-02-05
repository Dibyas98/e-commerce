import { useState } from 'react'

import './App.css'
import Data from './context/Data'
import Layout from './component/layout/Layout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import SignUp from './pages/signup/SignUp'
import Login from './pages/login/Login'
import Order from './pages/Order/Order'
import AllProduct from './pages/allproducts/AllProduct'
import ProductPage from './pages/product-page/ProductPage'

function App() {
  
  const route = createBrowserRouter([
    {
      element: <Layout></Layout>,
      children:[
        {
          path:'/',
          element: <Home></Home>
        },
        {
          path:'/cart',
          element: <Cart></Cart>
        },
        {
          path:'/signup',
          element: <SignUp></SignUp>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/order',
          element:<Order></Order>
        },
        {
          path:'/product/:id',
          element:<AllProduct></AllProduct>,
          children:[
            
          ]
        },
        {
          path:'/product/:id/:name',
          element:<ProductPage></ProductPage>
        }
        

      ]

    }
  ])

  return (
    <>
     <Data>
      <RouterProvider router={route}></RouterProvider>
     </Data>
     
    </>
  )
}

export default App
