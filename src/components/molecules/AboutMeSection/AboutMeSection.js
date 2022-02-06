import React from 'react';
import styled from 'styled-components';
import SectionTitle from 'components/atoms/SectionTitle/SectionTitle';
import imgAbout from 'assets/about-hero.gif';

const Container = styled.section`
  padding: 1.3rem;

  @media only screen and (min-width: 780px) {
    width: 90%;
    margin: 0 auto;
    padding: 1.7rem;
  }

  @media only screen and (min-width: 1350px) {
    display: flex;
    padding: 0.2rem;
  }
`;

const Box = styled.div`
  @media only screen and (min-width: 1350px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: ${({theme}) => theme.color.text.primary};
  text-align: justify;

  @media only screen and (min-width: 780px) {
    font-size: 1.4rem;
  }
`;

const Quote = styled.div`
  margin-top: 0.5rem;
  font-size: .8rem;
  color: ${({theme}) => theme.color.text.secondary};
`;

const Image = styled.img`
  width: 85%;
  margin: 2rem auto;

  @media only screen and (min-width: 780px) {
    width: 80%;
  }

  @media only screen and (min-width: 1000px) {
    width: 70%;
  }

  @media only screen and (min-width: 1350px) {
    width: 40%;
  }
`;

const AboutMeSection = ({sectionName}) => (
  <div name={sectionName}>
    <SectionTitle begin="Who" end="Am I?"/>
    <Container>
      <Box>
        <Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, animi aut consectetur
          dignissimos eius facere id laudantium libero magnam magni odit officia possimus quaerat quos ratione,
          repellendus vero? Consequatur deleniti dolore, dolorem eligendi et facilis impedit ipsum itaque, iure libero
          molestiae, mollitia nisi non quae quos repudiandae sunt unde voluptatem?
        </Description>
        <Quote>
          Hard work beats talent when talent doesn't work hard - Tim Notke
        </Quote>
      </Box>
      <Image src={imgAbout} alt="programmer"/>
    </Container>
  </div>
);

export default AboutMeSection;
