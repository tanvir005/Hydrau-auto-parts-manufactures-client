import React, { useState } from 'react';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const [isOpenMOdal, setIsOpenMOdal] = useState(true);

    const [user] = useAuthState(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const imgStorageKey = '90cfa9a291d9a91d93959e526e9f61f6';


    const onSubmit = async data => {

        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;

        await fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    updateProfile({ photoURL: img })
                    toast.success('Image Uploaded');
                    reset();
                    setIsOpenMOdal(false);
                }
            })

        if (updating) {
            return <Loading></Loading>
        }
        if (updateError) {
            toast.error(updateError.message);
        }
    }

    const handleUserInfoUpdate =async event => {
        event.preventDefault();
        const name = event.target.name.value;
        const address = event.target.address.value;
        const phoneNumber = event.target.phoneNumber.value;

       
       await updateProfile({ phoneNumber:phoneNumber });
                    toast.success('Usser Uploaded');
                    reset();
                    if(updating){
                        return <Loading></Loading>
                    }
                    setIsOpenMOdal(false);
    }
    console.log((user));


    return (
        <div className="lg:flex grid justify-items-center gap-10  mt-28">
            <div className="flex flex-col items-center w-1/2">
                <div className="avatar grid grid-cols-1 gap-5">
                    <div className="w-24 rounded-full shadow-sm">
                        <img src={user.photoURL} />
                    </div>
                    <label htmlFor="picChange-modal" className="btn btn-xs btn-accent">Change</label>
                    {/* <button htmlFor="picChange-modal" className="btn btn-xs btn-accent">Change</button> */}
                </div>

            </div>
            <div className="lg:w-1/2">

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
                        <span className="ml-4">{user.phoneNumber} </span>
                    </p>
                    <p className="block text-gray-700 text-sm font-bold my-4">
                        <span className="mr-4">Address </span>
                        <span className="ml-4">{user.address} </span>
                    </p>

                </div>
                <div className="grid grid-cols-1 justify-items-center">
                    <label htmlFor="infoChange-modal" className="btn btn-xs btn-accent w-28 ">Edit Profile</label>
                </div>

            </div>
            {/* //modal for pic change  */}
            {isOpenMOdal &&
                <div>
                    <input type="checkbox" id="picChange-modal" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative">
                            <label htmlFor="picChange-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <input
                                        type="file"

                                        className="input input-bordered w-full max-w-xs"
                                        {...register("img", {
                                            required: {
                                                value: true,
                                                message: 'Image is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.img?.type === 'required' && <span className="label-text-alt text-red-500">{errors.img.message}</span>}
                                    </label>
                                    <input className="btn btn-xs btn-accent w-28" value='Update' type='submit' />
                                </div>

                            </form>


                        </div>
                    </div>
                </div>
            }


            {/* for details edit  */}

            {isOpenMOdal &&
                <div>
                    <input type="checkbox" id="infoChange-modal" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative">
                            <label htmlFor="infoChange-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <form onSubmit={handleUserInfoUpdate} >
                                <div className="form-control w-full max-w-xs ">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="input input-bordered w-full max-w-xs"
                                        required
                                        name='name'
                                    />

                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        value={user.email}
                                        className="input input-bordered w-full max-w-xs"
                                        readOnly
                                    />

                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="input input-bordered w-full max-w-xs"
                                        required
                                        name='address'
                                    />

                                    <label className="label">
                                        <span className="label-text">Phone Number</span>
                                    </label>
                                    <input
                                        type="number"
                                        className="input input-bordered w-full max-w-xs mb-5"
                                        required
                                        name='phoneNumber'
                                    />

                                    <input className="btn btn-xs btn-accent w-28 grid justify-items-end" value='Update' type='submit' />
                                </div>

                            </form>


                        </div>
                    </div>
                </div>
            }
        </div>

    );
};

export default MyProfile;