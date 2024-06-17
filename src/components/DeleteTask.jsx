import React, { useState, useEffect, useContext } from "react";
import api from "../api";
import { UserContext } from "../UserContext";

const DeleteTask = () => {
  const { userId } = useContext(UserContext);
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await api.post('/taskManager/tasks/userId', { id: userId });
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks", error);
      }
    };

    fetchTasks();
  }, [userId]);

  const handleDelete = async () => {
    if (selectedTask) {
      try {
        console.log(selectedTask);
        await api.delete(`/taskManager/${selectedTask}`);
        setTasks(tasks.filter(task => task.id !== selectedTask));
        setSelectedTask(null);
      } catch (error) {
        console.error("Error deleting task", error);
      }
    }
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-center text-2xl font-bold mb-4">Delete Task</h2>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox"
                onChange={() => setSelectedTask(task.id)}
                checked={selectedTask === task.id}
              />
              <span>{task.title}</span>
            </label>
          </li>
        ))}
      </ul>
      <button
        className="mt-4 w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700"
        onClick={handleDelete}
        disabled={!selectedTask}
      >
        Delete Selected Task
      </button>
    </div>
  );
};

export default DeleteTask;
