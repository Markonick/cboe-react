import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000/api/v1/pitch',
  timeout: 15000,
  headers: { 'Accept': 'application/json' },
});

export default apiClient;