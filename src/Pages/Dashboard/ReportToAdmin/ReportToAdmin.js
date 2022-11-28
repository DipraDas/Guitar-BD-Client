import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const ReportedItems = () => {

    const [deletingProduct, setDeletingProduct] = useState(null);
    const closeModal = () => {
        setDeletingProduct(null);
    }
    const handleDetetingProduct = product => {
        fetch(`http://localhost:5000/reportedproduct/${product._id}`, {
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
                        icon: 'success',
                        title: 'Product Deleted Successfully',
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
            })
    }


    const url = `http://localhost:5000/showReports`;

    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products'],
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
                <h1 className='text-xl font-bold'>Reported Products: {products?.length}</h1>
            </div>
            <div className="overflow-x-auto my-8">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Seller Name</th>
                            <th>Seller Phone</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, i) =>
                                <tr key={product._id} className="hover">
                                    <th>{i + 1}</th>
                                    <td>{product.productName}</td>
                                    <td>{product.seller}</td>
                                    <td>{product.mobile}</td>

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

export default ReportedItems;