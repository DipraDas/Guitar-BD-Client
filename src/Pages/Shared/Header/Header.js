import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/authprovider/authprovider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <div className="navbar bg-base-100 border-solid border-b-2 border-yellow-700 py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            <li><Link>Catagories</Link></li>
                            <li><Link>About</Link></li>
                            <li><Link to='/blogs'>Blogs</Link></li>
                            {
                                user?.uid &&
                                <li><Link to='/dashboard'>Dashboard</Link></li>
                            }
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-2xl">Guitar.BD</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to="/">Home</Link></li>
                        <li><Link>Catagories</Link></li>
                        <li><Link>About</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                        {
                            user?.uid &&
                            <li><Link to='/dashboard'>Dashboard</Link></li>
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.uid ?
                            <button onClick={handleLogOut} className="btn">Sign Out</button>
                            :
                            <Link to="/login" className="btn">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;