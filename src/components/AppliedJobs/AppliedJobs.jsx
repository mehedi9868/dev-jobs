import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AppliedDetails from '../AppliedDetails/AppliedDetails';


const AppliedJobs = () => {

    // const allJobs = useLoaderData();
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        const loadJobs = async () => {
            const res = await fetch("/featuredJobs.json");
            const data = await res.json();
            setJobs(data);
        }
        loadJobs();

    }, [])
    // get from local storage and match both id:
    const applied = JSON.parse(localStorage.getItem("jobs")) || [];
    const appliedID = applied.map(singleId => singleId.id);

    const matchedJobs = jobs.filter(job => appliedID.includes(job._id));
    return (
        <div className='w-3/4 mx-auto'>
            <h2 className='text-xl font-bold text-center my-10'>Applied Jobs</h2>
            <div className='flex justify-end items-center gap-5 my-6'>
                <h2 className='text-base font-medium'>Sort By:</h2>
                <button className="bg-gradient-to-r from-indigo-400 to-purple-500 text-white transition hover:text-black font-bold py-4 px-6 rounded">Remote</button>
                <button className="bg-gradient-to-r from-indigo-400 to-purple-500 text-white transition hover:text-black font-bold py-4 px-6 rounded">Onsite</button>
            </div>
            {
                matchedJobs.map(job => <AppliedDetails
                    key={job._id}
                    job={job}
                ></AppliedDetails>
                )
            }
        </div>
    );
};


export default AppliedJobs;