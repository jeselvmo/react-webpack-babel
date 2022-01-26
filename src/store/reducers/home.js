import produce from 'immer';

const initialState = {};

const reducer = produce((state, action) => {
  switch (action.type) {
    default: {
      break;
    }
  }
  return state;
}, initialState);

export { reducer as default, initialState as homeInitialState };
