import React from 'react';
import Review from '../Reviews/Review';

const ReviewCarausol = ({ review, refetch,index, len }) => {
    return (
        <div id={`slidee${index}`} className="carousel-item relative w-full">
            <Review
                key={review._id}
                review={review}
                refetch={refetch}></Review>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slidee${len-index}`} className="btn btn-circle">❮</a>
                <a href={`slidee${index+1}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default ReviewCarausol;