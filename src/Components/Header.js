import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { withRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { Menu } from '@styled-icons/entypo';
import { CloseOutline } from '@styled-icons/evaicons-outline';

// 1024px

const HeaderMenu = styled('header')`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 60px;
  z-index: 10;
  font-size: 18px;
  background-color: rgba(20, 20, 20, 0.8);
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
  font-family: 'Nanum Gothic';

  @media (max-width: 1024px) {
    display: none;
  }
`;

const MHeaderMenu = styled('header')`
  display: none;

  @media (max-width: 1024px) {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    width: ${(props) => (props.state ? '130px' : '60px')};
    height: ${(props) => (props.state ? '210px' : '60px')};
    z-index: 10;
    font-size: 18px;
    background-color: rgba(20, 20, 20, 0.8);
    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
    font-family: 'Nanum Gothic';
  }

  @media (max-width: 375px) {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    width: ${(props) => (props.state ? '65px' : '30px')};
    height: ${(props) => (props.state ? '100px' : '30px')};
    z-index: 10;
    font-size: 9px;
    background-color: rgba(20, 20, 20, 0.8);
    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
    font-family: 'Nanum Gothic';
  }
`;

const List = styled('ul')`
  display: flex;
`;

const Item = styled('li')`
  height: 60px;
  width: 110px;
  :first-child {
    width: 90px;
  }
  color: ${(props) => (props.current ? 'white' : 'rgba(255, 255, 255, 0.9)')};
  font-weight: ${(props) => (props.current ? 600 : 300)};
`;

const MLink = styled(Link)`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.9);
  :hover {
    opacity: 0.8;
  }
  @media (max-width: 1024px) {
    height: 30px;
  }
  @media (max-width: 375px) {
    height: 15px;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const MenuIcon = styled(Menu)`
  width: 35px;
  height: 35px;
  margin: 10px;
  color: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  animation: ${fadeIn} 1s ease;
  :hover {
    opacity: 0.5;
  }
  @media (max-width: 375px) {
    width: 18px;
    height: 18px;
    margin: 5px;
  }
`;

const CloseIcon = styled(CloseOutline)`
  width: 35px;
  height: 35px;
  margin: 10px;
  color: rgba(255, 255, 255, 0.9);
  animation: ${fadeIn} 1s ease;
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
  @media (max-width: 375px) {
    width: 18px;
    height: 18px;
    margin: 2px;
  }
`;

const MList = styled('div')`
  display: ${(props) => (props.state ? 'flex' : 'none')};
  flex-direction: column;
  width: 130px;
  animation: ${fadeIn} 1s ease;
  @media (max-width: 375px) {
    width: 65px;
  }
`;

const MItem = styled('div')`
  margin: 1.5px;
  color: white;
  font-family: 'NanumGothic';
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
`;

const Header = ({ location: { hash } }) => {
  const [state, setState] = useState(false);

  const handleMenuClick = () => {
    if (state) {
      setState(false);
    } else {
      setState(true);
    }
  };

  const handleMenuBlur = (event) => {
    console.log(event);
    if (state) {
      setState(false);
    }
  };

  return (
    <>
      <HeaderMenu>
        <List>
          <Item current={hash === '#home'}>
            <MLink smooth to="/#home">
              홈
            </MLink>
          </Item>
          <Item current={hash === '#about'}>
            <MLink smooth to="/#about">
              소개
            </MLink>
          </Item>
          <Item current={hash === '#project'}>
            <MLink smooth to="/#project">
              프로젝트
            </MLink>
          </Item>
          <Item current={hash === '#contact'}>
            <MLink smooth to="/#contact">
              연락처
            </MLink>
          </Item>
        </List>
      </HeaderMenu>
      <MHeaderMenu onClick={handleMenuClick} state={state}>
        {state ? <CloseIcon /> : <MenuIcon />}
        <MList state={state}>
          <MItem current={hash === '#home'}>
            <MLink smooth to="/#home">
              홈
            </MLink>
          </MItem>
          <MItem current={hash === '#about'}>
            <MLink smooth to="/#about">
              소개
            </MLink>
          </MItem>
          <MItem current={hash === '#project'}>
            <MLink smooth to="/#project">
              프로젝트
            </MLink>
          </MItem>
          <MItem current={hash === '#contact'}>
            {' '}
            <MLink smooth to="/#contact">
              연락처
            </MLink>
          </MItem>
        </MList>
      </MHeaderMenu>
    </>
  );
};

export default withRouter(Header);
