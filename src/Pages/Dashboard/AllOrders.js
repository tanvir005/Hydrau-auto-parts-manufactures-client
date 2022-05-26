import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const AllOrders = () => {
    const { data: orders, isLoading, refetch } = useQuery('parts', () => fetch(`http://localhost:5000/orders`, {
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
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg border-2">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">

                            </th>
                            <th scope="col" class="px-6 py-3">
                                Client Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Contact No
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Product Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Unt Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Quantity
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Total Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Delete
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                    <img className="w-10" src={order.img} alt="prod_img" />
                                </th>
                               
                                <th scope="row" class="px-2 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                    {order.name}
                                </th>
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white ">
                                    {order.phoneNumber}
                                </th>
                                <th scope="row" class="px-2 py-4 font-medium text-gray-900 dark:text-white">
                                    {order.partsName}
                                </th>
                               
                                
                                <td class="px-6 py-4">
                                    {order.unitPrice}
                                </td>
                                <td class="px-6 py-4">
                                    {order.quantity}
                                </td>
                                <td class="px-6 py-4">
                                    {order.totalPrice}
                                </td>
                                <td class="px-6 py-4">
                                    <button clsssName="btn btn-warning">{order.status} </button>
                                </td>
                                <td class="px-6 py-4">
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

export default AllOrders;