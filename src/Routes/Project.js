import React from 'react';
import styled from 'styled-components';
import { Github } from '@styled-icons/boxicons-logos';
import { Link as Site } from '@styled-icons/entypo/Link';

const GridBox = styled('div')`
  width: 100%;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 20px;
  margin-bottom: 30px;
  @media (max-width: 375px) {
    grid-gap: 10px;
    margin-bottom: 15px;
  }
`;

// media query로 image 사이즈 수정
const GridItem = styled('div')`
  margin: 0 auto;
  width: calc(100% - 200px);
  height: 400px;
  display: grid;
  grid-template-columns: 1.3fr 2fr;
  padding: 30px;
  @media (max-width: 1024px) {
    padding: 15px;
    width: calc(100% - 100px);
  }
  @media (max-width: 375px) {
    width: 100%;
    grid-template-rows: 200px 0.7fr;
    grid-template-columns: none;
    height: 450px;
    padding: 0;
  }
`;

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
    margin-bottom: 10px;
  }
`;

const TitleContent = styled('span')`
  border-bottom: 2px solid black;
  padding: 10px;
`;

const ProjectOne = styled('div')`
  background-image: url('screenshot/review-app.png');
  background-position: center center;
  background-size: cover;
  @media (max-width: 375px) {
    background-position: top center;
  }
`;

const ProjectTwo = styled('div')`
  background-image: url('screenshot/interior.png');
  background-position: center center;
  background-size: cover;
  @media (max-width: 375px) {
    background-position: top center;
  }
`;

const ProjectThree = styled('div')`
  background-image: url('screenshot/youngflix.png');
  background-position: center center;
  background-size: cover;
  @media (max-width: 375px) {
    background-position: top center;
  }
`;

const ProjectFour = styled('div')`
  background-image: url('screenshot/guessmine.png');
  background-position: top center;
  background-size: cover;
  @media (max-width: 375px) {
    background-position: top center;
  }
`;

const ProjectFive = styled('div')`
  background-image: url('screenshot/cssprojects.png');
  background-position: top center;
  background-size: cover;
  @media (max-width: 375px) {
    background-position: top center;
  }
`;

const ProjectInfo = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 30px;
  padding-top: 15px;
  @media (max-width: 375px) {
    padding: 10px;
    padding-top: 10px;
  }
`;

const ProjectTitle = styled('div')`
  margin-bottom: 20px;
  font-size: 25px;
  font-weight: 600;
  @media (max-width: 1024px) {
    font-size: 23px;
  }
  @media (max-width: 375px) {
    font-size: 13px;
    margin-top: 5px;
  }
`;

const Content = styled('div')`
  margin-bottom: 40px;
  padding-top: 0px;
  line-height: 1.5;
  @media (max-width: 1024px) {
    font-size: 16px;
  }
  @media (max-width: 375px) {
    font-size: 9px;
    margin-bottom: 20px;
  }
`;

const SkillList = styled('div')`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const SkillItem = styled('div')`
  padding: 10px;
  border-radius: 10px;
  border: 1px solid rgba(20, 20, 20, 1);
  margin-right: 10px;
  @media (max-width: 1024px) {
    padding: 5px;
    font-size: 12px;
  }
  @media (max-width: 375px) {
    font-size: 8px;
  }
`;

const GithubLink = styled('div')`
  margin-bottom: 30px;

  @media (max-width: 1024px) {
    font-size: 12px;
  }
  @media (max-width: 375px) {
    font-size: 8px;
    margin-bottom: 15px;
  }
`;

const GithubIcon = styled(Github)`
  width: 50px;
  height: 50px;
  color: black;
  margin-right: 5px;
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
  @media (max-width: 1024px) {
    width: 30px;
    height: 30px;
  }
  @media (max-width: 375px) {
    width: 20px;
    height: 20px;
  }
`;

const SiteLink = styled('div')`
  display: flex;
  align-items: center;
  color: black;
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
  @media (max-width: 1024px) {
    font-size: 12px;
  }
  @media (max-width: 375px) {
    font-size: 8px;
  }
