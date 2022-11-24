import React from 'react';
import './HomeBanner.css';
import 'animate.css';
import guitar from '../../../assets/images/homeImage/home-guitar.png';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const HomeBanner = () => {
    return (
        <div className='home-bannner'>
            <div className="container h-full mx-auto grid grid-cols-1 md:grid-cols-3 items-center">
                <div className='animate__animated animate__fadeInLeft px-5'>
                    <h2 className='text-gray-400 text-semibold tracking-widest mb-4'>Fulfil your dream</h2>
                    <h1 className='text-6xl'>Guitar.BD</h1>
                    <h2 className='text-gray-500 text-semibold tracking-wider mt-4'>We try to fulfil your dream. Your happiness is our success. So, visit our site, choose your prefered guitar and play!</h2>
                </div>
                <div className='animate__animated animate__fadeInUp middle-banner'>
                    <img className='w-2/4 m-auto' src={guitar} alt="" />
                </div>
                <div className='animate__animated animate__fadeInDown px-5'>
                    <h2 className='text-gray-400 text-semibold tracking-widest mb-4 leading-loose'>95% of the time, the best guitar for beginners is a steel-stringed acoustic guitar.</h2>
                    <Link className='flex items-center gap-3'>
                        <div>See Products</div>
                        <div><FaArrowRight></FaArrowRight></div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;