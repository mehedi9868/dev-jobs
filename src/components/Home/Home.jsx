import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Featured from '../Featured/Featured';

const Home = () => {
    const categories = useLoaderData();
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

            <section>
                <Featured></Featured>
            </section>
        </main>
    );
};

export default Home;