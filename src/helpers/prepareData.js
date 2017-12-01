import { parse } from 'qs';

import { compact } from 'lodash/array';
import { map } from 'lodash/collection';


export default function(store, state) {
  const { location, params, routes, query } = state;

  const prepareDataFns = compact(map(routes, route => route.props.prepareData));

  map(
    prepareDataFns,
    prepareData => prepareData(store, query, params, location)
  );
}