import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './GuitarDetails.css';

const GuitarDetails = ({ guitar }) => {
    const { image, productName, location, resaleSale, orginalPrice, usedTime, yearsOfPurchase, seller } = guitar;
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='border p-3 imageLight'>
            <div className=''>
                <img className='brightness-50'src={image} alt="" />
            </div>
            <div className='pt-8'>
                <h1 className='text-2xl flex gap-3 mb-6'>
                    <h1>Model:</h1>
                    <h1>{productName}</h1>
                </h1>
                <hr />
                <h1 className='text-3xl mt-5'>Resale Price:<span className='text-white'>৳{resaleSale}</span></h1>
                <h1 className='text-md text-gray-400 mb-6'>Orginal Price: <del>৳{orginalPrice}</del></h1>
                <h1 className=''>Used Time: {usedTime}</h1>
                <h1 className=''>Posted On: {yearsOfPurchase}</h1>
                <h1 className='mt-4'>Seller Name: {seller}</h1>
                <h1 className=''>Seller's Location: {location}</h1>
                <Link to="" className='btn btn-primary mt-3'>Book Now</Link>
            </div>
        </div>
    );
};

export default GuitarDetails;