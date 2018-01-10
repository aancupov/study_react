import React from 'react';
import PropTypes from 'prop-types';

const Search = ({search}) => (
  <div className='search'>
    Search: <input 
      type="text" 
      onChange={(value) => search(value.target.value)}
    />
  </div>  
);

Search.propTypes = {
  search: PropTypes.func
};

export default Search;