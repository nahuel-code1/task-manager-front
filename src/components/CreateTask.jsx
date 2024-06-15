// src/components/CreateTask.js
import React, { useState } from 'react';
import api from '../api';
import { Form, Button, Card } from 'react-bootstrap';

const CreateTask = () => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    status: 'PENDING',
    projectId: ''
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/taskManager/create/task', task);
      console.log(response.data);
    } catch (error) {
      console.error('Error creating task', error);
    }
  };

  return (
    <Card className="p-4">
      <Card.Title className="text-center">Create Task</Card.Title>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Task Title</Form.Label>
          <Form.Control type="text" name="title" onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Task Description</Form.Label>
          <Form.Control type="text" name="description" onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="projectId">
          <Form.Label>Project ID</Form.Label>
          <Form.Control type="text" name="projectId" onChange={handleChange} required />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">Create Task</Button>
      </Form>
    </Card>
  );
};

export default CreateTask;
