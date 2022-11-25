import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/authprovider/authprovider';
import toast from 'react-hot-toast';
import useToken from '../../../hooks/useToken';

const SignUp = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const [signupError, setSignupError] = useState('');
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);

    if (token) {
        navigate('/');
    }

    const handleSignUp = data => {
        console.log(data);
        setSignupError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.role)
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignupError(error.message);
            })
    }


    const saveUser = (name, email, role) => {
        const user = { name, email, role };
        console.log(user);
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email);
                console.log(data);
                toast.success('User Created Successfully');
            })
    }

    return (
        <div className='flex justify-center items-center'>
            <div className='w-96 px-7 border border-purple-300 my-20 py-16'>
                <div className="text-3xl">Sign Up</div>
                <div className='text-xs mt-1 mb-3'>Already Registered?<Link className='text-blue-400' to="/login"> Login</Link></div>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" className="input input-bordered w-full max-w-xs"
                            {...register("name")}
                        />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" className="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: true
                            })}
                        />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" className="input input-bordered w-full max-w-xs"
                            {...register("password", {
                                required: true
                            })}
                        />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Role</span>
                        </label>
                        <select className="select select-bordered w-full max-w-xs"
                            {...register("role", {
                                required: true
                            })}
                        >
                            <option default value="buyer">Buyer</option>
                            <option value="seller">Seller</option>
                        </select>
                    </div>
                    <input className='btn btn-accent my-5' value="Sign Up" type="submit" />
                    {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                    {signupError && <p className='text-red-600'>{signupError}</p>}
                </form>
            </div>
        </div>
    );
};

export default SignUp;