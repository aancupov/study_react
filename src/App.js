import React from 'react';

import MainLayout from 'components/layouts/MainLayout';

import  {
  Router,
  Switch,
  matchPath
} from  'react-router-dom';

import { Provider } from 'react-redux';

import { parse } from 'qs';

import createStore from 'store';

import routes from 'routes';

import { assign } from 'lodash';

import history from 'helpers/history';

import prepareData from 'helpers/prepareData';

const store = createStore(window.__INITIAL_STATE__);

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
      <Switch>
        <MainLayout>{routes.childRoutes}</MainLayout>
      </Switch>  
    </Router>
  </Provider>
);

export default App;
