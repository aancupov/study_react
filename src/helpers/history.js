/* globals __CLIENT__ */

import createBrowserHistory from 'history/createBrowserHistory';

const history = __CLIENT__ ?
  createBrowserHistory() : {
    push: () => {}
  };

export default history;
