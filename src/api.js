import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080/task-manager'
});

export default instance;
