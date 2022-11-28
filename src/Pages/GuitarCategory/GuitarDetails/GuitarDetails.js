import React, { useContext, useEffect } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../contexts/authprovider/authprovider';
import './GuitarDetails.css';

const GuitarDetails = ({ guitar, setAboutGuitar }) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const { user } = useContext(AuthContext);
    const { _id, productName, image, resaleSale, seller, mobile, location, posted, paid, status, orginalPrice, usedTime, yearsOfPurchase } = guitar;
    const wishlist = {
        productId: _id,
        productName: productName,
        image,
        price: resaleSale,
        sellerName: seller,
        email: user.email,
        phone: mobile,
        location: location,
    }

    const handleAddToWishlist = () => {

        fetch('http://localhost:5000/wishlist', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(wishlist),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setAboutGuitar(null);
                    Swal.fire({
                        position: 'center center',
                        icon: 'success',
                        title: 'Successfully Added to WIshlist',
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
                else {
                    Swal.fire({
                        position: 'center center',
                        icon: 'error',
                        title: data.message
                    })
                }
            })

        console.log(wishlist);
    }
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
                    <h1 className=''>Used Time: {usedTime} Years</h1>
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
                    <button onClick={handleAddToWishlist} className='btn btn-primary ml-5'>Add to Wishlish</button>
                </div>
            </div>
        );
    };

    export default GuitarDetails;