import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Featured from '../Featured/Featured';

const Home = () => {
    const categories = useLoaderData();

    const [jobs, setJobs] = useState([]);
    const [showAllJobs, setShowAllJobs] = useState(false);

    useEffect(() => {
        const loadJobs = async () => {
            const res = await fetch("featuredJobs.json");
            const data = await res.json();
            setJobs(data);
        }
        loadJobs();
    }, [])

    const featuredJobs = showAllJobs ? jobs : jobs.slice(0, 4);

    return (
        <main className=''>
            <Banner></Banner>

            <section className='w-3/4 mx-auto text-center my-5 mt-24'>
                <div>
                    <h2 className='font-bold text-4xl'>Job Category List</h2>
                    <p className='font-medium leading-5 mt-3 mb-6 text-gray'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='grid grid-cols-4 gap-5'>
                    {
                        categories.map(category => <Category
                            key={category.id}
                            category={category}
                        ></Category>)
                    }
                </div>
            </section>

            <section className='w-3/4 mx-auto text-center my-24'>
                <div className='mt-24'>
                    <h2 className='font-bold text-4xl'>Featured Jobs</h2>
                    <p className='font-medium leading-5 mt-3 mb-6 text-gray'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='grid grid-cols-2 gap-5'>
                    {
                        featuredJobs.map(job => <Featured
                            key={job._id}
                            job={job}
                        ></Featured>)
                    }
                </div>
                {!showAllJobs && (
                    <button onClick={() => setShowAllJobs(true)} className='bg-gradient-to-r from-indigo-400 to-purple-500 text-white transition hover:text-black font-bold py-4 px-6 rounded mt-10'>See All Jobs</button>
                )}
            </section>

        </main>
    );
};

export default Home;
