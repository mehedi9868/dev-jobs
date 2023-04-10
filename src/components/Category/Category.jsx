import React from 'react';

const Category = ({ category }) => {
    const { availableJobs, icon, id, jobCategory } = category;
    return (
        <div className='w-[310px] h-[242px] text-left border rounded-lg p-8 my-5'>
            <img src={icon} className='w-14 h-14' />
            <h4 className='font-bold text-base leading-5 mt-6 mb-2'>{jobCategory}</h4>
            <p className='font-medium text-gray-400'>{availableJobs} Jobs Available</p>
        </div>
    );
};

export default Category;