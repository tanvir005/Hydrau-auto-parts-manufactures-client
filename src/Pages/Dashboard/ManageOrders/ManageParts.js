import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';


const ManageParts = () => {
    const [outStock, setOutStock] = useState(false);
    // const [reqQuantity, setReqQuantity] = useState(0);
    // const [totalPrice, setTotalPrice] = useState(0);


    const [user] = useAuthState(auth);
    const [datac, setData] = useState({});


    const navigate = useNavigate();


    const { id } = useParams();

    <Loading></Loading>

    const { data: part, isLoading, refetch } = useQuery('part', async () => await fetch(`https://radiant-reef-04035.herokuapp.com/parts/${id}`, {
        method: 'GET',
        headers: {
            authorization: `Barer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    console.log(part);

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

    // refetch();

    const onSubmit = data => {
        // const reqQuantity = data.quantity;
        // setReqQuantity(reqQuantity);
        // const totalPrice = reqQuantity * part.unitPrice;
        // setTotalPrice(totalPrice);
        // let unitPrice = part.unitPrice;
        // let Ndata = { ...data, totalPrice, unitPrice }
        // setData(Ndata);

    }
    const finalSubmit = event => {

        // fetch(`https://radiant-reef-04035.herokuapp.com/parts/${id}`, {
        //     method: 'PUT',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(datac)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data?.modifiedCount) {
        //             toast.success("Order placed successfully. Please pay to confirm");
        //             navigate('/dashboard/myorders')
        //         }
        //     })

       
    }
    const handleClick = () => {

    }

    return (
        <div>
            <h2 className="text-primary  font-bold text-5xl my-2 uppercase">Manage the Parts</h2>
            <div className="border-2 shadow-green-50 rounded-2xl p-5">
                <div className="md:flex gap-10  mb-28">
                    <div className="md:w-1/2 p-10 border-2 shadow-green-50 rounded-2xl order-1 mb-5">
                        {/* <img className="mx-auto hover:rotate-2 w-1/2" src={part?.img} alt="" />
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
                        } */}

                    </div>

                </div>

            </div>

        </div>

    );
};

export default ManageParts; 