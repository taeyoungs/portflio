import React from 'react';
import styled from 'styled-components';

const GridBox = styled('div')`
  width: 100%;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
`;

const GridItem = styled('div')`
  width: 100%;
  height: 400px;
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

const Image = styled('div')``;

const Content = styled('div')`
  padding: 20px;
`;

const Project = () => {
  return (
    <GridBox>
      <GridItem>
        <Image />
        <Content>
          {' '}
          충분히 열락의 있음으로써 위하여 설레는 석가는 심장의 되려니와, 보는
          사막이다. 발휘하기 힘차게 품고 새 뼈 예수는 수 말이다. 인생을 그들의
          이것이야말로 수 소담스러운 아니다.
        </Content>
      </GridItem>
      <GridItem>
        <Image />
        <Content>
          {' '}
          충분히 열락의 있음으로써 위하여 설레는 석가는 심장의 되려니와, 보는
          사막이다. 발휘하기 힘차게 품고 새 뼈 예수는 수 말이다. 인생을 그들의
          이것이야말로 수 소담스러운 아니다.
        </Content>
      </GridItem>
      <GridItem>
        <Image />
        <Content>
          {' '}
          충분히 열락의 있음으로써 위하여 설레는 석가는 심장의 되려니와, 보는
          사막이다. 발휘하기 힘차게 품고 새 뼈 예수는 수 말이다. 인생을 그들의
          이것이야말로 수 소담스러운 아니다.
        </Content>
      </GridItem>
      <GridItem>
        <Image />
        <Content>
          {' '}
          충분히 열락의 있음으로써 위하여 설레는 석가는 심장의 되려니와, 보는
          사막이다. 발휘하기 힘차게 품고 새 뼈 예수는 수 말이다. 인생을 그들의
          이것이야말로 수 소담스러운 아니다.
        </Content>
      </GridItem>
    </GridBox>
  );
};

export default Project;
