import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers, { initialState } from '@/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/*
 * Higher Order Component to provide redux state. If an `intl` prop is provided
 * it will override the internal `intl` redux state
 * @param {React.Component} WrappedComponent - component to provide state for
 * @param {boolean} localesOnly - only provide the locale state, not everything
 *                      required by the GUI. Used to exclude excess state when
                        only rendering modals, not the GUI.
 * @returns {React.Component} component with redux and intl state provided
 */
const AppStateHOC = (WrappedComponent) => {
  class AppStateComponent extends React.PureComponent {
    constructor(props) {
      super(props);
      this.store = createStore(combineReducers(reducers), initialState, composeEnhancers(applyMiddleware(thunk)));
    }

    render() {
      const { ...componentProps } = this.props;
      return (
        <Provider store={this.store}>
          <WrappedComponent {...componentProps} />
        </Provider>
      );
    }
  }
  AppStateComponent.propTypes = {};

  AppStateComponent.defaultProps = {};

  return AppStateComponent;
};

export default AppStateHOC;
