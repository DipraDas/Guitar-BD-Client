import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/authprovider/authprovider';
import useToken from '../../../hooks/useToken';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { googleLogin, signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [LoginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(LoginUserEmail);
    const user = useContext(AuthContext);

    console.log(LoginUserEmail);

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [from, token, navigate])

    if (user?.email) {
        navigate(from, { replace: true });
    }

    const handleLogin = data => {
        console.log(data);
        setLoginUserEmail('');
        setLoginError('')
        signIn(data.email, data.password)
            .then(res => {
                const user = res.user;
                console.log(user);
                setLoginUserEmail(data.email);
            })
            .catch(error => {
                console.log(error);
                setLoginError(error.message);
            })
    }

    const handleGoogleSignIn = () => {

        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
                const role = "user";
                saveUser(user.displayName, user.email, role);
            })
            .catch(error => console.error('error', error))
    }


    const saveUser = (name, email, role) => {
        setLoginUserEmail('');
        const user = { name, email, role };
        console.log(user);
        fetch('https://guitar-bd-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setLoginUserEmail(email);
                console.log(data);
            })
    }

    return (
        <div>
            <div className='flex justify-center items-center'>
                <div className='w-96 px-7 border border-purple-300 my-20 py-16'>
                    <div className="text-3xl">Log In</div>
                    <div className='text-xs mt-1 mb-3'>New in Guitar.BD?<Link className='text-blue-400' to="/signUp"> Sign Up</Link></div>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" className="input input-bordered w-full "
                                {...register("email", {
                                    required: true
                                })}
                            />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" className="input input-bordered w-full "
                                {...register("password", {
                                    required: true
                                })}
                            />
                        </div>
                        <input className='btn btn-accent my-5 w-full' value="Log In" type="submit" />
                        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </form>
                    <div className="divider">OR</div>
                    <button onClick={handleGoogleSignIn} className='btn bg:black border border-solid border-b-2 border-yellow-700 w-full mt-3'>Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Login;