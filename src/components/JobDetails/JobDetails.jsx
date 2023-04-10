import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
    console.log(job);
    const { company_logo, company_name, educational_requirements, experiences, fulltime_or_parttime, job_description, job_responsibility, job_title, location, phone_or_email, remote_or_onsite, salary, _id } = job;

    return (
        <>
            {job ? (
                <div className='w-3/4 mt-24 mx-auto'>
                    <h2 className='text-xl font-bold text-center mb-10'>Job Details</h2>
                    <div className='flex justify-between'>
                        <section className='w-3/4'>
                            <h2>Job Description: <span>{job_description}</span></h2>
                            <h2>Job Responsibility: {job_responsibility}<span></span></h2>
                            <h2>Educational Requirements: <span>{educational_requirements}</span></h2>
                            <h2>Experiences: <span>{experiences}</span></h2>
                        </section>
                        <section className=''>
                            <div className='bg-violet-50 border rounded-lg p-6'>
                                <h2 className='font-bold text-base leading-5 mb-5'>Job Details</h2>
                                <hr />
                                <p className='text-gray-600 font-bold text-base leading-5 mt-5'>Salary:
                                    <span className='text-gray-400 font-medium'> {salary}</span>
                                </p>
                                <p className='text-gray-600 font-bold text-base leading-5 mt-5'>Job Title:
                                    <span className='text-gray-400 font-medium'> {job_title}</span>
                                </p>
                                <h2 className='font-bold text-base leading-5 my-5'>Contact Information</h2>
                                <hr />
                                <p className='text-gray-600 font-bold text-base leading-5 mt-5'>Phone:
                                    <span className='text-gray-400 font-medium'></span>
                                </p>
                                <p className='text-gray-600 font-bold text-base leading-5 mt-5'>Email:
                                    <span className='text-gray-400 font-medium'></span>
                                </p>
                                <p className='text-gray-600 font-bold text-base leading-5 mt-5'>address:
                                    <span className='text-gray-400 font-medium'></span>
                                </p>
                            </div>
                            <button className="w-full bg-gradient-to-r from-indigo-400 to-purple-500 text-white transition hover:text-black font-bold py-4 px-6 rounded mt-4 ">Apply Now</button>
                        </section>
                    </div>
                </div>


            ) : ''}
        </>
    );
};

export default JobDetails;