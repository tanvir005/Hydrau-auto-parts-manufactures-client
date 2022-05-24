import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const SinglePart = () => {

    const { data: parts, isLoading, refetch } = useQuery('parts', () => fetch('http://localhost:5000/parts', {
        method: 'GET',
        // headers: {
        //     authorization: `Barer ${localStorage.getItem('accessToken')}`
        // }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className="card w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={parts.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body  ">
                <h2 className="card-title text-center">{parts.name}</h2>
                <p>{parts.description}</p>
                <h2 className="text-xl font-bold">Available: {parts.availableQuantity}</h2>

                <h2 className="text-xl font-bold">Minimum Order Quantity: {parts.minOrderQuantity}</h2>
                <h2 className="text-xl font-bold">Unit Price: {parts.price}</h2>

                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default SinglePart;