import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-blue-900 text-white shadow-lg">
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold">Task Manager</h1>
        </div>
      </header>
      <nav className="bg-white shadow">
        <div className="container mx-auto p-4 flex space-x-4">
          <Link
            to="/app/create-project"
            className="text-blue-600 hover:text-blue-800 transition duration-300"
            style={{ textDecoration: "none" }}
          >
            Create Project
          </Link>
          <Link
            to="/app/create-task"
            className="text-blue-600 hover:text-blue-800 transition duration-300"
            style={{ textDecoration: "none" }}
          >
            Create Task
          </Link>
          <Link
            to="/app/delete-task"
            className="text-blue-600 hover:text-blue-800 transition duration-300"
            style={{ textDecoration: "none" }}
          >
            Delete Task
          </Link>
          <Link
            to="/app/update-task"
            className="text-blue-600 hover:text-blue-800 transition duration-300"
            style={{ textDecoration: "none" }}
          >
            Update Task
          </Link>
          <Link
            to="/app/projects"
            className="text-blue-600 hover:text-blue-800 transition duration-300"
            style={{ textDecoration: "none" }}
          >
            Project List
          </Link>
          <Link
            to="/app/tasks"
            className="text-blue-600 hover:text-blue-800 transition duration-300"
            style={{ textDecoration: "none" }}
          >
            Task List
          </Link>
        </div>
      </nav>
      <main className="flex-grow container mx-auto p-4">
        <div className="bg-white rounded-lg p-4 shadow-md mb-4">
          <h2 className="text-lg font-semibold mb-2">Welcome to Task Manager!</h2>
          <p className="text-gray-600">
            Here you can manage your projects and tasks efficiently. Click on the links above to get started.
          </p>
        </div>
        <Outlet />
      </main>
      <footer className="bg-blue-900 text-white mt-4">
        <div className="container mx-auto p-4 text-center">
          <p>&copy; 2024 Task Manager. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
