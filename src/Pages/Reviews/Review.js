import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import auth from '../../firebase.init';

const Review = ({ review, refetch }) => {
    const [user] = useAuthState(auth);
    let rating = review.rating;

    refetch();
    return (
        <div className="card max-w-sm bg-base-100 shadow-xl mb-10 p-5">
            <div className="grid grid-cols-1">
                <div className="flex justify-items-center justify-evenly">
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src={review?.img} />
                        </div>
                    </div>
                    <div className="text-2xl">{review.name}</div>
                </div>
                <div className="flex">
                    <Rater rating={ rating || 0} total={5} interactive={false} />
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