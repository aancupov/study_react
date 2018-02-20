import { compact } from 'lodash/array';

import { map } from 'lodash/collection';

export default function(store, state) {
  const { location, params, routes, query } = state;

  const prepareDataFns = compact(map(routes, route => route.props.prepareData));

  return (
    Promise.all(
      map(
        prepareDataFns,
        prepareData => prepareData(store, query, params, location)
      )
    )
  );
}