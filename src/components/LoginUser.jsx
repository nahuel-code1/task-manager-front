import React, { useState } from 'react';
import api from '../api';
import { Form, Button, Card } from 'react-bootstrap';

const LoginUser = () => {
  const [loginData, setLoginData] = useState({
    nombreUsuario: '',
    contraseña: ''
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/taskManager/login', loginData);
      console.log(response.data);
    } catch (error) {
      console.error('Error logging in', error);
    }
  };

  return (
    <Card className="p-4">
      <Card.Title className="text-center">Login</Card.Title>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="nombreUsuario">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" name="nombreUsuario" onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="contraseña">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="contraseña" onChange={handleChange} required />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">Login</Button>
      </Form>
    </Card>
  );
};

export default LoginUser;
