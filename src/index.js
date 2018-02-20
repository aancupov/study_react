import React from 'react';

import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';

import '../semantic/dist/semantic.min.css';

import App from './App';

const rootEl = document.getElementById('app');

ReactDOM.hydrate(
  <AppContainer>
    <App />
  </AppContainer>,
  rootEl,
  () => {
    delete window.__INITIAL_STATE__;
  }
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;

    ReactDOM.hydrate(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      rootEl
    );
  });
}
