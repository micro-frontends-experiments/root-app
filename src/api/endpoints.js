import api from './index';

export const login = (payload) => api.post('/login', { ...payload })
  .then((res) => res.data);

export const getUser = () => api.get('/user')
  .then((res) => res.data);
