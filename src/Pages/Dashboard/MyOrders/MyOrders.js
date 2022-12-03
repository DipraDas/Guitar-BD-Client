import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/authprovider/authprovider';

import Loading from '../../Shared/Loading/Loading';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const url = `https://guitar-bd-server.vercel.app/myorders?email=${user?.email}`;

    const { data: products = [], isLoading } = useQuery({
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

    if (isLoading) {
        <Loading></Loading>
    }
//Check
    return (
        <>
            <h1 className='text-3xl p-8'>My Orders</h1>
            <div className='grid gap-5 sm:grid-cols-1 md:grid-cols-2 px-5'>
                {
                    products?.map(product =>
                        <div key={product._id} className="card flex-col lg:flex-row card-side bg-base-100 shadow-xl my-10 border-2 border-gray-500">
                            <figure className='w-full lg:w-2/4'><img src={product.image} alt="Movie" /></figure>
                            <div className="card-body w-full lg:w-2/4">
                                <h2 className="card-title text-2xl">{product.product}</h2>
                                <hr />
                                <p className='font-light mt-3'>Price: ৳{product.price}
                                    <br />
                                    <br />
                                </p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary rounded-lg">PAY NOW</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default MyOrders;