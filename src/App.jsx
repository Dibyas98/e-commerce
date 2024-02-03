import { useState } from 'react'

import './App.css'
import Data from './context/Data'
import Navbar from './component/navbar/Navbar'

function App() {

  return (
    <>
     <Data>
      <Navbar></Navbar>
     </Data>
     
    </>
  )
}

export default App
