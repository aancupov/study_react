import React from 'react';

import ReactDOM from 'react-dom';

import  { Router } from  'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory';

import { Provider } from 'react-redux';

import { configure, shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Link from 'components/elements/Link';

import BlogItem from '../BlogItem';

describe('BlogItem', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const store = {
      subscribe: () => {},
      dispatch: () => {},
      getState: () => ({ 
        likes: {
          error: false,
          isFetching: true,
          resultLikes: [
            {id: 0, likes: 0},
            {id: 1, likes: 0},
            {id: 2, likes: 0},
            {id: 3, likes: 0}
          ]
        },
        post: {
          isFetching: true, 
          isUpdating: false, 
          isAdding: false, 
          error: false, 
          entry: {
            id: 3,
            image: {
              src: '/images/world.png', 
              width: '100px', 
              height: '100px', 
              alt: 'Bin'
            },
            message: 'У-у-уу',
            metainfo: {
              author: 'Petr', 
              createdAt: '2017-01-01', 
              updatedAt: '2017-01-02'
            } 
          }
        },
        posts: {
          isFetching: false, 
          error: false, 
          entries: [], 
          pagination: 0
        }        
      })
    };
    ReactDOM.render(
      <Provider store={store}>
        <Router history={createBrowserHistory()}>
          <BlogItem />
        </Router>
      </Provider>  
      , div);
  });

  describe('render', () => {
    it('should render the title', () => {
      const itemProps = { message: 'О-о-оо', id: 3 };
      const item = shallow(<BlogItem item={itemProps} />);
      const header = <Link to="/posts/3">О-о-оо</Link>;
      expect(item.contains(header)).toEqual(true);
    });

    it('should render usual item', () => {
      const itemProps = {
        title: 'О-о-оо',
        id: 3,
        image: {
          alt: 'Hello, World',
          src: 'images/earth.png'
        }
      };

      const item = shallow(<BlogItem item={itemProps} />);

      expect(item).toMatchSnapshot();
    });
  }); 
});