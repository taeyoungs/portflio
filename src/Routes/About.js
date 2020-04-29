import React from 'react';
import styled from 'styled-components';

const Bout = styled('div')`
  height: 330px;
  width: calc(100% - 400px);
  margin: 0 auto;
  display: grid;
  grid-template-rows: 1fr 2fr;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
  padding: 30px;
  line-height: 1.5;
  @media (max-width: 1024px) {
    width: calc(100% - 300px);
    height: 280px;
    padding: 20px;
  }
  @media (max-width: 375px) {
    width: 100%;
    height: 180px;
    padding: 10px;
  }
`;

const Title = styled('div')`
  font-weight: 600;
  font-size: 30px;
  padding: 10px;
  border-bottom: 2px solid black;
  font-weight: 600;
  margin-bottom: 20px;
  @media (max-width: 1024px) {
    font-size: 28px;
  }
  @media (max-width: 375px) {
    font-size: 15px;
  }
`;

const Gridbox = styled('div')`
  display: grid;
  grid-template-columns: 1fr 3.5fr;
`;

const SubTitle = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 24px;
  @media (max-width: 1024px) {
    font-size: 22px;
  }
  @media (max-width: 375px) {
    font-size: 12px;
  }
`;

const Content = styled('div')`
  font-size: 17px;
  padding: 40px;
  @media (max-width: 1024px) {
    font-size: 16px;
    padding: 25px;
  }
  @media (max-width: 375px) {
    font-size: 7px;
    padding: 15px;
  }
`;

const About = () => {
  return (
    <>
      <Bout id="about">
        <Title>소개</Title>
        <Gridbox>
          <SubTitle>
            <div>즐기는</div>
            <div>개발자</div>
          </SubTitle>
          <Content>
            <div>
              19년도 상반기에 교육을 들었을 때 처음 Javascript 웹 프레임워크를
              접하게 됐고 Javascript에 매력을 느껴 React에 입문 후 프론트엔드
              개발자가 되기 위해서 노력하고 있습니다.
            </div>
            <div>&nbsp;</div>
            <div>
              제 목표는 하고자 하는 일을 즐길 줄 아는 개발자가 되는 것입니다.
              즐김으로써 더 높은 곳으로 가고자 하는 동기도 노력도 자연스레
              따라온다고 생각합니다. 이를 바탕으로 자신의 실력에 당당한 개발자가
              되고 싶습니다.
            </div>
          </Content>
        </Gridbox>
      </Bout>
    </>
  );
};

export default About;
