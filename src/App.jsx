import { useState } from 'react'

import './App.css'
import Data from './context/Data'
import Layout from './component/layout/Layout'

function App() {

  return (
    <>
     <Data>
      <Layout></Layout>
     </Data>
     
    </>
  )
}

export default App
