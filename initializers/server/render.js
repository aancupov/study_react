import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {Provider} from 'react-redux';
import { matchPath, StaticRouter } from 'react-router-dom';
import assign from 'lodash';

import prepareData from 'helpers/prepareData';

import MainLayout from 'components/layouts/MainLayout';
//import history from 'helpers/history';

import createStore from 'store';
import routes from 'routes';

export default (req, res) => { 
  const state = {
    params: {},
    routes: [],
    query: {}
  };

  // бежим по всем роутам и матчим каждый в поисках подходящих
  routes.childRoutes.some(route => {
    const match = matchPath(req.path, route);
    if (match)
    {
      // Если нашли, то добавляем в состояние роутинга запись о таком роуте
      state.routes.push(route);
      assign(state.params, match.params);
      assign(state.query, req.query);
    }
    return match;
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
            <MainLayout>{routes.childRoutes}</MainLayout>
          </StaticRouter>
        </Provider>
      );
      //console.log(content);
      res.status(200);
      res.render(
        'index',
        { initialState, content }
      );
    }
  );  
};
