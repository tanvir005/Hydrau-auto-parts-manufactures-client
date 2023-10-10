import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const UpdatePartsModal = ({ updateModal, setUpdateModal }) => {

    const id = updateModal;
    const [outStock, setOutStock] = useState(false);
    const navigate = useNavigate();


    const { data: part, isLoading, refetch } = useQuery('part', () => fetch(`https://hydrau-auto-parts-manufactures.vercel.app/parts/${id}`, {
        method: 'GET',
        headers: {
            authorization: `Barer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    const handleUserInfoUpdate = (data) => {
      

        const reqQuantity = data.target.updateQuantity.value;
        const newdata = {
             quantity: reqQuantity
         }
        if (reqQuantity) {
            fetch(`https://hydrau-auto-parts-manufactures.vercel.app/partsupdate/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Barer ${localStorage.getItem('accessToken')}`,
                },
                body: JSON.stringify(newdata)
            })
                .then(res => res.json())
                .then(data => {
                    if (data?.modifiedCount) {
                        toast.success("Order Updated successfully. Please pay to confirm");
                         navigate('/dashboard/myorders')
                    }
                })
            }

        }
        refetch();
        return (
            <div>
                {
                    updateModal &&
                    <div>
                        <input type="checkbox" id="update-modal" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box relative">
                                <label htmlFor="update-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <form onSubmit={handleUserInfoUpdate} >
                                    <div className="w-full p-10 border-2 shadow-green-50 rounded-2xl order-1 mb-5">
                                        <img className="mx-auto hover:rotate-2" src={part?.img} alt="" />
                                        <h3 className="text-2xl font-bold text-left ">{part?.name}</h3>
                                        <p className="text-black text-justify">{part?.description}</p>
                                        <p className="text-black text-justify font-bold text-lg my-5">Available: {part?.availableQuantity}</p>
                                        <p className="text-black text-justify font-bold text-lg my-5">Minimum Order Quantity: {part?.minOrderQuantity}</p>
                                        <p className="text-black text-justify font-bold text-lg my-5">Unit Price: {part?.unitPrice}</p>
                                        {
                                            outStock &&
                                            <p disabled className="text-center bg-red-800 text-white font-bold py-2 w-full rounded focus:outline-none focus:shadow-outline" >
                                                Out of Stock
                                            </p>

                                        }

                                    </div>
                                    <div className="form-control w-full max-w-xs ">

                                        <label className="label">
                                            <span className="label-text">Update Quantity</span>
                                        </label>
                                        <input
                                            type="number"
                                            className="input input-bordered w-full max-w-xs mb-5"
                                            required
                                            name='updateQuantity'
                                        />

                                        <div>
                                            <input className="btn btn-xs btn-accent w-28 grid text-center" value='Update' type='submit' />
                                        </div>
                                    </div>

                                </form>


                            </div>
                        </div>
                    </div>

                }
            </div>
        );
    };

    export default UpdatePartsModal;