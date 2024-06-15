import React, { useState, useEffect, useContext } from 'react';
import api from '../api';
import { ListGroup, Card } from 'react-bootstrap';
import { UserContext } from "../UserContext";

const ProjectList = () => {
  const { userId } = useContext(UserContext);

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.post('/taskManager/project/task', { id: userId });
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects', error);
      }
    };
    fetchProjects();
  }, [userId]);

  return (
    <div className="max-w-lg mx-auto">
      <Card className="p-4 shadow-md">
        <Card.Title className="text-center text-lg font-semibold mb-4">Projects</Card.Title>
        <ListGroup variant="flush">
          {projects.map((project) => (
            <ListGroup.Item key={project.id} className="border-b border-gray-200">
              <h5 className="text-xl font-medium mb-2">{project.name}</h5>
              <ul className="ml-4">
                {project.tasks.map((task) => (
                  <li key={task.id} className="text-gray-700">{task.title}</li>
                ))}
              </ul>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </div>
  );
};

export default ProjectList;
