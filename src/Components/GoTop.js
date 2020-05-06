import React from 'react';
import styled from 'styled-components';
import { ArrowToTop } from '@styled-icons/boxicons-solid';

const ArrowBox = styled('div')`
  position: fixed;
  right: 45px;
  bottom: 45px;
  z-index: 2001px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: rgba(0, 0, 0, 1);
  opacity: 0.5;
  cursor: pointer;
  :hover {
    opacity: 1;
  }
  @media (max-width: 1024px) {
    width: 40px;
    height: 40px;
  }
  @media (max-width: 375px) {
    right: 35px;
    bottom: 35px;
    width: 30px;
    height: 30px;
    opacity: 0.5;
    :hover {
      opacity: 0.5;
    }
  }
`;

const ArrowIcon = styled(ArrowToTop)`
  width: 30px;
  height: 30px;
  color: white;
  @media (max-width: 1024px) {
    width: 25px;
    height: 25px;
  }
  @media (max-width: 375px) {
    width: 20px;
    height: 20px;
  }
`;

const GoTop = () => {
  const handleGoTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <ArrowBox onClick={handleGoTop}>
      <ArrowIcon />
    </ArrowBox>
  );
};

export default GoTop;
