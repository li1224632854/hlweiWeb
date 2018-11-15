import axios from 'axios'
import store from './store/store'
import router from './router'

// axios 配置
// axios.defaults.timeout = 5000;

// http request 拦截器
axios.interceptors.request.use(
    config => {
        return config;
    },
    err => {
        return Promise.reject(err);
    });

// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {

        }
        return error;
    });

export default axios;