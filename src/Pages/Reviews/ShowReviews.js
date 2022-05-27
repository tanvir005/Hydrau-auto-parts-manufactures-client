import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Review from './Review';

const ShowReviews = () => {
    const { data: reviews, isLoading, refetch } = useQuery('reviews', async () => await fetch(`https://sheltered-beach-01598.herokuapp.com/reviews`, {
        method: 'GET',
        headers: {
            authorization: `Barer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>;
    }



    return (
        <div className="my-10">
            <h4 className="text-primary text-xs font-bold uppercase text-center mb-2">Reviews</h4>
            <div className="text-center font-mono">
                <h1 className="lg:text-5xl font-bold uppercase ">Our Happy Clients says</h1>
                <h1 className="lg:text-sm text-xs text-center font-bold uppercase italic text-accent lg:mx-32 my-5"> Reviews are key to the decision-making process,
                 helping customers to get a better idea about the product, including material, size, and shape.  </h1>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-10 mx-auto my-5">
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