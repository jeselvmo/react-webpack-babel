/* eslint-disable react/display-name */
import React from 'react';
// import { UNSAFE_NavigationContext } from 'react-router';
// import { useLocation, useNavigate, useParams } from 'react-router-dom';

/**
 * 将 react-router 的 history、location、match 三个对象传入props对象上。
 * React Router V6 没有提供withRouter。
 * @param {*} ELement
 * @returns
 */
const withRouter = (ELement) => {
  return () => {
    // const aaa = useContext(UNSAFE_NavigationContext);
    // console.log('🚀 ~ return ~ aaa', aaa);
    // const navigate = useNavigate();
    // const location = useLocation();
    // const params = useParams();
    // return <ELement {...{ navigate, location, params }} />;
    return <ELement />
  };
};

export default withRouter;
