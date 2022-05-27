import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddProduct = () => {
    const { register, formState: { errors },reset, handleSubmit } = useForm();

    const imgStorageKey = '90cfa9a291d9a91d93959e526e9f61f6';
    const onSubmit = async data => {
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const parts = {
                        name: data.name,
                        description: data.description,
                        availableQuantity: data.availableQuantity,
                        minOrderQuantity: data.minOrderQuantity,
                        unitPrice: data.price,
                        img: img
                    }

                   
                    fetch('https://sheltered-beach-01598.herokuapp.com/parts', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                             authorization: `Barer ${localStorage.getItem('accessToken')}`,
                        },

                        body: JSON.stringify(parts)
                    })
                        .then(res => res.json())
                        .then(insert => {         
                            <Loading></Loading>            
                            if (insert.result?.insertedId) {
                                reset();
                                toast.success(`New parts added`);
                            }
                            else {
                                toast.error(`Already exist the parts.`);
                            }
                        })
                }

            })
    }


    return (
        <div className='flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold text-accent">Add a New Product</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Parts Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Parts Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Parts Name is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea
                                type="text"
                                placeholder="Parts Description"
                                className="input input-bordered w-full max-w-xs"
                                {...register("description", {
                                    required: {
                                        value: true,
                                        message: 'Description is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                                {errors.description?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                            </label>
                        </div>



                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Parts Quantity"
                                className="input input-bordered w-full max-w-xs"
                                {...register("availableQuantity", {
                                    required: {
                                        value: true,
                                        message: 'Parts Quantity is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.availableQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.availableQuantity.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Minimum Order Quantity</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Minimum Parts Order Quantity"
                                className="input input-bordered w-full max-w-xs"
                                {...register("minOrderQuantity", {
                                    required: {
                                        value: true,
                                        message: 'Parts Quantity is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.minOrderQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minOrderQuantity.message}</span>}
                            </label>
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Unit Price</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Unit Price Per Parts"
                                className="input input-bordered w-full max-w-xs"
                                {...register("price", {
                                    required: {
                                        value: true,
                                        message: 'Price is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                            </label>
                        </div>


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
                        </div>


                        <input className='btn w-full max-w-xs text-white mt-5' type="submit" value="Add" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;