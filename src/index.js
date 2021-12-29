import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const renderApp = (Component) => {
  ReactDOM.render(<Component />, document.getElementById('app'));
};

renderApp(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp(require('./App').default);
  });
}
