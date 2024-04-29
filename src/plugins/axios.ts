import axios from 'axios';
import { URL_API } from '../constants/url';

const http = axios.create({
    baseURL: `${URL_API}`
});

http.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

export default http;