import axios from 'axios/dist/axios.min.js';
 
/* const request = axios.create({
    baseURL: '/api',
    timeout: 5000
})
export default request */

// ../utils/request.js
//import axios from 'axios';

const request = axios.create({
  baseURL: '/api', // 根据实际情况填写接口的基础 URL
  timeout: 5000 // 请求超时时间
});

// 请求拦截器
request.interceptors.request.use(
  config => {
    // 从本地存储中获取 token
    const token = localStorage.getItem('authToken'); 
    //alert(token);
    if (token) {
      // 在请求头中添加 token
      config.headers['token'] = `${token}`; 
    }
    return config;
  },
  error => {
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.log('err' + error); // for debug
    return Promise.reject(error);
  }
);

export default request;