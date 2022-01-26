import produce from 'immer';

const SET_USER_INFO = 'user/SET_USER_INFO';
const CLEAR_USER_INFO = 'user/CLEAR_USER_INFO';

const initialState = {
  info: null,
};

const reducer = produce((state, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      state.info = action.userInfo;
      break;
    case CLEAR_USER_INFO:
      state.info = null;
      break;
    default: {
      break;
    }
  }
  return state;
}, initialState);

// 设置用户信息
export const setUserInfo = (userInfo) => {
  return {
    type: SET_USER_INFO,
    userInfo,
  };
};

export const clearUserInfo = () => {
  return {
    type: CLEAR_USER_INFO,
  };
};

export { reducer as default, initialState as userInitialState };
