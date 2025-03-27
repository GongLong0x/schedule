import axios from 'axios/dist/axios.min.js';
 
const request = axios.create({
    baseURL: '/api',
    timeout: 5000
})
export default request