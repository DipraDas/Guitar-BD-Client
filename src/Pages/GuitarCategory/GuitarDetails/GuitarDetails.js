import React, { useEffect } from 'react';
import './GuitarDetails.css';

const GuitarDetails = ({ guitar, setAboutGuitar }) => {
    const { image, productName, location, resaleSale, orginalPrice, usedTime, yearsOfPurchase, seller, mobile } = guitar;
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='border p-3 imageLight'>
            <div className=''>
                <img className='brightness-50' src={image} alt="" />
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
                <div className='flex mt-4'>
                {guitar.verified && <p className='text-blue-500 text-xl font-bold mr-3'>✔</p>}
                    <h1 className=''>Seller Name: {seller}</h1>
                </div>
                <h1 className=''>Seller's Number: {mobile}</h1>
                <h1 className=''>Seller's Location: {location}</h1>
                <label
                    htmlFor="buyingModal"
                    className="btn  btn-primary mt-3"
                    onClick={() => setAboutGuitar(guitar)}
                >Book Now
                </label>
            </div>
        </div>
    );
};

export default GuitarDetails;