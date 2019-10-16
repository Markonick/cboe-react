import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000/graphql',
  timeout: 5000,
  headers: { 'Accept': 'application/json' },
});

export default apiClient;