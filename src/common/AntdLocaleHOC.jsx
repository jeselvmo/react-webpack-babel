import React from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

/*
 * Higher Order Component to provide redux state. If an `intl` prop is provided
 * it will override the internal `intl` redux state
 * @param {React.PureComponent} WrappedComponent - component to provide state for
 * @returns {React.PureComponent} component with redux and intl state provided
 */
const AntdLocaleHOC = (WrappedComponent) => {
  const AntdLocaleComponent = (props) => (
    <ConfigProvider locale={zhCN}>
      <WrappedComponent {...props} />
    </ConfigProvider>
  );

  return AntdLocaleComponent;
};

export default AntdLocaleHOC;
