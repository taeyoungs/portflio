import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const Main = styled('div')`
  height: 500px;
  width: 100%;
  position: relative;
  background-image: url('https://images.unsplash.com/photo-1537884944318-390069bb8665?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');
  background-position: center center;
  background-size: cover;
  @media (max-width: 1024px) {
    height: 400px;
  }
  @media (max-width: 375px) {
    height: 200px;
  }
`;

const BackColor = styled('div')`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;

const MainContent = styled('div')`
  font-size: 35px;
  color: white;
  @media (max-width: 1024px) {
    font-size: 32px;
  }
  @media (max-width: 375px) {
    font-size: 20px;
  }
`;

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Portflio</title>
      </Helmet>
      <Main id="home">
        <BackColor>
          <MainContent>Developer 장태영</MainContent>
        </BackColor>
      </Main>
    </>
  );
};

export default Home;
