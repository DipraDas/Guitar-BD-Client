import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/authprovider/authprovider';
import Loading from '../../Shared/Loading/Loading';

const MyWishlist = () => {
    const {user}=useContext(AuthContext);
    const url = `http://localhost:5000/mywishlist?email=${user?.email}`;

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
    return (
        <div className='p-8'>
        <div>
            <h1 className='text-xl font-bold'>Manage Products: {products?.length}</h1>
        </div>
        <div className="overflow-x-auto my-8">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Seller Contact</th>
                        <th>Pay</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, i) =>
                            <tr key={product._id}  className="hover">
                                <th>{i + 1}</th>
                                <td>{product.productName}</td>
                                <td>{product.price}</td>
                                <td>{product.phone}</td>
                                <td>
                                    {
                                        product.resalePrice && !product.paid &&
                                        <p>Avaiable</p>
                                    }
                                    {
                                        product.resalePrice && product.paid &&
                                        <p className='text-green-500'>Paid</p>
                                    }
                                </td>
                                {/* <td>
                                    {/* {<button onClick={() => handleAdvertise(product._id)} className="btn btn-xs btn-outline btn-primary" disabled={product.advertise}>Advertise</button>}
                                </td>
                                <td>
                                    <label onClick={() => setDeletingProduct(product)} htmlFor="confirmation-modal" className="btn btn-xs btn-error text-white">Delete</label> 
                                </td> */}
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default MyWishlist;