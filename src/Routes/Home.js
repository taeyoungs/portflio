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
  font-size: 22px;
  color: white;
  @media (max-width: 1024px) {
    font-size: 19px;
  }
  @media (max-width: 375px) {
    font-size: 9px;
  }
`;

const SubContent = styled('div')`
  margin: 10px;
`;

const ALink = styled('a')`
  color: white;
`;

const Subject = styled('span')`
  display: inline-block;
  text-align: center;
  width: 73px;
  @media (max-width: 1024px) {
    width: 60px;
  }
  @media (max-width: 375px) {
    width: 40px;
  }
`;

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio</title>
      </Helmet>
      <Main id="home">
        <BackColor>
          <MainContent>
            <SubContent>
              <Subject>이&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;름</Subject> : 장태영
              (Jang Taeyoung)
            </SubContent>
            <SubContent>
              <Subject>거&nbsp;주&nbsp;지</Subject> : 경기도 성남시 분당구
            </SubContent>
            <SubContent>
              <Subject>Github</Subject> :{' '}
              <ALink
                href="https://github.com/taeyoungs"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/taeyoungs
              </ALink>
            </SubContent>
          </MainContent>
        </BackColor>
      </Main>
    </>
  );
};

export default Home;
