/* eslint-disable no-param-reassign, no-console */
import axios from 'axios';
import AppUtils from '@/common/AppUtils';

// 创建一个新的axios
const instance = axios.create({
  baseURL: AppUtils.config('ljlx_baseURL'),
});

// Axios请求拦截处理
instance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = AppUtils.getToken();
    return config;
  },
  (err) => Promise.reject(err)
);
// Axios响应拦截处理
instance.interceptors.response.use(
  (res) => {
    console.log('--------------------------------------------');
    console.log('res', res);
    if (/api/.test(res.request.responseURL)) {
      const result = res.data;
      if (result.result === 0) {
        return result.data;
      }
      return Promise.reject(new Error(result.msg));
    }
    return res.data;
  },
  (err) => Promise.reject(err)
);

export default instance;
