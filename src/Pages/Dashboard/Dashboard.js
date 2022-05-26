import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
   
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content mt-10 ml-10">
                {/* <!-- Page content here --> */}
                <h1 className='text-5xl text-secondary font-bold'>Dashboard</h1>
                <Outlet></Outlet>


            </div>
            <div className="drawer-side border-r-2 border-gray-300 mt-10">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto lg:w-80 w-60 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link className="font-bold uppercase text-primary" to="/dashboard">My Profile</Link></li>
                    {!admin && <>
                        <li><Link className="font-bold uppercase text-primary" to="/dashboard/myorders">My Orders</Link></li>
                        <li><Link className="font-bold uppercase text-primary" to="/dashboard/review">Add Review</Link></li>
                    </>}
                    {admin && <>
                        <li><Link className="font-bold uppercase text-primary" to="/dashboard/addproduct">Add New Parts</Link></li>
                        <li><Link className="font-bold uppercase text-primary" to="/dashboard/manageorders">Manage Orders</Link></li>
                        <li><Link className="font-bold uppercase text-primary" to="/dashboard/allusers">All Users</Link></li>
                        
                    </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;