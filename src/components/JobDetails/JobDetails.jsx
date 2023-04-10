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


    return (
        <div>
            {job ? (
                <h2>{job.location}</h2>

            ) : ''}
        </div>
    );
};

export default JobDetails;