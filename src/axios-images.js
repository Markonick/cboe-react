import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://thumb-viewer.firebaseio.com/'
});

export default instance;