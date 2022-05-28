import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Review from './Review';

const ShowReviews = () => {
    const { data: reviews, isLoading, refetch } = useQuery('parts', async () => await fetch(`https://sheltered-beach-01598.herokuapp.com/reviews`, {
        method: 'GET',
        headers: {
            authorization: `Barer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>;
    }


    return (
        <div>
            <h2 className="text-center font-bold text-3xl uppercase my-20 mx-auto "> Our Happy Clients says </h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 p-5">
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                        refetch={refetch}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default ShowReviews;