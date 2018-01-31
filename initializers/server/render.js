import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {Provider} from 'react-redux';
import { matchPath, StaticRouter } from 'react-router-dom';
import {assign} from 'lodash';

import Helmet from 'react-helmet';

import prepareData from 'helpers/prepareData';

import MainLayout from 'components/layouts/MainLayout';

import createStore from 'store';
import routes from 'routes';

export default (req, res) => { 
  const state = { routes: [], query: {}, params: {} };
  //пробежим по всем роутам
  routes.childRoutes.forEach(route => {
    const match = matchPath(req.path, route.props);
    if (match !== null) {
      // Если нашли, то добавляем в состояние роутинга запись о таком роуте
      state.routes.push(route);
      assign(state.params, match.params);
      assign(state.query, req.query);
    }
    return;
  });
  
  const store = createStore();

  prepareData(store, state).then(
    () => {
      // и после этого рендерим страницу с начальным состоянием
      const initialState = JSON.stringify(store.getState());
      let context = {};
      const content = ReactDOMServer.renderToString(
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <MainLayout>{state.routes}</MainLayout>
          </StaticRouter>
        </Provider>
      );

      const head = Helmet.rewind();

      res.status(200);
      res.render(
        'index',
        { initialState, content, head }
      );
    }
  );  
};
