import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AllUsers = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);
    const { data: users, isLoading, refetch } = useQuery('users', async () => await fetch('https://sheltered-beach-01598.herokuapp.com/user', {
        method: 'GET',
        headers: {
            authorization: `Barer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    const makeAdmin = email => {
        fetch(`https://sheltered-beach-01598.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error(`You have no acccess to made an Admn`);
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an Admin`);
                }


            })
    };

    const removeUser = email => {
        handleDelete(email);
    }

    const handleDelete =(Remail)=>{

        fetch(`https://sheltered-beach-01598.herokuapp.com/user/${Remail}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`User is deleted.`)
                    setDeletingDoctor(null);
                    refetch();
                }
            })
    
    }
    return (
        <div>
            <p className="text-2xl font-bold text-accent my-8 text-center">Total users: {users.length}</p>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) =>
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <th>{user.email}</th>
                                    <th>{user.name || user.displayName}</th>
                                    <th>{user.role === 'admin' ?
                                        <button className="btn btn-xs btn-disabled bg-secondary text-white">Admin</button>
                                        :
                                        <button onClick={() => makeAdmin(user.email)} className='btn btn-xs'> Make admin</button>}</th>
                                    <th> <label onClick={() => removeUser(user.email)} htmlFor="delete-confirm-modal" className='btn btn-xs btn-error'>Delete</label>
                                    </th>

                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are you sure you want to delete!</h3>
                    
                    <div className="modal-action">
                    <button onClick={() => handleDelete()} className="btn btn-xs btn-error">Delete</button>
                        <label htmlFor="delete-confirm-modal" className="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;