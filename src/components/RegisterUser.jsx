import React, { useState } from 'react';
import api from '../api';
import { Form, Button, Card } from 'react-bootstrap';

const RegisterUser = () => {
  const [user, setUser] = useState({
    nombreUsuario: '',
    email: '',
    nombreCompleto: '',
    contraseña: ''
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/taskManager/register', user);
      console.log(response.data);
    } catch (error) {
      console.error('Error registering user', error);
    }
  };

  return (
    <Card className="p-4">
      <Card.Title className="text-center">Register</Card.Title>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="nombreUsuario">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" name="nombreUsuario" onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="nombreCompleto">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" name="nombreCompleto" onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="contraseña">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="contraseña" onChange={handleChange} required />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">Register</Button>
      </Form>
    </Card>
  );
};

export default RegisterUser;
