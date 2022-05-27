import React from 'react';
import { Link } from 'react-router-dom';
import joinUs from '../../../images/join-us-bnr.jpg';


const JoinUs = () => {
    return (
        <section className="w-full bg-accent-dark bg-cover my-20"
            style={{ background: `url(${joinUs})` }}>
        <div  className="w-full bg-gradient-to-r from-slate-500 shadow-xl py-16">
           
            <div className="md:flex justify-evenly p-8">
                <div className="grid gap-2 align-middle">
                    <p className="font-bold text-2xl text-white">We'er Spreding Day by Day </p>
                    <p className="font-bold text-4xl text-accent">Join Our Friendy Community</p>
                    <p className=" text-white">Consectetur adipisicing elit sed dotiane eiusmod tempor incididunt
                        utna labore etnalorale magna aliqua enim ad minim veniam quis nostrud exerciteon ullamco.</p>
                </div>
              <div className="my-5">
                    <Link to="/signup" className="btn btn-accent text-white">Register Now</Link>
                </div>
            </div>
        </div>
        </section>
    );
};

export default JoinUs;