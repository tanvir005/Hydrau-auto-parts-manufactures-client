import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';


const AddReviews = () => {
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, reset, handleSubmit } = useForm();
    const email = user.email;
    
    const { data: orders, isLoading, refetch } = useQuery('parts', async () => await fetch(`https://hydrau-auto-parts-manufactures.vercel.app/orders/${email}`, {
        method: 'GET',
        headers: {
            authorization: `Barer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if(isLoading){
        return <Loading></Loading>;
    }

    
    const onSubmit = async data => {
        const review = {
            name: data.name,
            partsName: data.partsName,
            email: user.email,
            rating: data.rating,
            review: data.review,
            img: user.photoURL
           
        }
        // send to your database 
        fetch('https://hydrau-auto-parts-manufactures.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(review)
        })
        .then(res =>res.json())
        .then(inserted =>{
           
            if(inserted.result.insertedId){
                toast.success('Review added successfully')
                reset();
            }
            else{
                toast.error('Failed to add the review');
            }
        })

    }
    return (
        <div className="grid justify-center">
        <h2 className="text-3xl font-bold text-accent my-10">Add a Review Here</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        value={user.displayName}
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Parts Name</span>
                    </label>
                    <select {...register('partsName')} className="input input-bordered w-full max-w-xs">
                        {
                            orders.map(order => <option
                                key={order._id}
                                value={order.partsName}
                            >{order.partsName}</option>)
                        }
                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Reviews out of 5"
                        className="input input-bordered w-full max-w-xs"
                        {...register("rating", {
                            required: {
                                value: true,
                                message: 'Rating is Required'
                            },
                            
                        })}
                    />
                    <label className="label">
                        {errors.rating?.type === 'required' && <span className="label-text-alt text-red-500">{errors.rating.message}</span>}
                        {errors.rating?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.rating.message}</span>}
                    </label>
                </div>
               


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Review</span>
                    </label>
                    <textarea
                        type="text"
                        placeholder="Reviews"
                        className="input input-bordered w-full max-w-xs"
                        {...register("review", {
                            required: {
                                value: true,
                                message: 'Review is Required'
                            },
                            
                        })}
                    />
                    <label className="label">
                        {errors.review?.type === 'required' && <span className="label-text-alt text-red-500">{errors.review.message}</span>}
                        {errors.review?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.review.message}</span>}
                    </label>
                </div>
                

              
                <input className='btn w-full max-w-xs text-white' type="submit" value="Add Review" />
            </form>
        </div>
    );
};

export default AddReviews;