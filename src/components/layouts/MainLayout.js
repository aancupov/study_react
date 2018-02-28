import React from 'react';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { Button, Segment, Header, Container, Menu } from 'semantic-ui-react';

import history from 'helpers/history.js';

import { contactsRefPath, contactsPath, addPostPath } from 'helpers/routes';

const MainLayout = ({ children }) => (
  <Container>
    <Logo />
    <GoBackButton />
    {children}
    <Footer />
  </Container>  
);

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;

const GoBackButton = () => (
  <Button onClick={() => history.goBack()}>Назад</Button>
);

const Logo = () => (
  <Segment>
    <Header>
      <Link to='/'>Blog</Link>
      <Menu floated='right' compact={true}>
        <Link to='/'>
          <Menu.Item>
            Home
          </Menu.Item>
        </Link>
        <Link to={addPostPath()}>
          <Menu.Item>
            Add Post
          </Menu.Item>
        </Link>
        <Link to={contactsRefPath()}>
          <Menu.Item>
            ContactsRef
          </Menu.Item>
        </Link>
        <Link to={contactsPath()}>
          <Menu.Item>
            Contacts
          </Menu.Item>
        </Link>
      </Menu>
    </Header>
  </Segment>
);

const Footer = () => (
  <Segment>
    Powered by React Course.
  </Segment>  
);
