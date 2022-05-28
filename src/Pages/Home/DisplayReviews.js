import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ReviewCarausol from './ReviewCarausol';

const DisplayReviews = () => {
    const { data: reviews, isLoading, refetch } = useQuery('parts', async () => await fetch(`https://sheltered-beach-01598.herokuapp.com/reviews`, {
        method: 'GET',
        headers: {
            authorization: `Barer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>;
    }
    const len = reviews.length;
    return (
        <div>
            <div className="carousel max-h-96">
                {
                    reviews.map(review => <ReviewCarausol
                        key={review._id}
                        review={review}
                        refetch={refetch}
                        index={review.index}
                        len={len}
                    ></ReviewCarausol>)
                }

            </div>
        </div>
    );
};

export default DisplayReviews;