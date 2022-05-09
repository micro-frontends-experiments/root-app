import axios from 'axios';
import { getCookie } from '../helpers/cookies';

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_BACKEND_PROD_HOST
    : process.env.REACT_APP_BACKEND_DEV_HOST,
  timeout: 1000,
});

api.interceptors.request.use((config) => {
  const token = getCookie('secret-token');
  if (token) {
    config.headers.Authorization = `My-Token ${token}`;
  }

  return config;
});

api.interceptors.response.use((response) => {
  if (response.data.authRedirect) {
    window.location.href = '../auth';
  }

  return response;
});

export default api;
