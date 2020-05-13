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
  margin-bottom: 15px;
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
  font-size: 13px;

  @media (max-width: 1024px) {
    font-size: 12px;
  }
  @media (max-width: 375px) {
    font-size: 10px;
    margin-bottom: 15px;
  }
`;

const GithubIcon = styled(Github)`
  width: 40px;
  height: 40px;
  color: black;
  margin-right: 5px;
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
  @media (max-width: 1024px) {
    width: 20px;
    height: 20px;
  }
  @media (max-width: 375px) {
    width: 25px;
    height: 25px;
  }
`;

const SiteLink = styled('div')`
  display: flex;
  align-items: center;
  color: black;
  font-size: 13px;
  width: 170px;
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
  @media (max-width: 1024px) {
    font-size: 12px;
    width: 130px;
  }
  @media (max-width: 375px) {
    font-size: 8px;
    width: 100px;
  }
`;

const SiteIcon = styled(Site)`
  width: 25px;
  height: 25px;
  color: black;
  margin-right: 10px;
  @media (max-width: 1024px) {
    width: 15px;
    height: 15px;
  }
  @media (max-width: 375px) {
    width: 18px;
    height: 18px;
  }
`;

const SubContent = styled('div')`
  margin-bottom: 5px;
`;

const Info = styled('div')`
  font-size: 15px;
  margin-bottom: 20px;
  line-height: 1.5;
  @media (max-width: 1024px) {
    font-size: 14px;
  }
  @media (max-width: 375px) {
    font-size: 8.5px;
  }
`;

const Period = styled('div')`
  font-size: 15px;
  margin-bottom: 10px;
  line-height: 1.5;
  @media (max-width: 1024px) {
    font-size: 14px;
  }
  @media (max-width: 375px) {
    font-size: 8.5px;
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
            <Period>개발기간 2020.03.03 ~ 2020.04.21</Period>
            <Info>
              ( React/Nodejs/HTML5/CSS3/JS, MongoDB, VSCode, Chrome 환경에서
              작업하였습니다. )
            </Info>
            <Content>
              <SubContent>
                특정 영화에 대한 리뷰 및 리뷰에 대한 댓글을 남길 수 있는
                사이트입니다.
              </SubContent>
              <SubContent>
                React와 Nodejs를 기반으로 웹과 API 서버 전체를 개발하였습니다.
              </SubContent>
              <SubContent>
                Cafe24에서 도메인 관리를 하였고, AWS EC2에 배포 및 S3 서비스가
                적용되었습니다.
              </SubContent>
            </Content>
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
                <SiteIcon />웹 링크 바로 가기
              </a>
            </SiteLink>
          </ProjectInfo>
        </GridItem>
        <GridItem>
          <ProjectTwo />
          <ProjectInfo>
            <ProjectTitle>혼자하는 인테리어</ProjectTitle>
            <Period>개발기간 2019.07.24 ~ 2019.08.01</Period>
            <Info>
              ( Java Spring/HTML5/CSS3/JS/jQuery, OracleDB, Eclipse, Chrome
              환경에서 작업하였습니다. )
            </Info>
            <Content>
              <SubContent>
                '오늘의 집' 사이트 클론 코딩 (교육기관 팀프로젝트/4명)
              </SubContent>
              <SubContent>
                Java Spring 프레임워크를 기반으로 User/Admin, 게시글, 장바구니
                웹 및 서버 API를 개발하였습니다.
              </SubContent>
              <SubContent>AWS RDS 서비스가 적용되었습니다.</SubContent>
            </Content>
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
            <Period>개발기간 2019.11.20 ~ 2019.12.24</Period>
            <Info>
              ( React/HTML5/CSS3/JS, VSCode, Chrome 환경에서 작업하였습니다. )
            </Info>
            <Content>
              <SubContent>
                현재 상영작, 상영 예정작, 영화 검색 및 상세 정보를 볼 수 있는
                사이트입니다.
              </SubContent>
              <SubContent>
                React를 사용하여 웹 전체를 개발하였으며, Netlify에
                배포되었습니다.
              </SubContent>
            </Content>
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
                <SiteIcon />웹 링크 바로 가기
              </a>
            </SiteLink>
          </ProjectInfo>
        </GridItem>
        <GridItem>
          <ProjectFour />
          <ProjectInfo>
            <ProjectTitle>Guess mine</ProjectTitle>
            <Period>개발기간 2019.10.29 ~ 2019.11.12</Period>
            <Info>
              ( Nodejs/Gulp/HTML5/CSS3/JS, VSCode, Chrome 환경에서
              작업하였습니다. )
            </Info>
            <Content>
              <SubContent>
                실시간 채팅 및 그림 그리기를 통한 퀴즈 사이트입니다.
              </SubContent>
              <SubContent>
                Socket.io를 활용해보기 위해 Nodejs 이용하여 개발하였으며,
                Heroku에 배포되었습니다.
              </SubContent>
            </Content>
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
                <SiteIcon />웹 링크 바로 가기
              </a>
            </SiteLink>
          </ProjectInfo>
        </GridItem>
      </GridBox>
    </>
  );
};

export default Project;
