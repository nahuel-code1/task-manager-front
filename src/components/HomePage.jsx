// src/components/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Task Manager Application</h1>
        <p className="text-gray-600 mb-4">
          Welcome to the Task Manager Application. This app allows you to manage projects and tasks efficiently.
        </p>
        <p className="text-gray-600 mb-8">
          Please register if you don't have an account or log in if you already have one.
        </p>
        <div className="flex justify-center">
          <Link
            to="/login"
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mr-2 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
