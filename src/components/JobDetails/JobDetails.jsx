import { list } from 'postcss';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const JobDetails = () => {

    const dynamic = useParams();

    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        const loadJobs = async () => {
            const res = await fetch("/featuredJobs.json");
            const data = await res.json();
            setJobs(data);
        }
        loadJobs();
    }, [])

    const job = jobs.find(single => single._id === dynamic.jobID);
    const [added, setAdded] = useState({})

    const navigate = useNavigate()
    // set to local storage for future use:
    const handleApply = (id) => {
        let stored = JSON.parse(localStorage.getItem("jobs")) || [];
        const existingIds = stored.map(item => item.id);
        if (!existingIds.includes(id)) {
            stored.push({ id: id });
            localStorage.setItem("jobs", JSON.stringify(stored));
        }
        navigate("/applied-jobs");
    }


    return (
        <>
            {job ? (
                <div className='w-3/4 mt-24 mx-auto'>
                    <h2 className='text-xl font-bold text-center mb-10'>Job Details</h2>
                    <div className='flex justify-between gap-5'>
                        <section className='w-3/4'>
                            <h2 className='text-gray-600 font-bold text-base leading-5 mt-5'>Job Description:
                                <span className='text-gray-400 font-medium'> {job.job_description}</span>
                            </h2>
                            <h2 className='text-gray-600 font-bold text-base leading-5 mt-5'>Job Responsibility:
                                <span className='text-gray-400 font-medium'> {job.job_responsibility}</span>
                            </h2>
                            <h2 className='text-gray-600 font-bold text-base leading-5 mt-5'>Educational Requirements:
                                <span className='text-gray-400 font-medium'> {job.educational_requirements.map((req, index) => <li key={index}>{req}</li>)}
                                </span>
                            </h2>
                            <h2 className='text-gray-600 font-bold text-base leading-5 mt-5'>Experiences:
                                <span className='text-gray-400 font-medium'> {job.experiences}</span>
                            </h2>
                        </section>
                        <section className=''>
                            <div className='bg-violet-50 border rounded-lg p-6'>
                                <h2 className='font-bold text-base leading-5 mb-5'>Job Details</h2>
                                <hr />
                                <p className='text-gray-600 font-bold text-base leading-5 mt-5'>Salary:
                                    <span className='text-gray-400 font-medium'> {job.salary}</span>
                                </p>
                                <p className='text-gray-600 font-bold text-base leading-5 mt-5'>Job Title:
                                    <span className='text-gray-400 font-medium'> {job.job_title}</span>
                                </p>
                                <h2 className='font-bold text-base leading-5 my-5'>Contact Information</h2>
                                <hr />
                                <p className='text-gray-600 font-bold text-base leading-5 mt-5'>Phone:
                                    <span className='text-gray-400 font-medium'> {job.phone}</span>
                                </p>
                                <p className='text-gray-600 font-bold text-base leading-5 mt-5'>Email:
                                    <span className='text-gray-400 font-medium'> {job.email}</span>
                                </p>
                                <p className='text-gray-600 font-bold text-base leading-5 mt-5'>address:
                                    <span className='text-gray-400 font-medium'> {job.address}</span>
                                </p>
                            </div>
                            <button onClick={() => handleApply(job._id)} className="w-full bg-gradient-to-r from-indigo-400 to-purple-500 text-white transition hover:text-black font-bold py-4 px-6 rounded mt-4 ">Apply Now</button>
                        </section>
                    </div>
                </div>


            ) : ''}
        </>
    );
};

export default JobDetails;