import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../contexts/authprovider/authprovider';

import useAdmin from '../../hooks/useAdmin';
import useSeller from '../../hooks/useSeller';
import useToken from '../../hooks/useToken';
import Header from '../../Pages/Shared/Header/Header';


const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    const [token] = useToken(user?.email);
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        {token &&
                            <li><Link to='/dashboard'>My Orders</Link></li>
                        }
                        {
                            isAdmin && <>
                                <li><Link to='/dashboard/allsellers'>All Seller</Link></li>
                                <li><Link to='/dashboard/allbuyers'>All Buyer</Link></li>
                                <li><Link to='/dashboard/reportedItems'>Reported Items</Link></li>
                            </>
                        }
                        {
                            isSeller && <>
                                <li><Link to='/dashboard/addProduct'>Add Product</Link></li>
                                <li><Link to='/dashboard/myProducts'>My Products</Link></li>
                                <li><Link to='/dashboard/myBuyers'>My Buyers</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;