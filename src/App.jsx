import { useState } from 'react'

import './App.css'
import Data from './context/Data'
import Layout from './component/layout/Layout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import SignUp from './pages/signup/SignUp'
import Login from './pages/login/Login'

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
