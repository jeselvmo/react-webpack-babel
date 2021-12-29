import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

const InitUserInfoHOC = (WrappedComponent) => {
  class InitUserInfoComponent extends React.Component {
    componentDidMount() {
      // 加载用户信息
      // this.props.onSetUserInfo(userInfo);
    }

    render() {
      const { userInfo, ...componentProps } = this.props;
      return <WrappedComponent {...componentProps} />;
    }
  }
  const mapStateToProps = (state) => ({
    userInfo: state.userInfo.info,
  });
  const mapDispatchToProps = (dispatch) => ({});

  return connect(mapStateToProps, mapDispatchToProps)(InitUserInfoComponent);
};

export { InitUserInfoHOC as default };
