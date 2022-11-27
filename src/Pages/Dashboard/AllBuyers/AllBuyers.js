import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const AllBuyers = () => {
    const [deletingBuyer, setDeletingBuyer] = useState(null)
    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users/buyers', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            return data;
        }
    });

    const closeModal = () => {
        setDeletingBuyer(null);
    }
    const handleDetetingBuyer = user => {
        fetch(`http://localhost:5000/users/buyers/${user._id}`, {
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
                        title: 'Buyer Deleted Successfully',
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
            })
    }
    return (
        <div className='p-8'>
            <div>
                <h1 className='text-3xl'>All Buyer</h1>
            </div>
            <div className="overflow-x-auto my-8">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers.map((buyer, i) =>
                                <tr key={buyer._id} className="hover">
                                    <th>{i + 1}</th>
                                    <td>{buyer.name}</td>
                                    <td>{buyer.email}</td>
                                    <td>{buyer.role}</td>
                                    <td>
                                        <label onClick={() => setDeletingBuyer(buyer)} htmlFor="confirmation-modal" className="btn btn-xs btn-error text-white">Delete</label>
                                    </td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>
            {
                deletingBuyer && <ConfirmationModal
                    title={'Are you sure you want to delete'}
                    message={`If you delete ${deletingBuyer.name}. It can not be done`}
                    successAction={handleDetetingBuyer}
                    modalData={deletingBuyer}
                    successButtonName={'Delete'}
                    closeModal={closeModal}
                ></ConfirmationModal>
            }
        </div >
    );
};

export default AllBuyers;