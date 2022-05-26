import React, { useEffect, useState } from 'react';

const SingleOrder = ({ order }) => {
    const [isPending, setIsPending] = useState(true);




    const handlePanding = () => {
        if (order.status.toLowerCase() === 'panding') {
            setIsPending(false)
        }
    }
    useEffect(() => {



    }, []);
    return (
        <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                <img className="w-10" src={order.img} alt="product image" />
            </th>
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
                            <div onClick={handlePanding} className="px-2 py-2 bg-warning font-bold uppercase text-black cursor-pointer rounded-lg text-center text-xs hover:bg-yellow-500">{order.status}</div>
                        </td>
                    </>
                    :
                    <>
                        <td className="px-6 py-4">
                            <div className="px-2 py-2 bg-error font-bold uppercase text-black rounded-lg text-center text-xs">{order.status}</div>
                        </td>
                    </>


            }
            <td className="px-6 py-4">
                X
            </td>
        </tr>
    );
};

export default SingleOrder;