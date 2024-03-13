import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Card from './card/Card';
import { apidata } from '../../apidata';
import { myContext } from '../../context/Data';
import Loading from '../../component/loading/Loading';
import ProductFilter from '../../component/productfilter/ProductFilter'
import { useSelector } from 'react-redux';

export default function AllProduct() {
    const { mode, sortFilter,handelFilterData } = useContext(myContext);
    const param = useParams();
    // console.log(apidata.data);
    const apidata = useSelector((store) => store.search.searchData);
      handelFilterData()
    return (
        <div className='flex flex-col xl:flex-row h-auto gap-10 px-3 py-11 relative' style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '' }}>
            <div className='bg-slate-600 w-full top-24 xl:w-1/4 h-24 sticky xl:top-28'>
                <ProductFilter></ProductFilter>
            </div>
            <div className='w-full xl:w-3/4'>
                {sortFilter.length > 0 ? (
                    sortFilter.map((prod) => <Card key={prod.product_id} prod={prod} />)
                ) : (
                    apidata.length > 0 ? (
                        apidata.map((prod) => <Card key={prod.product_id} prod={prod} />)
                    ) : (
                        <Loading />
                    )
                )}
            </div>
        </div>
    );
}
