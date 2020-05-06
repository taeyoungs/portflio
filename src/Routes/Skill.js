import React from 'react';
import styled from 'styled-components';

const Title = styled('div')`
  display: flex;
  justify-content: center;
  font-weight: 600;
  font-size: 30px;
  @media (max-width: 1024px) {
    font-size: 28px;
  }
  @media (max-width: 375px) {
    font-size: 15px;
  }
`;

const TitleContent = styled('span')`
  border-bottom: 2px solid black;
  padding: 10px;
`;

const SkillList = styled('div')`
  width: 100%;
  height: 700px;
  background-color: #f2f2f2;
  margin: 30px 0;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  @media (max-width: 1024px) {
    height: 600px;
  }
  @media (max-width: 375px) {
    height: 300px;
  }
`;

const Item = styled('div')`
  width: 120px;
  height: 120px;
  border-radius: 70px;
  margin: 10px;
  background-color: white;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 5px 5px rgba(0, 0, 0, 0.1);
  &:hover {
    & :first-child {
      opacity: 1;
    }
  }
  @media (max-width: 1024px) {
    width: 100px;
    height: 100px;
  }
  @media (max-width: 375px) {
    width: 40px;
    height: 40px;
  }
`;

const Msg = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: rgba(20, 20, 20, 0.6);
  opacity: 0;
  color: white;
  width: calc(100% - 15px);
  height: calc(100% - 15px);
  border-radius: 50px;
  font-size: 20px;
  font-weight: 600;
  @media (max-width: 1024px) {
    width: calc(100% - 35px);
    height: calc(100% - 35px);
    font-size: 18px;
  }
  @media (max-width: 375px) {
    width: calc(100% - 5px);
    height: calc(100% - 5px);
    font-size: 11px;
  }
`;

const Css3 = styled('div')`
  width: 105px;
  height: 105px;
  border-radius: 50px;
  background-image: url('icon/css3.png');
  background-position: center center;
  background-size: cover;
  @media (max-width: 1024px) {
    width: 85px;
    height: 85px;
  }
  @media (max-width: 375px) {
    width: 35px;
    height: 35px;
  }
`;

const Html5 = styled('div')`
  width: 95px;
  height: 95px;
  background-image: url('icon/html5.png');
  background-position: center center;
  background-size: cover;
  @media (max-width: 1024px) {
    width: 75px;
    height: 75px;
  }
  @media (max-width: 375px) {
    width: 30px;
    height: 30px;
  }
`;

const Java = styled('div')`
  width: 90px;
  height: 90px;
  border-radius: 50px;
  background-image: url('icon/java.png');
  background-position: center center;
  background-size: cover;
  @media (max-width: 1024px) {
    width: 70px;
    height: 70px;
  }
  @media (max-width: 375px) {
    width: 25px;
    height: 25px;
  }
`;

const Jscript = styled('div')`
  width: 105px;
  height: 105px;
  border-radius: 50px;
  background-image: url('icon/javascript.png');
  background-position: center center;
  background-size: cover;
  @media (max-width: 1024px) {
    width: 85px;
    height: 85px;
  }
  @media (max-width: 375px) {
    width: 35px;
    height: 35px;
  }
`;

const ReactIcon = styled('div')`
  width: 95px;
  height: 95px;
  border-radius: 50px;
  background-image: url('icon/react.png');
  background-position: center center;
  background-size: cover;
  @media (max-width: 1024px) {
    width: 75px;
    height: 75px;
  }
  @media (max-width: 375px) {
    width: 25px;
    height: 25px;
  }
`;

const JqueryIcon = styled('div')`
  width: 75px;
  height: 75px;
  background-image: url('icon/Jquery.png');
  background-position: center center;
  background-size: cover;
  @media (max-width: 1024px) {
    width: 55px;
    height: 55px;
  }
  @media (max-width: 375px) {
    width: 15px;
    height: 15px;
  }
`;

const NodeIcon = styled('div')`
  width: 75px;
  height: 75px;
  background-image: url('icon/node.png');
  background-position: center center;
  background-size: cover;
  @media (max-width: 1024px) {
    width: 55px;
    height: 55px;
  }
  @media (max-width: 375px) {
    width: 15px;
    height: 15px;
  }
`;

const MongoIcon = styled('div')`
  width: 85px;
  height: 85px;
  background-image: url('icon/mongodb.png');
  background-position: center center;
  background-size: cover;
  @media (max-width: 1024px) {
    width: 65px;
    height: 65px;
  }
  @media (max-width: 375px) {
    width: 25px;
    height: 25px;
  }
`;

const OracleIcon = styled('div')`
  width: 105px;
  height: 105px;
  border-radius: 50px;
  background-image: url('icon/oracledb.jpg');
  background-position: center center;
  background-size: cover;
  @media (max-width: 1024px) {
    width: 85px;
    height: 85px;
  }
  @media (max-width: 375px) {
    width: 35px;
    height: 35px;
  }
`;

// const MysqlIcon = styled('div')`
//   width: 100px;
//   height: 100px;
//   background-image: url('icon/mysql.png');
//   background-position: center center;
//   background-size: cover;
// `;

const GithubIcon = styled('div')`
  width: 75px;
  height: 75px;
  background-image: url('icon/github.png');
  background-position: center center;
  background-size: cover;
  @media (max-width: 1024px) {
    width: 45px;
    height: 45px;
  }
  @media (max-width: 375px) {
    width: 25px;
    height: 25px;
  }
`;

const Column = styled('div')`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Skill = () => {
  return (
    <>
      <Title id="skill">
        <TitleContent>기술</TitleContent>
      </Title>
      <SkillList>
        <Column>
          <Item>
            <Msg>중급</Msg>
            <Css3 />
          </Item>
          <Item>
            <Msg>중급</Msg>
            <Html5 />
          </Item>
          <Item>
            <Msg>중급</Msg>
            <Jscript />
          </Item>
          <Item>
            <Msg>중급</Msg>
            <Java />
          </Item>
        </Column>
        <Column>
          <Item>
            <Msg>중급</Msg>
            <ReactIcon />
          </Item>
          <Item>
            <Msg>초급</Msg>
            <JqueryIcon />
          </Item>
        </Column>
        <Column>
          <Item>
            <Msg>초급</Msg>
            <MongoIcon />
          </Item>
          <Item>
            <Msg>중급</Msg>
            <OracleIcon />
          </Item>
        </Column>
        <Column>
          <Item>
            <Msg>초급</Msg>
            <GithubIcon />
          </Item>
          <Item>
            <Msg>초급</Msg>
            <NodeIcon />
          </Item>
        </Column>
      </SkillList>
    </>
  );
};

export default Skill;
