import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import SingleOrder from './SingleOrder';

const AllOrders = () => {

   

    const { data: orders, isLoading, refetch } = useQuery('parts', () => fetch(`https://sheltered-beach-01598.herokuapp.com/orders`, {
        method: 'GET',
        headers: {
            authorization: `Barer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    useEffect(() => {

    }, []);

    if (isLoading) {
        return <Loading></Loading>;
    }

    


    return (
        <section className="mt-28">
            <h4 className="text-accent font-bold text-3xl my-8 ">Hello { }, Your orders</h4>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg border-2">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">

                            </th>
                            <th scope="col" className="px-6 py-3">
                                Client Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Contact No
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product Name
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
                                Manage
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map(order => <SingleOrder
                                key={order._id}
                                order={order}
                                refetch={refetch}
                            >
                            </SingleOrder>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default AllOrders;