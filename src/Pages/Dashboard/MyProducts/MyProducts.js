import React, { useState, useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';
import Swal from 'sweetalert2'
import { AuthContext } from '../../../contexts/authprovider/authprovider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const [deletingProduct, setDeletingProduct] = useState(null);
    const closeModal = () => {
        setDeletingProduct(null);
    }
    const handleDetetingProduct = product => {
        console.log(product);
        fetch(`http://localhost:5000/product/${product._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'center-center',
                        icon: 'error',
                        title: 'Product Deleted Successfully',
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
            })
    }

    const handleAdvertise = id => {
        fetch(`http://localhost:5000/product/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'center-center',
                        icon: 'success',
                        title: 'Product Added For Advertise',
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
            })
    }



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

    if (isLoading) {
        <Loading></Loading>
    }
    return (
        <div className='p-8'>
            <div>
                <h1 className='text-xl font-bold'>My Products: {products?.length}</h1>
            </div>
            <div className="overflow-x-auto my-8">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Price ৳</th>
                            <th>Condition</th>
                            <th>Status</th>
                            <th>Advertising</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, i) =>
                                <tr key={product._id}>
                                    <th>{i + 1}</th>
                                    <td>{product.productName}</td>
                                    <td>{product.resaleSale}</td>
                                    <td>{product.condition}</td>
                                    <td>
                                        <h1 className='text-green-500'>Available</h1>
                                    </td>
                                    <td>
                                        {<button onClick={() => handleAdvertise(product._id)} className="btn btn-xs btn-outline btn-primary" disabled={product.advertise}>Advertise</button>}
                                    </td>
                                    <td>
                                        <label onClick={() => setDeletingProduct(product)} htmlFor="confirmation-modal" className="btn btn-xs btn-error text-white">Delete</label>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingProduct && <ConfirmationModal
                    title={'Are you sure you want to delete'}
                    message={`If you delete ${deletingProduct.name}. It can not be done`}
                    successAction={handleDetetingProduct}
                    modalData={deletingProduct}
                    successButtonName={'Delete'}
                    closeModal={closeModal}
                ></ConfirmationModal>
            }
        </div >
    );
};

export default MyProducts;