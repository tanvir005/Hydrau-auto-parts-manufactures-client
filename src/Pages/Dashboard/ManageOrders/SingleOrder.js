import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const SingleOrder = ({ order, refetch }) => {
    const [isPending, setIsPending] = useState();
    const [deletingOrder, setDeletingOrder] = useState(null);




    const handlePanding = (id) => {

        const newStatus = { status: 'Shipped' }
        fetch(`https://sheltered-beach-01598.herokuapp.com/orders/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newStatus)
        })
            .then(res => res.json())
            .then(data => {
                setIsPending(false);
                refetch();
            })

    }

    const handleDeleteModal = id => {
        setDeletingOrder(id);
    }

    const handleDelete = () => {

        const id = deletingOrder;

        fetch(`https://sheltered-beach-01598.herokuapp.com/order/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`The order is deleted.`)
                    setDeletingOrder(null)
                    refetch();
                }
            })
    }

    return (
        <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                <img className="w-10" src={order.img} alt="product image" />
            </th>
            <td className="px-6 py-4">
                {order.name}
            </td>
            <td className="px-6 py-4">
                {order.phoneNumber}
            </td>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                {order.partsName}
            </th>
            
            <td className="px-6 py-4">
                {order.unitPrice}
            </td>
            <td className="px-6 py-4">
                {order.quantity}
            </td>
            <td className="px-6 py-4">
                {order.totalPrice}
            </td>
            {
                isPending ?
                    <>
                        <td className="px-6 py-4">
                            <div onClick={() => handlePanding(order._id)} className="px-2 py-2 bg-warning font-bold uppercase text-black cursor-pointer rounded-lg text-center text-xs hover:bg-yellow-500">{order.status}</div>
                        </td>
                    </>
                    :

                    <>
                        <td className="px-6 py-4">
                            <div className="px-2 py-2 bg-success font-bold uppercase text-black rounded-lg text-center text-xs">{order.status}</div>
                        </td>
                    </>


            }
            <td className="px-6 py-4">
                <label onClick={() => handleDeleteModal(order._id)} htmlFor="delete-confirm-modal" className='btn btn-xs btn-error'>Delete</label>
            </td>

            {
                deletingOrder &&
                <div>
                    <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
                    <div className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg text-red-500">Are you sure you want to delete!</h3>

                            <div className="modal-action">
                                <button onClick={() => handleDelete()} className="btn btn-xs btn-error">Delete</button>
                                <label htmlFor="delete-confirm-modal" className="btn btn-xs">Cancel</label>
                            </div>
                        </div>
                    </div>
                </div>

            }
        </tr>
    );
};
export default SingleOrder;