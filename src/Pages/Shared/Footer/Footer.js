import React from 'react';
import { Link } from 'react-router-dom';
// import emailjs from 'emailjs-com';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Footer = () => {
    const sendEmail = e => {
        e.preventDefault();
        emailjs.sendForm('gmail', 'template_1i055ne', e.target, 'user_bcEdHjT3cZukpBuW6Y2Nn')
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    position: 'center-center',
                    icon: 'success',
                    title: 'Subscribed',
                    showConfirmButton: false,
                    timer: 2000
                })
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
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
                            <form onSubmit={sendEmail}>
                                <input type="text" placeholder="email" className="input input-bordered w-full pr-16" />
                                <button type='submit' className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;