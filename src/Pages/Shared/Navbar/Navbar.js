import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import useAdmin from '../../../hooks/AdminHook';
import logo from '../../../../src/assets/logo/logo.png';


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }

    const menuItems = <React.Fragment>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blogs">Blog</Link></li>
        {user?.uid ?
            <>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/myorders">My Orders</Link></li>
                <div class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                            <div className="avatar w-10">

                                {user?.photoURL ?

                                    <img src={user?.photoURL} alt='' />
                                    :
                                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" />
                                }

                            </div>
                        </div>
                    </label>
                    <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-slate-300 rounded-box w-52 ">
                        <li>
                            <a class="justify-between">
                                {user?.email}
                            </a>
                        </li>
                        <li><Link to="/myorders">My Orders</Link></li>
                        <li><button onClick={handleLogOut}>Sign out</button></li>
                    </ul>
                </div>
            </>
            : <li><Link to="/login">Login</Link></li>}
    </React.Fragment>

    return (
        <div className="navbar bg-pink-300 text-violet-800 font-semibold flex justify-between">
            <div className="navbar-star">
                <div className="dropdown bg-slate-300">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="w-16 flex gap-3 justify-center items-center ml-20">

                    <img src={logo} ></img>
                    <p className='text-violet-900 font-bold'>TV.Corner</p>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-primary lg:hidden"> Dashboard option

            </label>
        </div>
    );
};

export default Navbar;