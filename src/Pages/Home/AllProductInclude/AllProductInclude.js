
import React from 'react';
import { FaShippingFast, FaHandsHelping } from 'react-icons/fa';
import { UserGroupIcon, ShoppingCartIcon, CheckIcon, LocationMarkerIcon } from '@heroicons/react/solid'

const AllProductInclude = () => {
    return (
        <div className="mx-5 mb-10">
            <h4 className="text-primary text-xs font-bold uppercase text-center mb-2">Benifitis</h4>
            <div className="grid grid-cols-1 gap-10 mx-5">

                <div className="text-center font-mono">
                    <h1 className="lg:text-5xl font-bold uppercase ">All Plans Included</h1>
                    <h1 className="lg:text-sm text-xs text-center font-bold uppercase italic text-accent lg:mx-32 my-5"> A product is a tangible item that is put on the market for acquisition,  attention, or consumption,
                        while a service is an intangible item, which arises from the output of one or more individuals. </h1>
                </div>
                <div className="lg:flex gap-10 lg:justify-evenly lg:mx-44">
                    <div className="flex justify-items-center gap-5 mb-5">
                        <div> <FaShippingFast className="h-16 w-16 text-primary" /></div>
                        <div><p className="font-bold text-4xl text-secondary">Free Shipping</p>
                            <p className="">As a Prime member enjoy fast, FREE delivery on over 100 million items. Also, gain early access to deals, Prime exclusive brands, video and music streaming.</p>
                        </div>
                    </div>
                    <div className="flex justify-items-center gap-5 mb-5">
                        <div> <CheckIcon className="h-16 w-16 text-primary" /></div>
                        <div><p className="font-bold text-4xl text-secondary">Genuine Product</p>
                            <p className="">As a Prime member enjoy fast, FREE delivery on over 100 million items. Also, gain early access to deals, Prime exclusive brands, video and music streaming.</p>
                        </div>
                    </div>
                    <div className="flex justify-items-center gap-5 mb-5">
                        <div> <LocationMarkerIcon className="h-16 w-16 text-primary" /></div>
                        <div><p className="font-bold text-4xl text-secondary">Tracking Orders</p>
                            <p className="text-primary">As a Prime member enjoy fast,<br /> FREE delivery on over 100 million items. Also, gain early access to deals, Prime exclusive brands, video and music streaming.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AllProductInclude;