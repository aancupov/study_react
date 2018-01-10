import React from 'react';

import { map } from 'lodash';

import PropTypes from 'prop-types';

import { pagePath } from 'helpers/routes';

import { Link } from 'react-router-dom';

const Pages = ({ pages }) => (
  <div>
    Pages:
    <ul className='pages_container'>
      { 
        map(
          pages,
          (page) => (
            <Link to={pagePath(page.query)} key={page.page}>
              <li key={page.page} className='pages'>{page.page}</li>
            </Link>
          )
        )
      }
    </ul>
  </div>    
);

Pages.propTypes = {
  pages: PropTypes.array
};

export default Pages;
