import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=' border-solid border-t-2 border-yellow-700'>
            <footer className="footer p-10 text-base-content justify-evenly">
                <div>
                    <span className="footer-title">Contacts</span>
                    <div>Email: dipradas5940@gmail.com</div> 
                    <div>Phone: +880 18176 704498</div>
                    <div>Location: Chattogram, Bangladesh</div>
                </div>
                <div>
                    <span className="footer-title">Pages</span>
                    <div><Link to='/'>Home</Link></div>
                    <div><Link to=''>Categories</Link></div>
                    <div><Link to='/blogs'>Blogs</Link></div>
                </div>
                <div>
                    <span className="footer-title">Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative outline-none">
                            <input type="text" placeholder="email" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;