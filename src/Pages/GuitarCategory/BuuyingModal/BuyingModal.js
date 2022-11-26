import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../contexts/authprovider/authprovider';

const BuyingModal = ({ aboutGuitar, setAboutGuitar }) => {
    const { productName, resaleSale, image } = aboutGuitar;
    const { user } = useContext(AuthContext);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const product = form.product.value;
        const price = form.price.value;
        const location = form.location.value;
        const booking = {
            name,
            email,
            phone,
            product,
            price,
            location,
            image
        }
        console.log(booking);
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setAboutGuitar(null);
                    Swal.fire({
                        position: 'center center',
                        icon: 'success',
                        title: productName,
                        showConfirmButton: false,
                        timer: 2500
                    })
                    // refetch();
                }
                else {
                    toast.error(data.message);
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="buyingModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative  border border-3 border-white">
                    <label htmlFor="buyingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h1 className='text-4xl mb-3'>BOOKING FORM</h1>
                    <form onSubmit={handleSubmit}>
                        <label className="label">
                            <span className="label-text">Buyer's Name</span>
                        </label>
                        <input disabled type="text" name='name' value={user?.displayName} className="input input-bordered w-full" />

                        <label className="label">
                            <span className="label-text">Buyer's Email</span>
                        </label>
                        <input disabled type="text" name='email' value={user?.email} className="input input-bordered w-full" />

                        <label className="label">
                            <span className="label-text">Purchesing Product</span>
                        </label>
                        <input disabled type="text" name='product' value={productName} className="input input-bordered w-full" />

                        <label className="label">
                            <span className="label-text">Product Price</span>
                        </label>
                        <input disabled type="text" name='price' value={resaleSale} className="input input-bordered w-full" />

                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input type="text" name='phone' placeholder='Enter Your Phone Number' className="input input-bordered w-full" />

                        <label className="label">
                            <span className="label-text">Buying Location</span>
                        </label>
                        <input type="text" name='location' placeholder='Enter Your Location' className="input input-bordered w-full" />
                        <input className='btn btn-primary w-full mt-4' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BuyingModal;