import React from 'react';
import styled from 'styled-components';

const GridBox = styled('div')`
  width: 100%;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 20px;
`;

// media query로 image 사이즈 수정
const GridItem = styled('div')`
  margin: 0 auto;
  width: calc(100% - 200px);
  height: 400px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 30px;
`;

const Title = styled('div')`
  display: flex;
  justify-content: center;
  font-weight: 600;
  font-size: 30px;
`;

const TitleContent = styled('span')`
  border-bottom: 2px solid black;
  padding: 10px;
`;

const ProjectOne = styled('div')`
  background-image: url('screenshot/interior.png');
  background-position: center center;
  background-size: cover;
`;

const ProjectTwo = styled('div')`
  background-image: url('screenshot/youngflix.png');
  background-position: center center;
  background-size: cover;
`;

const ProjectThree = styled('div')`
  background-image: url('screenshot/guessmine.png');
  background-position: center center;
  background-size: cover;
`;

const ProjectFour = styled('div')`
  background-image: url('screenshot/wetube.png');
  background-position: top center;
  background-size: cover;
`;

const ProjectFive = styled('div')`
  background-image: url('screenshot/cssprojects.png');
  background-position: top center;
  background-size: cover;
`;

const Content = styled('div')`
  padding: 20px;
`;

const Project = () => {
  return (
    <>
      <Title id="project">
        <TitleContent>프로젝트</TitleContent>
      </Title>
      <GridBox>
        <GridItem>
          <ProjectOne />
          <Content>
            {' '}
            충분히 열락의 있음으로써 위하여 설레는 석가는 심장의 되려니와, 보는
            사막이다. 발휘하기 힘차게 품고 새 뼈 예수는 수 말이다. 인생을 그들의
            이것이야말로 수 소담스러운 아니다.
          </Content>
        </GridItem>
        <GridItem>
          <ProjectTwo />
          <Content>
            {' '}
            충분히 열락의 있음으로써 위하여 설레는 석가는 심장의 되려니와, 보는
            사막이다. 발휘하기 힘차게 품고 새 뼈 예수는 수 말이다. 인생을 그들의
            이것이야말로 수 소담스러운 아니다.
          </Content>
        </GridItem>
        <GridItem>
          <ProjectThree />
          <Content>
            {' '}
            충분히 열락의 있음으로써 위하여 설레는 석가는 심장의 되려니와, 보는
            사막이다. 발휘하기 힘차게 품고 새 뼈 예수는 수 말이다. 인생을 그들의
            이것이야말로 수 소담스러운 아니다.
          </Content>
        </GridItem>
        <GridItem>
          <ProjectFour />
          <Content>
            {' '}
            충분히 열락의 있음으로써 위하여 설레는 석가는 심장의 되려니와, 보는
            사막이다. 발휘하기 힘차게 품고 새 뼈 예수는 수 말이다. 인생을 그들의
            이것이야말로 수 소담스러운 아니다.
          </Content>
        </GridItem>
        <GridItem>
          <ProjectFive />
          <Content>
            {' '}
            충분히 열락의 있음으로써 위하여 설레는 석가는 심장의 되려니와, 보는
            사막이다. 발휘하기 힘차게 품고 새 뼈 예수는 수 말이다. 인생을 그들의
            이것이야말로 수 소담스러운 아니다.
          </Content>
        </GridItem>
      </GridBox>
    </>
  );
};

export default Project;
