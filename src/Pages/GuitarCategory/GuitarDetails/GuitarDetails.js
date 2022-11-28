import React, { useContext, useEffect } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../contexts/authprovider/authprovider';
import './GuitarDetails.css';
import axios from "axios";
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const GuitarDetails = ({ guitar, setAboutGuitar }) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const { user } = useContext(AuthContext);
    const { _id, productName, image, resaleSale, seller, mobile, location, posted, paid, status, orginalPrice, usedTime, yearsOfPurchase } = guitar;

    const url = `http://localhost:5000/myproducts?email=${user?.email}`;
    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data
        }
    })


    const handleReport = id => {
        fetch(`http://localhost:5000/productReport/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    // refetch();
                    Swal.fire({
                        position: 'center-center',
                        icon: 'success',
                        title: 'Product Reported',
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
            }
            )
    }
    if (isLoading) {
        <Loading></Loading>
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
                <h1 className=''>Year of Purchase: {yearsOfPurchase}</h1>
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
                <button onClick={() => handleReport(_id)} className='btn btn-error btn-outline ml-5'>Report</button>
            </div>
        </div>
    );
};

export default GuitarDetails;