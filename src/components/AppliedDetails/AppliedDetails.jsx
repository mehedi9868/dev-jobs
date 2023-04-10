import React from 'react';
import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
const AppliedDetails = ({ job }) => {
    const { company_logo, job_title, company_name, remote_or_onsite, fulltime_or_parttime, location, salary, _id } = job;
    return (
        <div className='flex justify-between items-center border rounded-lg p-6 mb-5'>
            <div className='flex items-center gap-6'>
                <div className='border rounded-lg'>
                    <img className='w-[240px] h-[240px]' src={company_logo} alt="" />
                </div>
                <div>
                    <h2 className='mt-5 mb-2 font-bold text-xl'>{job_title}</h2>
                    <p className='mb-3 font-semibold text-base'>{company_name}</p>
                    <div className='my-6'>
                        <span className='text-violet-500 border rounded px-6 py-2 mx-3 font-semibold text-base'>{remote_or_onsite}</span>
                        <span className='text-violet-500 border rounded px-6 py-2 font-semibold text-base'>{fulltime_or_parttime}</span>
                    </div>
                    <div className='flex gap-5 mb-5 mt-3 font-semibold text-base'>
                        <MapPinIcon className="h-6 w-6 text-gray-500" />
                        <p>{location}</p>
                        <CurrencyDollarIcon className="h-6 w-6 text-gray-500" />
                        <p>{salary}</p>
                    </div>
                </div>
            </div>
            <Link to={`/job/${_id}`}>
                <button className='bg-gradient-to-r from-indigo-400 to-purple-500 text-white transition hover:text-black font-bold py-4 px-6 rounded'>View Details</button>
            </Link>
        </div>
    );
};

export default AppliedDetails;