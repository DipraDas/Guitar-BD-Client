import React from 'react';
import './Advertise.css';

const Advertise = ({ product }) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-xl w-64 my-20 mx-auto border-2 border-yellow-300">
                <figure><img className='mt-2 rounded-lg' src={product.image} alt="Shoes" style={{ height: '300px' }} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{product.productName}</h2>
                    <h2 className="card-title">Price: ৳{product.resaleSale}</h2>
                </div>
                <h1 className='text-center'>!! Flash Sale !!</h1>
            </div>
        </div>
    );
};

export default Advertise;