import React from 'react';
import styled from 'styled-components';
import { EmailOutline } from '@styled-icons/evaicons-outline';
import { GithubWithCircle as Git } from '@styled-icons/entypo-social';
import { Phone } from '@styled-icons/boxicons-solid';

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

const Flexbox = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 270px;
  margin-bottom: 30px;
  @media (max-width: 1024px) {
    height: 230px;
    margin-bottom: 20px;
  }
  @media (max-width: 375px) {
    height: 130px;
  }
`;

const FlexItem = styled('div')`
  font-size: 23px;
  margin: 10px;
  width: 300px;
  @media (max-width: 1024px) {
    font-size: 20px;
  }
  @media (max-width: 375px) {
    font-size: 13px;
    width: 170px;
  }
`;

const EmailIcon = styled(EmailOutline)`
  width: 45px;
  height: 45px;
  color: black;
  margin-right: 10px;
  @media (max-width: 1024px) {
    width: 35px;
    height: 35px;
  }
  @media (max-width: 375px) {
    width: 15px;
    height: 15px;
  }
`;

const GitIcon = styled(Git)`
  width: 45px;
  height: 45px;
  color: black;
  margin-right: 10px;
  @media (max-width: 1024px) {
    width: 35px;
    height: 35px;
  }
  @media (max-width: 375px) {
    width: 15px;
    height: 15px;
  }
`;

const PhoneIcon = styled(Phone)`
  width: 45px;
  height: 45px;
  color: black;
  margin-right: 10px;
  @media (max-width: 1024px) {
    width: 35px;
    height: 35px;
  }
  @media (max-width: 375px) {
    width: 15px;
    height: 15px;
  }
`;

const Contact = () => {
  return (
    <>
      <Title id="contact">
        <TitleContent>연락처</TitleContent>
      </Title>
      <Flexbox>
        <FlexItem>
          <EmailIcon /> lolollg@naver.com
        </FlexItem>
        <FlexItem>
          <PhoneIcon /> 010-2053-9453
        </FlexItem>
        <FlexItem>
          <a
            href="https://github.com/taeyoungs?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitIcon />
          </a>
        </FlexItem>
      </Flexbox>
    </>
  );
};

export default Contact;
