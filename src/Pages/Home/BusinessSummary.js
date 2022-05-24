import React from 'react';

const BusinessSummary = () => {
    return (
        <div className="grid grid-cols-1 gap-10 mx-5">
            <div className="text-center">
                <h1 className="text-5xl font-bold uppercase "> thousands of people faith in us</h1>
                <h1 className="text-xl font-bold uppercase "> this is the reason why people trus us</h1>
            </div>
            <div className="lg:flex gap-5 lg:justify-around grid grid-cols-1">
                <div>
                    <p>img</p>
                    <p>77</p>
                    <p>countries</p>
                </div>
                <div>
                    <p>img</p>
                    <p>77</p>
                    <p>countries</p>
                </div>
                <div>
                    <p>img</p>
                    <p>77</p>
                    <p>countries</p>
                </div>
                <div>
                    <p>img</p>
                    <p>77</p>
                    <p>countries</p>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:flex gap-5">
                <div className="w-1/2">
                    <h1 className="text-3xl font-bold uppercase ">Have any queation about us or get a product request?</h1>
                    <h1 className="text-xl uppercase ">Feel free to contct us</h1>
                </div>
                <div className="lg:flex gap-5 grid grid-cols-1">
                    <button className="btn btn-primary"> Request For Quote</button>
                    <button className="btn btn-accent">Contact us</button>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;