import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    accept: 'application/json',
  },
  data: {},
});

export default api;
