import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router';
import Loading from '../Shared/Loading';

const SinglePart = ({part}) => {

    const navigate = useNavigate();
   const {img, name, description, availableQuantity, minOrderQuantity, unitPrice} = part;

    const handleBuy=()=>{
        navigate('/purchase');
    }
    return (
        <div className="card w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Parts" className="rounded-xl" />
            </figure>
            <div className="card-body  ">
                <h2 className="card-title text-center">{ name}</h2>
                <p>{ description}</p>
                <h2 className="text-xl font-bold">Available: { availableQuantity}</h2>

                <h2 className="text-xl font-bold">Minimum Order Quantity: { minOrderQuantity}</h2>
                <h2 className="text-xl font-bold">Unit Price: { unitPrice}</h2>

                <div className="card-actions">
                    <button onClick={handleBuy} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default SinglePart;