import React from 'react';
import styled from 'styled-components';

const Main = styled('div')`
  height: 500px;
  width: 100%;
  position: relative;
  background-image: url('https://images.unsplash.com/photo-1537884944318-390069bb8665?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');
  background-position: center center;
  background-size: cover;
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
`;

const Home = () => {
  return (
    <>
      <Main id="home">
        <BackColor>
          <MainContent>Developer 장태영</MainContent>
        </BackColor>
      </Main>
    </>
  );
};

export default Home;
