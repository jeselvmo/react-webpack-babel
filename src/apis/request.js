/* eslint-disable no-param-reassign, no-console */
import axios from 'axios';
import AppUtils from '@/common/AppUtils';

// 创建一个新的axios
const instance = axios.create({
  // baseURL: AppUtils.config('baseURL'),
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
    // console.log('res', res);
    if (typeof res.config.data === 'string') {
      try {
        res.config.data = JSON.parse(res.config.data);
      } catch (e) {} // eslint-disable-line no-empty
    }
    console.log('config, response', res.config, res.data);

    const { data } = res;
    if (data.result === 0) {
      return data.data;
    }
    return Promise.reject(new Error(data.msg));
  },
  (err) => Promise.reject(err)
);

export default instance;
