import axios from 'axios';

const instance = axios.create({
  baseURL: 'api/v1/'
  // baseURL: 'https://thumb-viewer.firebaseio.com/'
});

export default instance;