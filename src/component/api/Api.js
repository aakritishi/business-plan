import axios from 'axios';

const api = axios.create({
  baseURL: 'https://something/api', //base url section here
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
