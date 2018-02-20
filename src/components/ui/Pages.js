import React from 'react';

import { map } from 'lodash';

import PropTypes from 'prop-types';

import { pagePath } from 'helpers/routes';

import { Link } from 'react-router-dom';

import { perpage } from 'constants/perpage';

const Pages = ({ pagination }) => {
  const pages = [];
  let npage = 0;
  for (let i = 0; i < pagination; i += perpage) {
    pages.push({page: npage});
    npage++;
  }
  return (
    <div>
      Pages:
      <ul className='pages_container'>
        {
          map(
            pages,
            (page) => (
              <li key={page.page} className='pages'>
                <Link to={pagePath(page.page)} key={page.page}>
                  {page.page}
                </Link>
              </li>
            )
          )
        }
      </ul>
    </div>    
  );
};

Pages.propTypes = {
  pagination: PropTypes.number
};

export default Pages;
