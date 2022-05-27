import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SingleOrder = ({ order, refetch }) => {
    const [isPending, setIsPending] = useState();


    const handlePanding = (id) => {
        console.log(id);
        


        const newStatus = { status: 'Shipped' }
        fetch(`http://localhost:5000/orders/${id}`, {
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
    



    return (
        <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                <img className="w-10" src={order.img} alt="product image" />
            </th>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                {order.partsName}
            </th>
            <td className="px-6 py-4">
                {order.phoneNumber}
            </td>
            <td className="px-6 py-4">
                {order.name}
            </td>
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
               <Link to={`/dashboard/manageparts/${order._id}`} className="btn btn-secondary btn-sm"> Manage</Link>
            </td>
        </tr>
    );
};
export default SingleOrder;