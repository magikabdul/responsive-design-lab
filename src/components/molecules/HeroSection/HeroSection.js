import React from 'react';
import styled, { keyframes } from 'styled-components';
import imgHero from 'assets/landing-hero.gif';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;

  @media only screen and (min-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    
  }
`;

const ImageBox = styled.div`
  width: 75%;
  margin: 0 auto;

  @media only screen and (min-width: 1000px) {
    order: 2;
    width: 65%;
  }
`;

const InfoBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextBox = styled.div`
  font-size: 2.3rem;
  text-align: center;
  color: ${({theme}) => theme.color.text.primary};

  @media only screen and (min-width: 1000px) {
    place-self: flex-end;
  }

  & span {
    font-size: 1.8rem;
    display: block;
  }
`;

const IconContainer = styled.div`
  margin-top: 1rem;
  background: ${({theme}) => theme.gradient.main};
  width: max-content;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  display: inline-flex;
  justify-content: center;
  gap: 1rem;

  & svg {
    display: inline-block;
    color: white;
    width: 2rem;
    height: 2rem;
  }
`;

const ScrollDownButton = styled.button`
  width: 1.5rem;
  height: 5rem;
  margin: 2rem auto;
  display: block;
  border-radius: 1rem;
  border: 0.2rem solid #7d62f2;
  background: none;

  @media only screen and (min-width: 1000px) {
    display: none;
  }
`;

const jumpCircle = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(170%);
  }
`;

const ScrollDownCircle = styled.div`
  border-radius: 50%;
  background: ${({theme}) => theme.gradient.main};
  width: 1rem;
  height: 1rem;
  margin: 0 auto;

  animation: 1s ${jumpCircle} infinite alternate-reverse;
`;

const HeroSection = ({sectionName}) => (
  <Container name={sectionName}>
    <ImageBox>
      <img src={imgHero} alt="landing hero"/>
    </ImageBox>
    <InfoBox>
      <TextBox>
        <h1>Krzysztof Cholewa</h1>
        <span>Fullstack Developer</span>
        <IconContainer>
          <FaLinkedin/>
          <FaGithub/>
        </IconContainer>
      </TextBox>
      <ScrollDownButton>
        <ScrollDownCircle/>
      </ScrollDownButton>
    </InfoBox>
  </Container>
);

export default HeroSection;
