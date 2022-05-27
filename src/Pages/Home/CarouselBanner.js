import React from 'react';
import parts_1 from '../../images/23.jpg';
import parts_2 from '../../images/Aftermarket.png';
import parts_3 from '../../images/Vehicles-parts.jpeg';
import parts_4 from '../../images/car-parts.png';
import parts_5 from '../../images/slide-content-3.png';
import { Link } from 'react-router-dom';


const CarouselBanner = () => {
    return (

        <div className="carousel max-h-96 mx-10">
            <div id="slide1" className="carousel-item relative w-full">
                <div className="lg:flex items-center text-white ">
                    <img src={parts_1} alt="slide" className="lg:mx-auto lg:h-full lg:order-2 mb-8" />
                    <div className="lg:w-2/5 lg:ml-32 lddlmr-10 lg:order-1">
                        <h1 className="text-primary font bold font-extrabold lg:text-5xl font-sans uppercase">We Provide all Kinds of Auto Parts Here</h1>
                        <p className=" lg:text-xl font-semibold text-secondary my-10">Find Quality Products from Verified Suppliers. Get a Live Quote Now! Trade Assurance. Production Monitoring. Logistics Service. Most Popular. Types: Machinery, Home & Kitchen, Consumer Electronics, Packaging & Printing, Lights & Lighting, Apparel.</p>
                        <div className="lg:flex gap-5 grid grid-cols-1">
                            <Link to="/parts" className="btn btn-primary text-white">Explore</Link>
                            <Link to="/parts" className="btn btn-accent text-white">Know us</Link>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide5" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
            <div className="lg:flex items-center text-white ">
                <img src={parts_2} alt="slide" className="lg:mx-auto lg:h-full lg:order-2 mb-8" />
                    <div className="lg:w-2/5 lg:ml-32 lddlmr-10 lg:order-1">
                        <h1 className="text-primary font bold font-extrabold lg:text-5xl font-sans uppercase">We Provide all Kinds of Auto Parts Here</h1>
                        <p className=" lg:text-xl font-semibold text-secondary my-10">Find Quality Products from Verified Suppliers. Get a Live Quote Now! Trade Assurance. Production Monitoring. Logistics Service. Most Popular. Types: Machinery, Home & Kitchen, Consumer Electronics, Packaging & Printing, Lights & Lighting, Apparel.</p>
                        <div className="lg:flex gap-5 grid grid-cols-1">
                            <Link to="/parts" className="btn btn-primary text-white">Explore</Link>
                            <Link to="/parts" className="btn btn-accent text-white">Know us</Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
            <div className="lg:flex items-center text-white ">
                <img src={parts_3} alt="slide" className="lg:mx-auto lg:h-full lg:order-2 mb-8" />
                    <div className="lg:w-2/5 lg:ml-32 lddlmr-10 lg:order-1">
                        <h1 className="text-primary font bold font-extrabold lg:text-5xl font-sans uppercase">We Provide all Kinds of Auto Parts Here</h1>
                        <p className=" lg:text-xl font-semibold text-secondary my-10">Find Quality Products from Verified Suppliers. Get a Live Quote Now! Trade Assurance. Production Monitoring. Logistics Service. Most Popular. Types: Machinery, Home & Kitchen, Consumer Electronics, Packaging & Printing, Lights & Lighting, Apparel.</p>
                        <div className="lg:flex gap-5 grid grid-cols-1">
                            <Link to="/parts" className="btn btn-primary text-white">Explore</Link>
                            <Link to="/parts" className="btn btn-accent text-white">Know us</Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
            <div className="lg:flex items-center text-white ">
                <img src={parts_4} alt="slide" className="lg:mx-auto lg:h-full lg:order-2 mb-8" />
                    <div className="lg:w-2/5 lg:ml-32 lddlmr-10 lg:order-1">
                        <h1 className="text-primary font bold font-extrabold lg:text-5xl font-sans uppercase">We Provide all Kinds of Auto Parts Here</h1>
                        <p className=" lg:text-xl font-semibold text-secondary my-10">Find Quality Products from Verified Suppliers. Get a Live Quote Now! Trade Assurance. Production Monitoring. Logistics Service. Most Popular. Types: Machinery, Home & Kitchen, Consumer Electronics, Packaging & Printing, Lights & Lighting, Apparel.</p>
                        <div className="lg:flex gap-5 grid grid-cols-1">
                            <Link to="/parts" className="btn btn-primary text-white">Explore</Link>
                            <Link to="/parts" className="btn btn-accent text-white">Know us</Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
            <div className="lg:flex items-center text-white ">
                <img src={parts_5} alt="slide" className="lg:mx-auto lg:h-full lg:order-2 mb-8" />
                    <div className="lg:w-2/5 lg:ml-32 lddlmr-10 lg:order-1">
                        <h1 className="text-primary font bold font-extrabold lg:text-5xl font-sans uppercase">We Provide all Kinds of Auto Parts Here</h1>
                        <p className=" lg:text-xl font-semibold text-secondary my-10">Find Quality Products from Verified Suppliers. Get a Live Quote Now! Trade Assurance. Production Monitoring. Logistics Service. Most Popular. Types: Machinery, Home & Kitchen, Consumer Electronics, Packaging & Printing, Lights & Lighting, Apparel.</p>
                        <div className="lg:flex gap-5 grid grid-cols-1">
                            <Link to="/parts" className="btn btn-primary text-white">Explore</Link>
                            <Link to="/parts" className="btn btn-accent text-white">Know us</Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide5" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>

    );
};

export default CarouselBanner;