import { message } from 'antd';
import config from '../../config';
import Loading from '@/components/Loading';

const AppUtils = {
  /**
   * 获取配置
   */
  config(name) {
    if (name) {
      return config[name];
    }
    return config;
  },

  success(msg) {
    message.success(msg);
  },
  error(msg) {
    message.error(msg);
  },
  warning(msg) {
    message.warning(msg);
  },
  /**
   * 显示Loading
   */
  showLoading() {
    Loading.showLoading();
  },
  /**
   * 隐藏Loading
   */
  hideLoading() {
    Loading.hideLoading();
  },
};

export default AppUtils;
