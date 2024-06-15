import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import api from './api';

import Layout from './components/Layout';
import Home from './pages/Home';
import RegisterUser from './components/RegisterUser';
import LoginUser from './components/LoginUser';
import CreateProject from './components/CreateProject';
import CreateTask from './components/CreateTask';
import ProjectList from './components/ProjectList';
import TaskList from './components/TaskList';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginState, setLoginState] = useState(null); // Aquí guardarías el resultado de StateResult

  const handleLogin = async (username, password) => {
    try {
      const response = await api.post('/taskManager/login', { nombreUsuario: username, contraseña: password });
      const result = response.data;

      if (result.estado) {
        setIsLoggedIn(true);
        setLoginState(result); // Guarda el estado de login para usarlo después
      } else {
        alert(result.mensaje); // Mostrar mensaje de error si el login falla
      }
    } catch (error) {
      console.error('Error al hacer login:', error);
    }
  };

  return (
    <Router>
      <Layout isLoggedIn={isLoggedIn}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/login" element={<LoginUser onLogin={handleLogin} />} />
          {isLoggedIn ? (
            <>
              <Route path="/create-project" element={<CreateProject />} />
              <Route path="/create-task" element={<CreateTask />} />
              <Route path="/projects" element={<ProjectList />} />
              <Route path="/tasks" element={<TaskList userId={1} />} /> {/* Example userId */}
            </>
          ) : (
            <Route path="*" element={<Navigate to="/login" />} />
          )}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
