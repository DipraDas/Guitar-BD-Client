import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import check from '../../../assets/images/dashboardImage/check3.png';

const AllSellers = () => {
    const [deletingSeller, setDeletingSeller] = useState(null)
    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users/sellers', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            return data;
        }
    });
    const handleVarifySeller = seller => {
        fetch(`http://localhost:5000/users/sellers`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(seller)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'center-center',
                        icon: 'success',
                        title: 'Varified',
                        showConfirmButton: false,
                        timer: 2000
                    })
                    refetch()
                }
            })
    }



    const closeModal = () => {
        setDeletingSeller(null);
    }
    const handleDetetingSeller = seller => {
        console.log(seller);
        fetch(`http://localhost:5000/users/sellers/${seller._id}`, {
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
                        title: 'Seller Deleted Successfully',
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
            })
    }
    return (
        <div className='p-8'>
            <div>
                <h1 className='text-3xl'>All Seller</h1>
            </div>
            <div className="overflow-x-auto my-8">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Varify</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map((seller, i) =>
                                <tr key={seller._id} className="hover">
                                    <th>{i + 1}</th>
                                    <td>{seller.name}</td>
                                    <td>{seller.email}</td>
                                    <td>{seller.role}</td>
                                    <td>{!seller.verified && <button onClick={() => handleVarifySeller(seller)} className="btn btn-xs btn-outline btn-info">Verify</button>}
                                        {seller.verified && <img style={{width:'25px'}} src={check} alt="" /> }
                                    </td>
                                    <td>
                                        <label onClick={() => setDeletingSeller(seller)} htmlFor="confirmation-modal" className="btn btn-xs btn-error text-white">Delete</label>
                                    </td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>
            {
                deletingSeller && <ConfirmationModal
                    title={'Are you sure you want to delete'}
                    message={`If you delete ${deletingSeller.name}. It can not be done`}
                    successAction={handleDetetingSeller}
                    modalData={deletingSeller}
                    successButtonName={'Delete'}
                    closeModal={closeModal}
                ></ConfirmationModal>
            }
        </div >
    );
};

export default AllSellers;