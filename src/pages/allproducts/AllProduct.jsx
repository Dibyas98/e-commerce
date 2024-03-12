import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Card from './card/Card';
// import { apidata } from '../../apidata';
import { myContext } from '../../context/Data';
import { useSelector } from 'react-redux';
import { getSearchData } from '../../redux/searchslice';
import Loading from '../../component/loading/Loading';

export default function AllProduct() {
    const {mode}= useContext(myContext);
    const param = useParams();
    // console.log(apidata.data);
    const apidata = useSelector((store) => store.search.searchData);
    // console.log(apidata);
  return (
    <div className='flex flex-col h-auto gap-4 py-11 ' style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
      {
        apidata.length>0?apidata.map((prod) =>{
          return <Card key={prod.product_id} prod={prod}></Card>
      }):<Loading></Loading>
      }
    </div>
  )
}
