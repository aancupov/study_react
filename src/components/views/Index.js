import React from 'react';

import Helmet from 'react-helmet';

import BlogList from 'components/ui/BlogList';

const Index = ({ items }) => (
  <div>
    <BlogList items={items} />
    <Helmet 
      title='Список постов'
    />
  </div>
);

Index.propTypes = {
  items: BlogList.propTypes.items
};

export default Index;
