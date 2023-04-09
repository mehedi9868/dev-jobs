import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <main>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </main>
    );
};

export default Home;