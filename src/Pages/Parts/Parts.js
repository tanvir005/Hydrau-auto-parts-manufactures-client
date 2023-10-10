import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../Shared/Loading';
import SinglePart from './SinglePart';

const Parts = () => {
    const { data: parts, isLoading, refetch } = useQuery('parts', () => fetch('https://hydrau-auto-parts-manufactures.vercel.app/parts', {
        method: 'GET',
        headers: {
            authorization: `Barer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className="mx-10">
            <h4 className="text-primary text-xs font-bold uppercase text-center mb-2">Benifitis</h4>
            <div className="text-center font-mono">
                <h1 className="lg:text-5xl font-bold uppercase ">Our hot selling products</h1>
                <h1 className="lg:text-sm text-xs text-center font-bold uppercase italic text-accent lg:mx-32 my-5"> Best Products, best price, best deal ever </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-10 mx-auto">
                {
                    parts.slice(0, 6).map(part => <SinglePart
                        key={part._id}
                        part={part}
                    ></SinglePart>)
                }
                

            </div>
            <div className="flex justify-end  mx-10">
                    <Link className='border-2 border-primary px-4 py-2 rounded  hover:font-semibold hover:shadow-lg text-primary' to="/parts"> See More</Link>
                </div>
        </div>
    );
};

export default Parts;