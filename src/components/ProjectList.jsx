// src/components/ProjectList.js
import React, { useState, useEffect } from 'react';
import api from '../api';
import { ListGroup, Card } from 'react-bootstrap';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.post('/taskManager/project/task', { userId: 1 });
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects', error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <Card className="p-4">
      <Card.Title className="text-center">Projects</Card.Title>
      <ListGroup>
        {projects.map((project) => (
          <ListGroup.Item key={project.id}>
            <h5>{project.name}</h5>
            <ul>
              {project.tasks.map((task) => (
                <li key={task.id}>{task.title}</li>
              ))}
            </ul>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};

export default ProjectList;
