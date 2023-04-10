import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const marks = [
        {
            id: 1,
            name: "Assignment-01",
            mark: 60
        },
        {
            id: 2,
            name: "Assignment-02",
            mark: 60
        },
        {
            id: 3,
            name: "Assignment-03",
            mark: 60
        },
        {
            id: 4,
            name: "Assignment-04",
            mark: 60
        },
        {
            id: 5,
            name: "Assignment-05",
            mark: 60
        },
        {
            id: 6,
            name: "Assignment-06",
            mark: 54
        },
        {
            id: 7,
            name: "Assignment-07",
            mark: 60
        },
        {
            id: 8,
            name: "Assignment-08",
            mark: 60
        }
    ];

    return (
        <div className='text-center w-3/4 mx-auto'>
            <h2 className='text-2xl font-bold m-6'>Assignment Statistics:</h2>

            <AreaChart
                width={1200}
                height={500}
                data={marks}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <Area dataKey="mark" type="monotone" stroke="#000000" fill="#8884d8" ></Area>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </AreaChart>

        </div>
    );
};

export default Statistics;