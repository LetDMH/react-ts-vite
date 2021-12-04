/*
 * @Author: dingminghui
 * @Date: 2021-12-03 00:29:47
 * @LastEditTime: 2021-12-03 00:35:07
 * @LastEditors: Please set LastEditors
 * @Description: axios
 * @FilePath: /react/src/apis/index.ts
 */
import { message } from 'antd';
import axios from 'axios';

const http = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL as string | undefined,
  timeout: 20000,
});

http.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.data) {
      const code = error.response.status;
      const msg = error.response.data.msg;
      message.error(`Code: ${code}, Message: ${msg}`);
    } else {
      message.error(`${error}`);
    }
    return Promise.reject(error);
  },
);

export default http;
