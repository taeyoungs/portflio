import React from 'react';
import styled from 'styled-components';
import { withRouter, Link } from 'react-router-dom';

const Header = styled('header')`
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
  color: ${props => (props.current ? 'white' : 'rgba(255, 255, 255, 0.9)')};
  font-weight: ${props => (props.current ? 600 : 300)};
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
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    {console.log(pathname)}
    <List>
      <Item current={pathname === '/'}>
        <MLink to="/">홈</MLink>
      </Item>
      <Item current={pathname === '/about'}>
        <MLink to="/about">소개</MLink>
      </Item>
      <Item current={pathname === '/project'}>
        <MLink to="/project">프로젝트</MLink>
      </Item>
      <Item current={pathname === '/contact'}>
        <MLink to="/contact">연락처</MLink>
      </Item>
    </List>
  </Header>
));
