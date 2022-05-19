import api from './index';

export const login = (payload) => api.post('/login', { ...payload })
  .then((res) => res.data);

export const createAccount = (payload) => api.post('/create-account', { ...payload })
  .then((res) => res.data);

export const checkAuth = () => api.get('/check-auth')
  .then((res) => res.data);
