import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import SinglePart from './SinglePart';

const Parts = () => {
    const { data: parts, isLoading, refetch } = useQuery('parts', () => fetch('https://sheltered-beach-01598.herokuapp.com/parts', {
        method: 'GET',
        headers: {
            authorization: `Barer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
   
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className="uppercase text-center text-5xl text-primary font-bold">Our hot selling products</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 justify-center">
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

export default Parts;