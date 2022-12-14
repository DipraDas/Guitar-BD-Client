import { format } from 'date-fns';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../contexts/authprovider/authprovider';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const currnetYear = new Date().getFullYear();
    const today = format(new Date(), 'PP')
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const handleAddProduct = data => {
        console.log(data)
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                }
                console.log(imgData);
                const instrument = {
                    seller: user.displayName,
                    email: user.email,
                    productName: data.productName,
                    condition: data.condition,
                    mobile: data.mobile,
                    location: data.location,
                    typeId: data.typeId,
                    orginalPrice: data.orginalPrice,
                    resaleSale: data.resaleSale,
                    yearsOfPurchase: data.yearsOfPurchase,
                    description: data.description,
                    image: imgData.data.url,
                    usedTime: currnetYear - data.yearsOfPurchase,
                    posted: today

                }
                fetch('https://guitar-bd-server.vercel.app/instrument', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(instrument)
                })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result);
                        navigate('/dashboard/myProducts');
                        Swal.fire({
                            position: 'center center',
                            icon: 'success',
                            title: 'Produce Added Successfully',
                            showConfirmButton: false,
                            timer: 2000
                        })
                    })
            })
    }

    return (
        <div className='flex justify-center items-center my-5'>
            <div className='w-full px-7 border border-purple-300 my-10 py-10 mx-5 '>
                <div className="text-3xl text-center">Add Product</div>
                <form onSubmit={handleSubmit(handleAddProduct)}>
                    <div className=''>
                        <div className="form-control w-full mb-2">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input type="text" className="input input-bordered w-full"
                                {...register("productName")}
                            />
                        </div>
                    </div>

                    <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2'>
                        <div className="form-control w-full mb-2">
                            <label className="label">
                                <span className="label-text">Product Condition</span>
                            </label>
                            <select className="select select-bordered w-full"
                                {...register("condition", {
                                    required: true
                                })}
                            >
                                <option value="Excellent">Excellent</option>
                                <option value="Good">Good</option>
                                <option value="Fair">Fair</option>
                            </select>
                        </div>
                        <div className="form-control w-full mb-2">
                            <label className="label">
                                <span className="label-text">Mobile Number</span>
                            </label>
                            <input type="text" className="input input-bordered w-full"
                                {...register("mobile", {
                                    required: true
                                })}
                            />
                        </div>
                    </div>

                    <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2'>
                        <div className="form-control w-full mb-2">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input type="text" className="input input-bordered w-full"
                                {...register("location")}
                            />
                        </div>
                        <div className="form-control w-full mb-2">
                            <label className="label">
                                <span className="label-text">Guitar Type</span>
                            </label>
                            <select className="select select-bordered w-full"
                                {...register("typeId", {
                                    required: true
                                })}
                            >
                                <option value="01">Electric</option>
                                <option value="02">Bass</option>
                                <option value="03">Acoustic</option>
                            </select>
                        </div>
                    </div>

                    <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2'>
                        <div className="form-control w-full mb-2">
                            <label className="label">
                                <span className="label-text">Orginal Price</span>
                            </label>
                            <input type="text" className="input input-bordered w-full"
                                {...register("orginalPrice")}
                            />
                        </div>
                        <div className="form-control w-full mb-2">
                            <label className="label">
                                <span className="label-text">Selling Price</span>
                            </label>
                            <input type="text" className="input input-bordered w-full"
                                {...register("resaleSale", {
                                    required: true
                                })}
                            />
                        </div>
                    </div>

                    <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2'>
                        <div className="form-control w-full mb-2">
                            <label className="label">
                                <span className="label-text">Year Of Purchase</span>
                            </label>
                            <select className="select select-bordered w-full"
                                {...register("yearsOfPurchase", {
                                    required: true
                                })}
                            >
                                <option value="2000">2000</option>
                                <option value="2001">2001</option>
                                <option value="2002">2002</option>
                                <option value="2003">2003</option>
                                <option value="2004">2004</option>
                                <option value="2005">2005</option>
                                <option value="2006">2006</option>
                                <option value="2007">2007</option>
                                <option value="2008">2008</option>
                                <option value="2009">2009</option>
                                <option value="2010">2010</option>
                                <option value="2011">2011</option>
                                <option value="2012">2012</option>
                                <option value="2013">2013</option>
                                <option value="2014">2014</option>
                                <option value="2015">2015</option>
                                <option value="2016">2016</option>
                                <option value="2017">2017</option>
                                <option value="2018">2018</option>
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                            </select>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="file" className="file-input file-input-bordered w-full"
                                {...register("image")} />
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea className="textarea textarea-bordered h-24"  {...register("description")}></textarea>
                    </div>

                    <input className='btn btn-accent my-5' value="Add Product" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;


