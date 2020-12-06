import produce from 'immer';

const SET_USER_INFO = 'userInfo/SET_USER_INFO';

const initialState = {
  info: {
    userId: 1,
    userName: 'admin',
  },
};

const reducer = produce((state, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return Object.assign({}, state, {
        ...action.userInfo,
      });
    default: {
      break;
    }
  }
  return state;
}, initialState);

// 设置用户信息
const setUserInfo = (userInfo) => {
  return {
    type: SET_USER_INFO,
    userInfo,
  };
};

export {
  reducer as default, //
  initialState as userInfoInitialState,
  setUserInfo,
};