`;

const SiteIcon = styled(Site)`
  width: 30px;
  height: 30px;
  color: black;
  margin-right: 10px;
  @media (max-width: 1024px) {
    width: 20px;
    height: 20px;
  }
  @media (max-width: 375px) {
    width: 10px;
    height: 10px;
  }
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
          <ProjectInfo>
            <ProjectTitle>Movie Review App</ProjectTitle>
            <Content>
              {' '}
              충분히 열락의 있음으로써 위하여 설레는 석가는 심장의 되려니와,
              보는 사막이다. 발휘하기 힘차게 품고 새 뼈 예수는 수 말이다. 인생을
              그들의 이것이야말로 수 소담스러운 아니다.
            </Content>
            <SkillList>
              <SkillItem>React</SkillItem>
              <SkillItem>Express</SkillItem>
              <SkillItem>Nodejs</SkillItem>
              <SkillItem>MongoDB</SkillItem>
              <SkillItem>AWS EC2</SkillItem>
              <SkillItem>AWS S3</SkillItem>
            </SkillList>
            <GithubLink>
              <a
                href="https://github.com/taeyoungs/review-app-client"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon />
              </a>
              (Client) &nbsp;
              <a
                href="https://github.com/taeyoungs/review-app-server"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon />
              </a>
              (Server)
            </GithubLink>
            <SiteLink>
              <a
                href="https://www.youngs-review.shop"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiteIcon />
                바로 가기
              </a>
            </SiteLink>
          </ProjectInfo>
        </GridItem>
        <GridItem>
          <ProjectTwo />
          <ProjectInfo>
            <ProjectTitle>혼자하는 인테리어</ProjectTitle>
            <Content>
              {' '}
              충분히 열락의 있음으로써 위하여 설레는 석가는 심장의 되려니와,
              보는 사막이다. 발휘하기 힘차게 품고 새 뼈 예수는 수 말이다. 인생을
              그들의 이것이야말로 수 소담스러운 아니다.
            </Content>
            <SkillList>
              <SkillItem>Java</SkillItem>
              <SkillItem>Oracle</SkillItem>
              <SkillItem>Javacsript</SkillItem>
              <SkillItem>AWS RDS</SkillItem>
            </SkillList>
            <GithubLink>
              <a
                href="https://github.com/taeyoungs/AcornTeamProject"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon />
              </a>
            </GithubLink>
          </ProjectInfo>
        </GridItem>
        <GridItem>
          <ProjectThree />
          <ProjectInfo>
            <ProjectTitle>Youngflix</ProjectTitle>
            <Content>
              {' '}
              충분히 열락의 있음으로써 위하여 설레는 석가는 심장의 되려니와,
              보는 사막이다. 발휘하기 힘차게 품고 새 뼈 예수는 수 말이다. 인생을
              그들의 이것이야말로 수 소담스러운 아니다.
            </Content>
            <SkillList>
              <SkillItem>React</SkillItem>
              <SkillItem>CSS3</SkillItem>
            </SkillList>
            <GithubLink>
              <a
                href="https://github.com/taeyoungs/youngflix"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon />
              </a>
            </GithubLink>
            <SiteLink>
              <a
                href="https://clever-cori-810b75.netlify.com/#/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiteIcon />
                바로 가기
              </a>
            </SiteLink>
          </ProjectInfo>
        </GridItem>
        <GridItem>
          <ProjectFour />
          <ProjectInfo>
            <ProjectTitle>Guess mine</ProjectTitle>
            <Content>
              {' '}
              충분히 열락의 있음으로써 위하여 설레는 석가는 심장의 되려니와,
              보는 사막이다. 발휘하기 힘차게 품고 새 뼈 예수는 수 말이다. 인생을
              그들의 이것이야말로 수 소담스러운 아니다.
            </Content>
            <SkillList>
              <SkillItem>Javascript</SkillItem>
              <SkillItem>Nodejs</SkillItem>
              <SkillItem>Socket.io</SkillItem>
            </SkillList>
            <GithubLink>
              <a
                href="https://github.com/taeyoungs/guess-mine"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon />
              </a>
            </GithubLink>
            <SiteLink>
              <a
                href="https://shielded-chamber-16065.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiteIcon />
                바로 가기
              </a>
            </SiteLink>
          </ProjectInfo>
        </GridItem>
        <GridItem>
          <ProjectFive />
          <ProjectInfo>
            <ProjectTitle>CSS Projects</ProjectTitle>
            <Content>
              {' '}
              충분히 열락의 있음으로써 위하여 설레는 석가는 심장의 되려니와,
              보는 사막이다. 발휘하기 힘차게 품고 새 뼈 예수는 수 말이다. 인생을
              그들의 이것이야말로 수 소담스러운 아니다.
            </Content>
            <SkillList>
              <SkillItem>CSS3</SkillItem>
            </SkillList>
            <GithubLink>
              <a
                href="https://github.com/taeyoungs/css-practice-projects"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon />
              </a>
            </GithubLink>
          </ProjectInfo>
        </GridItem>
      </GridBox>
    </>
  );
};

export default Project;
