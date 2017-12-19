import React from 'react';

import MainLayout from 'components/layouts/MainLayout';

import  {
  Router,
  matchPath
} from  'react-router-dom';

import { Provider } from 'react-redux';

import { parse } from 'qs';

import store from 'store';

import routes from 'routes';

import { assign } from 'lodash';

import history from 'helpers/history.js';

import prepareData from 'helpers/prepareData';

function historyCb(location) {
  const state = { routes: [], query: {}, params: {} };

  routes.childRoutes.some(
    route => {
      const match = matchPath(location.pathname, route.props);

      if (match) {
        state.routes.push(route);
        assign(state.params, match.params);
        assign(state.query, parse(location.search.substr(1)));
      }
    }
  );

  prepareData(store, state);

  return true;
}

history.listen(historyCb);

historyCb(window.location);

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <MainLayout>{routes.childRoutes}</MainLayout>
    </Router>
  </Provider>
);

export default App;
