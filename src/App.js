// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import RegisterUser from "./components/RegisterUser";
import LoginUser from "./components/LoginUser";
import CreateProject from "./components/CreateProject";
import CreateTask from "./components/CreateTask";
import ProjectList from "./components/ProjectList";
import TaskList from "./components/TaskList";
import { UserProvider } from "./UserContext";
import UpdateTask from "./components/UpdateTask";
import DeleteTask from "./components/DeleteTask";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <UserProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/login" element={<LoginUser setIsLoggedIn={setIsLoggedIn} />} />
        {isLoggedIn ? (
          
            <Route path="/app" element={<Layout />}>
              <Route path="create-project" element={<CreateProject />} />
              <Route path="create-task" element={<CreateTask />} />
              <Route path="update-task" element={<UpdateTask />} />
              <Route path="delete-task" element={<DeleteTask />} />
              <Route path="projects" element={<ProjectList />} />
              <Route path="tasks" element={<TaskList userId={1} />} /> {/* Example userId */}
            </Route>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
      </UserProvider>
    </Router>
  );
};

export default App;
