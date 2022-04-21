import { message } from 'antd';

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
};

export default AppUtils;
