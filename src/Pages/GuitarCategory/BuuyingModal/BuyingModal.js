import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/authprovider/authprovider';

const BuyingModal = ({ aboutGuitar }) => {
    const { productName, resaleSale } = aboutGuitar;
    const { user } = useContext(AuthContext);
    return (
        <div>
            <input type="checkbox" id="buyingModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative  border border-3 border-white">
                    <label htmlFor="buyingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h1 className='text-4xl mb-3'>BOOKING FORM</h1>
                    <form>
                        <label className="label">
                            <span className="label-text">Buyer's Name</span>
                        </label>
                        <input disabled type="text" value={user?.displayName} className="input input-bordered w-full" />

                        <label className="label">
                            <span className="label-text">Buyer's Email</span>
                        </label>
                        <input disabled type="text" value={user?.email} className="input input-bordered w-full" />

                        <label className="label">
                            <span className="label-text">Purchesing Product</span>
                        </label>
                        <input disabled type="text" value={productName} className="input input-bordered w-full" />

                        <label className="label">
                            <span className="label-text">Product Price</span>
                        </label>
                        <input disabled type="text" value={resaleSale} className="input input-bordered w-full" />

                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input type="text" placeholder='Enter Your Phone Number' className="input input-bordered w-full" />

                        <label className="label">
                            <span className="label-text">Buying Location</span>
                        </label>
                        <input type="text" placeholder='Enter Your Location' className="input input-bordered w-full" />
                        <input className='btn btn-primary w-full mt-4' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BuyingModal;