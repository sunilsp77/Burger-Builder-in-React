import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-6ca3c.firebaseio.com/',
});

export default instance;
