import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Button, Segment, Header, Container } from 'semantic-ui-react';

//import { Link } from 'react-router-dom';
//import history from 'helpers/history.js';

const MainLayout = ({ children }) => (
  <Container>
    <Logo />
    {children}
    <Footer />
  </Container>  
);

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;

//const GoBackButton = () => (
//  <Button onClick={() => history.goBack()}>Назад</Button>
//);

const Logo = () => (
  <Segment>
    <Header>
      <Link to='/'>Blog</Link>
    </Header>
  </Segment>
);

const Footer = () => (
  <Segment>
    Powered by React Course.
  </Segment>  
);

//    <GoBackButton />
//      <Link to='/'>Blog</Link>
