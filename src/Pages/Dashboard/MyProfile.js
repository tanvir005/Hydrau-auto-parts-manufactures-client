import React, { useState } from 'react';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [isOpenMOdal, setIsOpenMOdal] = useState(true);

    const [user] = useAuthState(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const imgStorageKey = '90cfa9a291d9a91d93959e526e9f61f6';

    const email = user.email;

    const { data: userFromDb, isLoading, refetch } = useQuery('userFromDb', async () => await fetch(`https://hydrau-auto-parts-manufactures.vercel.app/user/${email}`, {
        method: 'GET',
        headers: {
            authorization: `Barer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>;
    }

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
        
        
        const updatedUser={
            name :event.target.name.value,
            address : event.target.address.value,
            phoneNumber : event.target.phoneNumber.value,
            linkedin:event.target.linkedin.value,
            education:event.target.education.value,
            img: user.photoURL
        }
       
        fetch(`https://hydrau-auto-parts-manufactures.vercel.app/updateuser/${email}`,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json',
                authorization: `Barer ${localStorage.getItem('accessToken')}`,
            },
            body:JSON.stringify(updatedUser)
        })
        .then(res => res.json())
        .then(data => {
            <Loading></Loading>
          if(data.modifiedCount > 0){

              toast.success('Update successfully.');
              setIsOpenMOdal(false);
              refetch();
          }
          else{
              toast.error('User Uptodate.')
          }
        })}


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
                        <span className="ml-10">{userFromDb.name || user.displayName} </span>
                    </p>
                    <p className="block text-gray-700 text-sm font-bold my-4">
                        <span className="mr-4">Email </span>
                        <span className="ml-10">{userFromDb.email} </span>
                    </p>
                    <p className="block text-gray-700 text-sm font-bold my-4">
                        <span className="mr-4">Education </span>
                        <span className="ml-2">{userFromDb.education} </span>
                    </p>
                    <p className="block text-gray-700 text-sm font-bold my-4">
                        <span className="mr-4">Linkedin </span>
                        <span className="ml-5"> <a target="_blank" href={userFromDb.linkedin}> {userFromDb.name}</a> </span>
                    </p>
                    <p className="block text-gray-700 text-sm font-bold my-4">
                        <span className="mr-4">Phone </span>
                        <span className="ml-8">{userFromDb.phoneNumber} </span>
                    </p>

                    <p className="block text-gray-700 text-sm font-bold my-4">
                        <span className="mr-4">Address </span>
                        <span className="ml-4">{userFromDb.address} </span>
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
                                        value={user.displayName}
                                        disabled
                                        className="input input-bordered w-full max-w-xs"
                                        required
                                        name='name'
                                    />

                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                    disabled
                                        value={user.email}
                                        className="input input-bordered w-full max-w-xs"
                                        readOnly
                                    />
                                    <label className="label">
                                        <span className="label-text">Education</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="input input-bordered w-full max-w-xs"
                                        required
                                        name='education'
                                    />
                                     <label className="label">
                                        <span className="label-text">Phone Number</span>
                                    </label>
                                    <input
                                        type="number"
                                        className="input input-bordered w-full max-w-xs"
                                        required
                                        name='phoneNumber'
                                    />
                                    <label className="label">
                                        <span className="label-text">Linkedin</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="input input-bordered w-full max-w-xs"
                                        required
                                        name='linkedin'
                                    />

                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="input input-bordered w-full max-w-xs  mb-5"
                                        required
                                        name='address'
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