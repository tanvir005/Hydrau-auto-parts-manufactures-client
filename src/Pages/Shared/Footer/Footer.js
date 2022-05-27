import React from 'react';
import { FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    const date = new Date();
    return (
        <footer className="static bottom-0 bg-secondary w-full text-white" >
            <div className="inline-grid p-20 md:flex md:justify-evenly py-16  gap-5 ">
                <div className="text-start">
                    <h1 className="text-2xl font-bold mb-5  ">Quick Link</h1>
                    <ul className="inline-grid">
                        <Link to="/">Home</Link>
                        <Link to="/parts">Parts</Link>
                        <Link to="/about">About</Link>
                        <Link to="/blog">Blog</Link>
                    </ul>
                </div>
                <div className="text-start">
                    <h1 className="text-2xl font-bold mb-5  ">Available Services</h1>
                    <ul className="inline-grid">
                        <Link to="/services">Emgime Oil</Link>
                        <Link to="/services">piston</Link>
                        <Link to="/services">Glass Door</Link>
                        <Link to="/producit">Bettery</Link>
                    </ul>
                </div>
                <div className="text-start ">
                    <h1 className="text-2xl font-bold mb-5  ">Follow Me</h1>
                    <ul className="flex gap-5">
                        <Link to="/services"><FaGoogle></FaGoogle></Link>
                        <Link to="/services"><FaLinkedin></FaLinkedin></Link>
                        <Link to="/services"><FaFacebook></FaFacebook></Link>
                        <Link to="/services"><FaGoogle></FaGoogle></Link>
                        
                    </ul>
                </div>
            </div>
            <p className="text-center text-gray-500 text-xs pb-4">
                &copy;{date.getFullYear()} HYDRAU auto parts manufactures. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;