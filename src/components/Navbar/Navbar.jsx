import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" bg-sky-50 flex justify-around items-center py-12">
      <div className="">
        <Link to="/" className="text-2xl font-bold">
          DevJobs
        </Link>
      </div>
      <div>
        <Link to="/" className="font-medium leading-4 mr-6">
          Home
        </Link>
        <Link to="/statistics" className="font-medium leading-4 mr-6">
          Statistics
        </Link>
        <Link to="/applied-jobs" className="font-medium leading-4 mr-6">
          Applied Jobs
        </Link>
        <Link to="/blog" className="font-medium leading-4">
          Blog
        </Link>
      </div>
      <button className="bg-gradient-to-r from-indigo-400 to-purple-500 text-white font-extrabold py-4 px-6 rounded ">
        Start Applying
      </button>
    </nav>
  );
};

export default Navbar;
