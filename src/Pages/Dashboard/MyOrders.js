import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyOrders = () => {
    const [user] = useAuthState(auth);

    const email = user.email;
    const { data: orders, isLoading, refetch } = useQuery('parts', () => fetch(`http://localhost:5000/orders/${email}`, {
        method: 'GET',
        headers: {
            authorization: `Barer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>;
    }
    return (

        <section className="mt-28">
            <h4 className="text-secondary font-bold text-3xl">Hello { }, Your orders</h4>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg border-2">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">

                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Unt Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Quantity
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Total Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Delete
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order =>
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
                                    <td className="px-6 py-4">
                                        <div className="px-2 py-2 bg-warning font-bold uppercase text-black cursor-pointer rounded-lg text-center text-xs hover:bg-yellow-500">{order.status}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        X
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </section>

    );
};

export default MyOrders;