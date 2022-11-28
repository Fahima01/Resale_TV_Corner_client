import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Link } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile bg-violet-300 text-violet-800">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content pl-5 pt-5">
                    <Outlet></Outlet>
                    <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side bg-slate-300">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-violet-800 font-bold">

                        <li className='bg-violet-300 rounded-lg mb-3'>
                            <Link to='/dashboard/buyers'>All Buyers</Link>
                        </li>
                        <li className='bg-violet-300 rounded-lg mb-3'>
                            <Link to='/dashboard/sellers'>All Sellers</Link>
                        </li>
                        <li className='bg-violet-300 rounded-lg'>
                            <Link to='/dashboard/allusers'>All Users</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;