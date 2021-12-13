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

  getToken() {
    let item = { token: '' };
    try {
      item = JSON.parse(sessionStorage.token);
    } catch (e) {} // eslint-disable-line no-empty
    return item.token;
  },

  /**
   * 日期格式化
   * @param {(Date|string|number)} [date] - 要格式化的日期，默认为当前日期。
   * @param {string} [fmt] - 格式，默认为"yyyy-mm-dd HH:MM:ss"。
   * @returns {string} 格式后的字符串。
   *
   * @example
   *
   * AppUtils.formatDate();
   * //=> "2019-08-02 11:51:34"
   *
   * AppUtils.formatDate(new Date());
   * //=> "2019-08-02 11:51:20"
   *
   * AppUtils.formatDate(new Date(), "yyyy-mm-dd HH:MM:ss");
   * //=> "2019-08-02 11:53:37"
   */
  formatDate(date = new Date(), fmt = 'yyyy-MM-dd') {
    if (typeof date === 'number') {
      const len = `${date}`.length;
      if (len === 10) {
        console.log('🚀 ~ file: AppUtils.js ~ line 53 ~ getToken ~ e', e);
        console.log('🚀 ~ file: AppUtils.js ~ line 53 ~ getToken ~ e', e);
        console.log('🚀 ~ file: AppUtils.js ~ line 53 ~ getToken ~ e', e);
        date = new Date(date * 1000);
      } else {
        date = new Date(date);
      }
    } else if (typeof date === 'string') {
      date = new Date(date);
    }

    if (!date || date == null) return null;
    const o = {
      'M+': date.getMonth() + 1, // 月份
      'd+': date.getDate(), // 日
      'h+': date.getHours(), // 小时
      'm+': date.getMinutes(), // 分
      's+': date.getSeconds(), // 秒
      'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
      S: date.getMilliseconds(), // 毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, `${date.getFullYear()}`.substr(4 - RegExp.$1.length));
    // eslint-disable-next-line no-restricted-syntax
    for (const k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : `00${o[k]}`.substr(`${o[k]}`.length));
      }
    }
    return fmt;
  },

  formatDateTime(date = new Date(), fmt = 'yyyy-MM-dd hh:mm:ss') {
    return this.formatDate(date, fmt);
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
