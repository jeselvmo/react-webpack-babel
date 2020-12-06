import React from 'react';
import ReactDOM from 'react-dom';
import { Spin } from 'antd';

import styles from './index.less';

const destroyFns = [];

class Loading extends React.PureComponent {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    this.el.id = 'loading';
    this.el.className = styles.loading;
  }

  componentDidMount() {
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(<Spin tip="Loading..." size="large" {...this.props} />, this.el);
  }
}

Loading.showLoading = (config) => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  document.body.style.overflow = 'hidden';
  const currentConfig = { ...config };

  const destroy = () => {
    const unmountResult = ReactDOM.unmountComponentAtNode(div);
    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
    }
    for (let i = 0; i < destroyFns.length; i += 1) {
      const fn = destroyFns[i];
      if (fn === destroy) {
        destroyFns.splice(i, 1);
        break;
      }
    }
  };

  const render = (props) => {
    ReactDOM.render(<Loading {...props} />, div);
  };

  if (destroyFns.length === 0) {
    render(currentConfig);
    destroyFns.push(destroy);
  }
};

Loading.hideLoading = () => {
  document.body.style.overflow = null;
  while (destroyFns.length) {
    const destroy = destroyFns.pop();
    if (destroy) {
      destroy();
    }
  }
};

export default Loading;
