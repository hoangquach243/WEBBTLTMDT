import axios from 'axios';

const request = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:5001',
});

export default request;
