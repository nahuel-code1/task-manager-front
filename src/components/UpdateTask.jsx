import React, { useState, useEffect, useContext } from "react";
import api from "../api";
import { UserContext } from "../UserContext";
import { useNavigate } from "react-router-dom";

const UpdateTask = () => {
  const navigate = useNavigate();
  const { userId } = useContext(UserContext);

  const [tasks, setTasks] = useState([]);
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [taskDetails, setTaskDetails] = useState({ title: "", description: "" });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await api.post('/taskManager/tasks/userId', { id: userId });
        setTasks(response.data);
      } catch (error) {
        setError("Error fetching tasks");
        console.error(error);
      }
    };

    fetchTasks();
  }, [userId]);

  const handleTaskChange = (e) => {
    const taskId = e.target.value;
    const selectedTask = tasks.find(task => task.id === parseInt(taskId));
    setSelectedTaskId(taskId);
    setTaskDetails({ title: selectedTask.title, description: selectedTask.description });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskDetails((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.put(`/taskManager/modify/${selectedTaskId}`, taskDetails);
      if (response.data.estado === 1) {
        setMessage(response.data.mensaje);
        setStatus(true);
        setTimeout(() => {
          navigate("/app/projects"); // Navigate to task list after successful update
        }, 2000);
      } else {
        setMessage(response.data.mensaje);
        setStatus(false);
      }
    } catch (error) {
      setError("Error updating task");
      console.error(error);
    }
  };

  return (
    <div className="p-6 bg-gray-50 shadow-md rounded-lg max-w-lg mx-auto mt-10">
      <h2 className="text-center text-3xl font-bold mb-6 text-gray-800">Update Task</h2>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      {message && (
        <p className={`mb-4 ${status ? "text-green-600" : "text-red-600"}`}>
          {message}
        </p>
      )}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Select Task</label>
        <select
          onChange={handleTaskChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="">Select a task</option>
          {tasks.map(task => (
            <option key={task.id} value={task.id}>
              {task.title}
            </option>
          ))}
        </select>
      </div>
      {selectedTaskId && (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Title</label>
            <input
              type="text"
              name="title"
              value={taskDetails.title}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Description</label>
            <textarea
              name="description"
              value={taskDetails.description}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Update Task
          </button>
        </form>
      )}
    </div>
  );
};

export default UpdateTask;
