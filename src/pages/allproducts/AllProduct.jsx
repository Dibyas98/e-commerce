import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Card from './card/Card';
import { apidata } from '../../apidata';
import { myContext } from '../../context/Data';

export default function AllProduct() {
    const {mode}= useContext(myContext);
    const param = useParams();
    // console.log(apidata.data);
    
    
  return (
    <div className='flex flex-col h-auto gap-4 py-11 ' style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
      {
        apidata.data.map((prod) =>{
            return <Card key={prod.asin} prod={prod}></Card>
        })
      }
    </div>
  )
}
