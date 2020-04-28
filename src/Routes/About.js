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
  @media (max-width: 1024px) {
    font-size: 28px;
  }
  @media (max-width: 375px) {
    font-size: 15px;
  }
`;

const Content = styled('div')`
  font-size: 18px;
  padding: 40px;
  @media (max-width: 1024px) {
    font-size: 17px;
    padding: 25px;
  }
  @media (max-width: 375px) {
    font-size: 8px;
    padding: 15px;
  }
`;

const About = () => {
  return (
    <>
      <Bout id="about">
        <Title>소개</Title>
        <Content>
          충분히 열락의 있음으로써 위하여 설레는 석가는 심장의 되려니와, 보는
          사막이다. 발휘하기 힘차게 품고 새 뼈 예수는 수 말이다. 인생을 그들의
          이것이야말로 수 소담스러운 아니다. 못할 전인 끓는 만물은 같지 열매를
          따뜻한 인생을 거친 끓는다. 위하여서, 꽃이 때까지 바이며, 이것은
          것이다. 불어 거친 그들은 듣기만 그들의 영락과 싸인 못할 있다. 때까지
          그와 것은 든 피다. 품었기 안고, 심장의 끓는 무한한 속잎나고,
          부패뿐이다. 그들은 있는 유소년에게서 있다.
        </Content>
      </Bout>
    </>
  );
};

export default About;
