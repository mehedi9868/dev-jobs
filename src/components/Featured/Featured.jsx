import React from 'react';
import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
const Featured = ({ job }) => {
    const { company_logo, job_title, company_name, remote_or_onsite, location, salary, _id } = job;
    return (
        <div className='w-full h-full text-left border rounded-lg p-8 my-5'>
            <img className='' src={company_logo} alt="" />
            <h2 className='mt-5 mb-2 font-bold text-xl'>{job_title}</h2>
            <p className='mb-3 font-semibold text-base'>{company_name}</p>
            <span className='text-violet-500 border rounded px-6 py-2 font-semibold text-base'>{remote_or_onsite}</span>
            <div className='flex gap-5 mb-5 mt-3 font-semibold text-base'>
                <MapPinIcon className="h-6 w-6 text-gray-500" />
                <p>{location}</p>
                <CurrencyDollarIcon className="h-6 w-6 text-gray-500" />
                <p>{salary}</p>
            </div>
            <Link to={`/job/${_id}`}>
                <button className='bg-gradient-to-r from-indigo-400 to-purple-500 text-white transition hover:text-black font-bold py-4 px-6 rounded'>View Details</button>
            </Link>

        </div>
    );
};

export default Featured;