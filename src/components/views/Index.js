import React from 'react';

import Helmet from 'react-helmet';

import PropTypes from 'prop-types';

import BlogList from 'components/ui/BlogList';

const Index = ({ items, pagination, search }) => (
  <div>
    <BlogList items={items} pagination={pagination} search={search} />
    <Helmet 
      title='Список постов'
    />
  </div>
);

Index.propTypes = {
  items: BlogList.propTypes.items,
  pagination: PropTypes.number,
  search: PropTypes.func
};

export default Index;
