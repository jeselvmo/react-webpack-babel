import userReducer, { userInitialState } from './user';
import homeReducer, { homeInitialState } from './home';

const reducers = {
  user: userReducer,
  home: homeReducer,
};

const initialState = {
  user: userInitialState,
  home: homeInitialState,
};

export { reducers as default, initialState };
