import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import auth from '../../firebase.init';

const Review = ({ review, refetch }) => {
    const [user] = useAuthState(auth);
    refetch();

    return (
        <div className="card max-w-sm bg-base-100 shadow-xl mb-10">
            <div className="grid grid-cols-1">
                <div className="flex align-items-center">
                    <div className="avatar">
                        <div className=" rounded-full">
                            <img src={user.photoURL} />
                        </div>
                    </div>
                    <div className="text-2xl">{review.name}</div>
                </div>
                <div className="flex">
                    <Rater rating={review.rating || 0} total={5} interactive={false} />
                    <div className="text-xs italic ml-10">for {review.partsName}</div>
                </div>

            </div>


            <div className="card-body items-center text-center">
                <p>{review.review}</p>
            </div>
        </div>
    );


};

export default Review;