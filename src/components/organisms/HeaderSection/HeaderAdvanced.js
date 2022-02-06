import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { withScroll } from 'react-fns';
import { ReactComponent as Logo } from 'assets/svg/logo.svg';
import HeaderMenu from 'components/molecules/HeaderMenu/HeaderMenu';

const HeaderContainer = styled.header`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: white;
  box-shadow: ${({hasShadow}) => hasShadow && 'rgba(0, 0, 0, 0.062) 0 3px 5px'};
  z-index: 1000;
`;

const ButtonBurger = styled.button`
  height: 3.4rem;
  width: 3.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 10;

  @media only screen and (min-width: 1000px) {
    display: none;
  }

  & span {
    width: 100%;
    height: 0.3rem;
    border-radius: 0.5rem;
    background: ${({theme, show}) => show ? 'white' : theme.gradient.main};
    transition: all 0.3s ease-in-out;
    transform-origin: right;
  }

  & span:first-child {
    transform: ${({show}) => show ? 'rotate(-45deg) translateY(-0.5rem)' : 'none'}
  }

  & span:nth-child(2) {
    width: ${({ show }) => show && '100%'};
    transform: ${({show}) => show ? 'rotate(45deg) translateY(0.5rem)' : 'none'}
  }

  & span:last-child {
    width: 60%;
    display: ${({show}) => show ? 'none' : 'block'}
  }
`;

const HeaderAdvanced = ({y}) => {
  const [show, setShow] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    y > 0 ? setHasShadow(true) : setHasShadow(false);
  }, [y])

  return (
    <HeaderContainer hasShadow={hasShadow}>
      <Logo/>
      <HeaderMenu show={show} setShow={setShow}/>
      <ButtonBurger show={show} onClick={() => setShow(!show)}>
        <span/>
        <span/>
        <span/>
      </ButtonBurger>
    </HeaderContainer>
  );
};

export default withScroll(HeaderAdvanced);
