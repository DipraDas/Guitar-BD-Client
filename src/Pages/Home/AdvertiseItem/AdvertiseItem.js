import React, { useEffect, useState } from 'react';
import Advertise from '../Advertise/Advertise';
import './AdvertiseItem.css'

const AdvertiseItem = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/advertiseproducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <>
            {products.length &&
                <div className='advertiseBackground flex justify-around flex-wrap gap-8 '>
                    {
                        products.map(product => <Advertise
                            key={product._id}
                            product={product}></Advertise>)
                    }
                </div>}
        </>
    );
};

export default AdvertiseItem;