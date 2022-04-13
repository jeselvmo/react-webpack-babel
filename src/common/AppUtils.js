import { message } from 'antd';
import Loading from '@/components/loading';

const AppUtils = {
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
