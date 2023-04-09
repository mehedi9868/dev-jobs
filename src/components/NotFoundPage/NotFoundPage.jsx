import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-7xl font-bold text-gray-800 mb-4">404</h1>
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        <span className="text-purple-500">Oops!</span> Page not found
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        The page you are looking for does not exist.
      </p>
      <div className="flex gap-2">
        <button
          onClick={handleGoBack}
          className="bg-gradient-to-r from-indigo-400 to-purple-500 text-white transition hover:text-black py-3 px-6 rounded font-bold"
        >
          Go Back
        </button>
        <button
          onClick={handleGoHome}
          className="bg-gradient-to-r from-indigo-400 to-purple-500 text-white transition hover:text-black py-3 px-6 rounded font-bold"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
