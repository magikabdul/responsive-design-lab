import React from 'react';
import styled from 'styled-components';
import ProjectCard from 'components/molecules/ProjectCard/ProjectCard';
import SectionTitle from 'components/atoms/ProjectTitle/SectionTitle';
import imgProjectFirst from 'assets/svg/projects/first-project.svg';
import imgProjectSecond from 'assets/svg/projects/second-project.svg';
import imgProjectThird from 'assets/svg/projects/third-project.svg';
import imgProjectFourth from 'assets/svg/projects/fourth-project.svg';
import { FaAngular, FaHtml5, FaJava, FaLaravel, FaReact, FaVuejs } from 'react-icons/fa';
import {
  SiHibernate,
  SiJavascript,
  SiPhp,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
  SiWebpack,
  SiWolframlanguage,
} from 'react-icons/si';

const projects = [
  {
    id: 1,
    image: imgProjectFirst,
    name: 'First Project',
    icons: [<FaVuejs size="2.2rem"/>, <FaLaravel size="2.2rem"/>, <SiTypescript size="2.2rem"/>],
  },
  {
    id: 2,
    image: imgProjectSecond,
    name: 'Second Project',
    icons: [<FaHtml5 size="2.2rem"/>, <FaLaravel size="2.2rem"/>, <SiTypescript size="2.2rem"/>,
      <SiJavascript size="2.2rem"/>, <SiWebpack size="2.2rem"/>],
  },
  {
    id: 3,
    image: imgProjectThird,
    name: 'Third Project',
    icons: [<FaReact size="2.2rem"/>, <FaJava size="2.2rem"/>, <SiSpringboot size="2.2rem"/>,
      <SiHibernate size="2.2rem"/>, <SiTailwindcss size="2.2rem"/>],
  },
  {
    id: 4,
    image: imgProjectFourth,
    name: 'Fourth Project',
    icons: [<FaAngular size="2.2rem"/>, <SiTypescript size="2.2rem"/>, <SiPhp size="2.2rem"/>,
      <FaLaravel size="2.2rem"/>, <SiWolframlanguage size="2.2rem"/>],
  },
];

const Container = styled.main`
  margin: 5rem 0;
  display: grid;

  @media only screen and (min-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ProjectSection = () => (
  <>
    <SectionTitle begin='Proj' end='ects'/>
    <Container>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          image={project.image}
          name={project.name}
          icons={project.icons}
        />
      ))}
    </Container>
  </>
);

export default ProjectSection;
