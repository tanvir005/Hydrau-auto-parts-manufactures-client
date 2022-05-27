
import React from 'react';
import { FaShippingFast, FaHandsHelping } from 'react-icons/fa';
import { UserGroupIcon, ShoppingCartIcon } from '@heroicons/react/solid'

const BusinessSummary = () => {
    return (
        <div className="border-2 p-5 border-cyan-100 rounded shadow-xl mx-10 bg-cyan-50">
            <h4 className="text-primary text-xs font-bold uppercase text-center mb-2">summary</h4>
            <div className="grid grid-cols-1 gap-10 mx-5">

                <div className="text-center font-mono">
                    <h1 className="lg:text-5xl font-bold uppercase "> thousands of people faith in us</h1>
                    <h1 className="lg:text-xl text-xs font-bold uppercase italic text-accent"> this is the reason why people trus us</h1>
                </div>
                <div className="lg:flex gap-5 lg:justify-around grid grid-cols-1">
                    <div className="grid justify-items-center gap-5">
                        <div> <FaShippingFast className="h-16 w-16 text-primary" /></div>
                        <p className="font-bold text-5xl">100M+</p>
                        <p className="font-bold text-2xl text-primary">Fast Shipment</p>
                    </div>
                    <div className="grid justify-items-center gap-5">
                        <div><UserGroupIcon className="h-16 w-16 text-primary" /></div>
                        <p className="font-bold text-5xl">777+</p>
                        <p className="font-bold text-2xl text-primary">Happy Clients</p>
                    </div>
                    <div className="grid justify-items-center gap-5">
                        <p><FaHandsHelping className="h-16 w-16 text-primary" /></p>
                        <p className="font-bold text-5xl">24H</p>
                        <p className="font-bold text-2xl text-primary">Suppors in 24h</p>
                    </div>
                    <div className="grid justify-items-center gap-5">
                        <p><ShoppingCartIcon className="h-16 w-16 text-primary" /></p>
                        <p className="font-bold text-5xl">10K+</p>
                        <p className="font-bold text-2xl text-primary">Stored Product</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:flex gap-10 justify-evenly mx-auto my-16 border-2 rounded p-5 py-12 shadow-md bg-blue-200">
                    <div className="lg:w-1/2">
                        <h1 className="md:text-3xl font-bold uppercase font-mono">Have any queation about us or get a product request?</h1>
                        <h1 className="lg:text-xl text-xs uppercase ">Feel free to contct us</h1>
                    </div>
                    <div className="lg:flex gap-5 grid grid-cols-1">
                        <button className="btn btn-primary"> Request For Quote</button>
                        <button className="btn btn-accent">Contact us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;