import React from 'react';
import ReactDOMServer from 'react-dom/server';

import BlogContainer from './components/containers/BlogContainer';


const result = ReactDOMServer.renderToString(
	React.createElement(BlogContainer)
);

export default result;
