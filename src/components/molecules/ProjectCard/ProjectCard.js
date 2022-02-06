import React from 'react';
import styled from 'styled-components';
import { FaCode } from 'react-icons/fa';

const Container = styled.div`
  width: 70%;
  margin: 5rem auto;
  box-shadow: rgba(0, 0, 0, 0.062) 0 3px 5px;
  padding: 1rem;
`;

const ImageBox = styled.img`
  width: 70%;
  margin: 0 auto 1rem;
`;

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: .5rem;

  & p {
    font-size: 1.2rem;
    font-weight: bold;
    color: ${({theme}) => theme.color.text.primary};
    padding-right: 3rem;
    border-bottom: ${({theme}) => `2px solid ${theme.color.text.primary}`};
    
    @media only screen and (min-width: 1000px) {
      font-size: 1.4rem;
    }
  }

  & a svg {
    color: #E4625D;
    margin-right: .5rem;
  }
`;

const DescriptionBox = styled.div`
  font-size: 1.2rem;
  padding: 0.4rem;
  text-align: justify;
  color: ${({theme}) => theme.color.text.secondary};
`;

const TechnologiesBox = styled.div`
  padding: 0.4rem;

  & p {
    padding: 0.4rem 3rem 0.4rem 0.4rem;
    border-bottom: ${({theme}) => `2px solid ${theme.color.text.secondary}`};
    width: max-content;
    font-size: 0.8rem;
    font-weight: bold;

    @media only screen and (min-width: 1000px) {
      font-size: 1rem;
    }
  }
`;

const TechnologiesIcon = styled.div`
  margin: 0.8rem;
  display: flex;
  gap: 1rem;
`;

const ProjectCard = ({image, name, icons}) => (
  <Container>
    <ImageBox src={image} alt="project logo"/>
    <InfoBox>
      <p>{name}</p>
      <a href="/">
        <FaCode size="1.6rem"/>
      </a>
    </InfoBox>
    <DescriptionBox>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto debitis distinctio eum eveniet expedita
      iste, mollitia nostrum tenetur unde?
    </DescriptionBox>
    <TechnologiesBox>
      <p>Technologies used</p>
      <TechnologiesIcon>
        {icons.map((icon, index) => (<div key={index}>{icon}</div>))}
      </TechnologiesIcon>
    </TechnologiesBox>
  </Container>
);

export default ProjectCard;
