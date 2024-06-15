// src/components/TaskList.js
import React, { useState, useEffect } from 'react';
import api from '../api';
import { ListGroup, Card } from 'react-bootstrap';

const TaskList = ({ userId }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await api.post('/taskManager/assigned/task', { userId });
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks', error);
      }
    };
    fetchTasks();
  }, [userId]);

  return (
    <Card className="p-4">
      <Card.Title className="text-center">Assigned Tasks</Card.Title>
      <ListGroup>
        {tasks.map((task) => (
          <ListGroup.Item key={task.id}>
            <h5>{task.title}</h5>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};

export default TaskList;
