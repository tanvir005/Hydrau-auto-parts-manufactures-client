import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Purchase = () => {
    const [outStock, setOutStock] = useState(false);
    const [reqQuantity, setReqQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);


    const [user] = useAuthState(auth);
    const [datac, setData] = useState({});


    const navigate = useNavigate();


    const { id } = useParams();
    const { data: part, isLoading, refetch } = useQuery('part', () => fetch(`https://sheltered-beach-01598.herokuapp.com/parts/${id}`, {
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
        if (part?.availableQuantity <= 0) {
            console.log(part.availableQuantity);
            setOutStock(true);
        }
    }, [part, part?.name])

    if (isLoading) {
        return <Loading></Loading>
    }

    refetch();

    const onSubmit = data => {
        console.log(data.quantity);
        const reqQuantity = data.quantity;
        setReqQuantity(reqQuantity);
        const totalPrice = reqQuantity * part.unitPrice;
        setTotalPrice(totalPrice);
        let unitPrice = part.unitPrice;
        let Ndata = { ...data, totalPrice, unitPrice }
        setData(Ndata);

    }
    const finalSubmit = event => {

        if (reqQuantity) {
            fetch(`https://sheltered-beach-01598.herokuapp.com/parts/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Barer ${localStorage.getItem('accessToken')}`,
                },
                body: JSON.stringify(datac)
            })
                .then(res => res.json())
                .then(data => {
                    if (data?.modifiedCount) {
                        toast.success("Order placed successfully. Please pay to confirm");
                        navigate('/dashboard/myorders')
                    }
                })

            const status = 'Panding';
            const partsName = part.name;
            const img = part.img;
            let newData = { ...datac, status, partsName, img }

            fetch('https://sheltered-beach-01598.herokuapp.com/orders', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Barer ${localStorage.getItem('accessToken')}`,
                },

                body: JSON.stringify(newData)
            })
                .then(res => res.json())
                .then(insert => {
                    if (insert.result?.insertedId) {
                        toast.success(" Please pay to confirm");
                    }
                    else {
                        toast.error(`Try again.`);
                    }
                })
        }
        else{
            toast.error('Please provide valid data.')
        }

    }
    const handleClick = () => {

    }


    return (
        <div>
            <h2 className="text-primary  font-bold text-5xl my-2 text-center uppercase">Purchase the Parts</h2>
            <div className="border-2 shadow-green-50 rounded-2xl p-5">
                <div className="md:flex gap-10  mb-28">
                    <div className="md:w-1/2 p-10 border-2 shadow-green-50 rounded-2xl order-1 mb-5">
                        <img className="mx-auto hover:rotate-2 w-1/2" src={part?.img} alt="" />
                        <h3 className="text-2xl font-bold text-left ">{part?.name}</h3>
                        <p className="text-black text-justify">{part?.description}</p>
                        <p className="text-black text-justify font-bold text-lg my-5">Available: {part.availableQuantity}</p>
                        <p className="text-black text-justify font-bold text-lg my-5">Minimum Order Quantity: {part.minOrderQuantity}</p>
                        <p className="text-black text-justify font-bold text-lg my-5">Unit Price: {part.unitPrice}</p>
                        {
                            outStock ?
                                <p disabled className="text-center bg-red-800 text-white font-bold py-2 w-full rounded focus:outline-none focus:shadow-outline" >
                                    Out of Stock
                                </p>
                                :

                                <p className="text-center  bg-accent text-white font-bold py-2 w-full rounded focus:outline-none focus:shadow-outline" >
                                    Available
                                </p>
                        }

                    </div>
                    <div className="md:w-1/2 border-2 md:p-10 shadow-green-50 rounded-2xl order-2">
                        <h2 className="text-secondary  font-bold text-3xl my-8 text-center uppercase">Provide us your shipping information</h2>
                        <form className="gap-2 bg-white shadow-md rounded md:px-4 pt-2 pb-4 flex flex-col mx-2 md:mx-32 border-2 shadow-green-50" onSubmit={handleSubmit(onSubmit)}>
                            <input className='mb-2 border-2  shadow-green-50 p-2' value={user.displayName} placeholder="Name" {...register("name")} />
                            <input className='mb-2 border-2  shadow-green-50 p-2' value={user.email} placeholder="Email" {...register("email")} />
                            <input className='mb-2 border-2  shadow-green-50 p-2' value={user.phoneNUmber} placeholder="Mobile Number" type="number"  {...register("phoneNumber")} />
                            <input className='mb-2 border-2  shadow-green-50 p-2' placeholder="Address" type="text" {...register("address")} />

                            <p className=' text-error p-2 font-bold text-center'> Minimum Order Quantity: {part.minOrderQuantity}  </p>
                            <p className='mb-2 text-error p-2 font-bold text-center'> Unit Price: {part.unitPrice}  </p>



                            <input onClick={handleClick} className='mb-4 border-2  shadow-green-50 p-2' placeholder={`Minimum Order quantity ${part.minOrderQuantity}`} type="number"
                                {...register("quantity",
                                    {
                                        required: {
                                            value: true,
                                            message: 'Quantity is required.'
                                        },
                                        min: {
                                            value: `${part.minOrderQuantity}`,
                                            message: 'You can not purchase less then minimum Order Quantity.'

                                        },
                                        max: {
                                            value: `${part.availableQuantity}`,
                                            message: 'You can not purchase more then available quantity.'

                                        }
                                    })} />
                            <label className="label">
                                {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-600">{errors.quantity?.message}</span>}
                                {errors.quantity?.type === 'min' && <span className="label-text-alt text-red-600">{errors.quantity?.message}</span>}
                                {errors.quantity?.type === 'max' && <span className="label-text-alt text-red-600">{errors.quantity?.message}</span>}
                            </label>
                            <div className="flex flex-col gap-5 items-end">
                                {
                                    errors.quantity ? <input
                                        type="submit"
                                        className="btn btn-secondary text-white font-bold uppercase"
                                        disabled
                                        value="Add"
                                    />
                                        :
                                        <input
                                            type="submit"
                                            className="btn btn-secondary text-white font-bold uppercase w-1/2"
                                            value="Add"
                                        />
                                }
                                <div>
                                    <p className="font-bold text-right">Quantity: {reqQuantity} </p>
                                    <p className="font-bold text-right">Total Price: {totalPrice} </p>
                                </div>
                                {
                                    errors.quantity ? <button
                                        className="btn btn-primary text-white w-full font-bold py-4 px-4 p-2 rounded focus:outline-none focus:shadow-outline uppercase"
                                        onClick={finalSubmit}
                                        disabled>
                                        purchase
                                    
                                    </button>
                                        :
                                        <button
                                            className="btn btn-primary text-white w-full font-bold py-4 px-4 p-2 rounded focus:outline-none focus:shadow-outline uppercase"
                                            onClick={finalSubmit}>
                                            purchase
                                        </button>
                                }

                            </div>
                        </form>
                    </div>
                </div>

            </div>

        </div>


    );
};

export default Purchase;