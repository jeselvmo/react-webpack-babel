import userInfoReducer, { userInfoInitialState } from './userInfo';
import homeReducer, { homeInitialState } from './home';

const reducers = {
  userInfo: userInfoReducer,
  home: homeReducer,
};

const initialState = {
  userInfo: userInfoInitialState,
  home: homeInitialState,
};

export {
  reducers as default, //
  initialState,
};
