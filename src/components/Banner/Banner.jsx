import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row lg:justify-between w-100 lg:items-center lg:px-[12%] mx-auto bg-sky-50">
      <section className="w-full px-3 lg:w-1/2">
        <h2 className="text-5xl lg:text-6xl font-bold leading-[72px]">
          One Step <br />
          Closer To Your <br />
          <span className="text-purple-500">Dream Job</span>
        </h2>
        <p className="my-8">
          <small className="text-justify font-medium text-base text-gray-600">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </small>
        </p>
        <button className="bg-gradient-to-r from-indigo-400 to-purple-500 text-white transition hover:text-black font-bold py-4 px-6 rounded mb-3 ">
          Get Started
        </button>
      </section>
      <section className="w-auto">
        <img src="images/target.png" alt="" />
      </section>
    </div>
  );
};

export default Banner;
