import React, { useState } from 'react';
import api from '../api';
import { Form, Button, Card } from 'react-bootstrap';

const CreateProject = () => {
  const [project, setProject] = useState({
    name: '',
    userId: ''
  });

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/taskManager/create/project', project);
      console.log(response.data);
    } catch (error) {
      console.error('Error creating project', error);
    }
  };

  return (
    <Card className="p-4">
      <Card.Title className="text-center">Create Project</Card.Title>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Project Name</Form.Label>
          <Form.Control type="text" name="name" onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="userId">
          <Form.Label>User ID</Form.Label>
          <Form.Control type="text" name="userId" onChange={handleChange} required />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">Create Project</Button>
      </Form>
    </Card>
  );
};

export default CreateProject;
