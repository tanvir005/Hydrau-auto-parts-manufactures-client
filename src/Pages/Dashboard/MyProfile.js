import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {

    const [user] = useAuthState(auth);

    return (
        <div className="flex mt-28">
            <div className="flex flex-col items-center w-1/2">
                <div class="avatar grid grid-cols-1 gap-5">
                    <div class="w-24 rounded-full shadow-sm">
                        <img src={user.photoURL} />
                    </div>
                    <button className="btn btn-xs btn-accent">Change</button>
                </div>
               
            </div>
            <div className="w-1/2 ">

                <div >

                    <p className="block text-gray-700 text-sm font-bold my-4">
                        <span className="mr-4">Name </span>
                        <span className="ml-4">{user.displayName} </span>
                    </p>
                    <p className="block text-gray-700 text-sm font-bold my-4">
                        <span className="mr-4">Email </span>
                        <span className="ml-4">{user.email} </span>
                    </p>
                    <p className="block text-gray-700 text-sm font-bold my-4">
                        <span className="mr-4">Phone </span>
                        <span className="ml-4">{user.phone} </span>
                    </p>
                    <p className="block text-gray-700 text-sm font-bold my-4">
                        <span className="mr-4">Address </span>
                        <span className="ml-4">{user.address} </span>
                    </p>
                 
                </div>
                <div className="grid grid-cols-1 justify-items-center">
                <button className="btn btn-xs btn-accent w-28 ">Edit Profile</button>

                </div>
                
            </div>
        </div>

    );
};

export default MyProfile;