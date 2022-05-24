import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content text-center">
                {/* <!-- Page content here --> */}
                <h1 className='text-5xl text-secondary font-bold'>Dashboard</h1>
                <Outlet></Outlet>


            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto lg:w-80 w-60 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link className="font-bold uppercase text-primary" to="/dashboard">My Orders</Link></li>
                    <li><Link className="font-bold uppercase text-primary" to="/dashboard/review">Add Review</Link></li>
                    <li><Link className="font-bold uppercase text-primary" to="/dashboard/doctors">Doctors</Link></li>
                    {user && <>
                        <li><Link className="font-bold uppercase text-primary" to="/dashboard/allusers">All Users</Link></li>
                        <li><Link className="font-bold uppercase text-primary" to="/dashboard/addproduct">Add New Parts</Link></li>
                    </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;