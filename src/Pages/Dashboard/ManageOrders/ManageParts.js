import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';
import UpdatePartsModal from '../UpdatePartsModal';


const ManageParts = () => {
    const [outStock, setOutStock] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(null);
    const [updateModal, setUpdateModal] = useState(null);

    const [user] = useAuthState(auth);


    const { data: parts, isLoading, refetch } = useQuery('parts', () => fetch('https://hydrau-auto-parts-manufactures.vercel.app/parts', {
        method: 'GET',
        headers: {
            authorization: `Barer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));


    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();


    useEffect(() => {
        <Loading></Loading>
        if (parts?.availableQuantity <= 0) {

            setOutStock(true);
        }
    }, [parts, parts?.name])

    if (isLoading) {
        return <Loading></Loading>
    }

    refetch();



    // const handleUpdateModal = id => {
    //    setUpdateModal(id);

    // }


    const handleDeleteModal = id => {
        setIsModalOpen(id);
    }

    const handleDelete = () => {

        const id = isModalOpen;

        fetch(`https://hydrau-auto-parts-manufactures.vercel.app/parts/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`The parts is deleted.`)
                    setIsModalOpen(null)
                    refetch();
                }
            })
    }

    return (
        <section className="mt-28">
            <h4 className="text-accent font-bold text-3xl my-8">Hello {user.displayName}, Your parts</h4>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg bpart-2">
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
                                Minimun Order Quantity
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Available Quantity
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Update Quantity
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Delete
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            parts.map(part =>
                                <tr key={part._id} className="bpart-b dark:bg-gray-800 dark:bpart-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                        <img className="w-10" src={part.img} alt="product image" />
                                    </th>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                        {part.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {part.unitPrice}
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        {part.minOrderQuantity}
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        {part.availableQuantity}
                                    </td>
                                    <td className="px-6 py-4">
                                        <label onClick={() => setUpdateModal( part._id)} htmlFor="update-modal" className="btn btn-secondary btn-xs">Update</label>

                                    </td>

                                    <td className="px-6 py-4">
                                        <label onClick={() => handleDeleteModal(part._id)} htmlFor="delete-confirm-modal" className='btn btn-xs btn-error'>Delete</label>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>

            {
                isModalOpen &&
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
            {
                updateModal &&
                <UpdatePartsModal
                    updateModal={updateModal}
                    setUpdateModal={setUpdateModal}
                >
                </UpdatePartsModal>
            }

        </section>

    );
};

export default ManageParts;