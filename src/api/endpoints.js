import api from './index';

export const login = (payload) => api.post('/login', { ...payload })
  .then((res) => res.data);

export const checkAuth = () => api.get('/check-auth')
  .then((res) => res.data);

export const getUser = () => api.get('/user')
  .then((res) => res.data);

export const getNotes = () => api.get('/notes')
  .then((res) => res.data);

export const putNote = (payload) => api.put('/note', payload)
  .then((res) => res.data);
