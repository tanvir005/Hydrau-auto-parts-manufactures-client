import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router';
import Loading from '../Shared/Loading';

const SinglePart = ({part}) => {

    const navigate = useNavigate();
   const {img, name, description, availableQuantity, minOrderQuantity, unitPrice, _id} = part;

    const handleBuy= id =>{
        navigate(`/purchase/${id}`);
    }
    return (
        <div className="card lg:w-96  my-10 border-primary border-2 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Parts" className="rounded-xl" />
            </figure>
            <div className="card-body  ">
                <h2 className="card-title text-center">{ name}</h2>
                <p>{ description}</p>
                <h2 className="text-xl font-bold">Available: { availableQuantity}</h2>

                <h2 className="text-xl font-bold">Minimum Order Quantity: { minOrderQuantity}</h2>
                <h2 className="text-xl font-bold">Unit Price: { unitPrice}</h2>

                <div className="card-actions justify-end">
                    <button onClick={()=>handleBuy(_id)} className="btn btn-primary text-white">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default SinglePart;