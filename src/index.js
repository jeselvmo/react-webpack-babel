import React from 'react';
import ReactDOM from 'react-dom';
import App from './modules';

/** 公共样式 **/
import './styles/index.less';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept();
}
