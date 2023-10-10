import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import SinglePart from './SinglePart';


const AllParts = () => {
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
                    parts.map(part => <SinglePart
                        key={part._id}
                        part={part}
                    ></SinglePart>)
                }
            </div>
        </div>
    );
};

export default AllParts;