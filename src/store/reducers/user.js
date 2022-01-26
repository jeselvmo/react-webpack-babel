const SET_USER_INFO = 'user/SET_USER_INFO';

const initialState = {
  info: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return Object.assign({}, state, {
        info: action.userInfo,
      });
    default: {
      break;
    }
  }
  return state;
};

// 设置用户信息
export const setUserInfo = (userInfo) => {
  return {
    type: SET_USER_INFO,
    userInfo,
  };
};

export { reducer as default, initialState as userInitialState };
