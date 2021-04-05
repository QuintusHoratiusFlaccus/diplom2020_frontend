import axios from 'axios';

const api = {
  registration: data => axios.post('/registration', data),
  login: data => axios.get('/login', {params: {...data}}),
  relogin: data => axios.get('/relogin')
};

export default api;
