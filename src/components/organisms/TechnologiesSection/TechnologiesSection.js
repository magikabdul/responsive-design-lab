import React from 'react';
import styled from 'styled-components';
import SectionTitle from 'components/atoms/SectionTitle/SectionTitle';
import TechCard from 'components/atoms/TechCard/TechCard';
import { ReactComponent as TypeScript } from 'assets/svg/techs/typescript-svgrepo-com.svg';
import { ReactComponent as JavaScript } from 'assets/svg/techs/javascript-svgrepo-com.svg';
import { ReactComponent as ReactLogo } from 'assets/svg/techs/react-svgrepo-com.svg';
import { ReactComponent as Java } from 'assets/svg/techs/java-svgrepo-com.svg';
import { ReactComponent as Hibernate } from 'assets/svg/techs/hibernate-svgrepo-com.svg';
import { ReactComponent as SpringBoot } from 'assets/svg/techs/spring-boot.svg';
import { ReactComponent as Html } from 'assets/svg/techs/html5-svgrepo-com.svg';
import { ReactComponent as StyledComponents } from 'assets/svg/techs/styled-svgrepo-com.svg';
import { ReactComponent as Webpack } from 'assets/svg/techs/webpack-svgrepo-com.svg';
import { ReactComponent as Laravel } from 'assets/svg/techs/laravel-svgrepo-com.svg';
import { ReactComponent as Vue } from 'assets/svg/techs/vue-svgrepo-com.svg';
import { ReactComponent as Angular } from 'assets/svg/techs/angular-svgrepo-com.svg';

const techs = [
  {
    name: 'TypeScript',
    icon: TypeScript,
  },
  {
    name: 'Javascript',
    icon: JavaScript,
  },
  {
    name: 'React',
    icon: ReactLogo,
  },
  {
    name: 'Java',
    icon: Java,
  },
  {
    name: 'SpringBoot',
    icon: SpringBoot,
  },
  {
    name: 'Hibernate',
    icon: Hibernate,
  },
  {
    name: 'Html',
    icon: Html,
  },
  {
    name: 'Styled\nComponents',
    icon: StyledComponents,
  },
  {
    name: 'Webpack',
    icon: Webpack,
  },
  {
    name: 'Laravel',
    icon: Laravel,
  },
  {
    name: 'Vue',
    icon: Vue,
  },
  {
    name: 'Angular',
    icon: Angular,
  },
];

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const TechnologiesSection = () => (
  <>
    <SectionTitle begin="Techno" end="logies"/>
    <Container>
      {techs.map((tech) => (
        <TechCard key={tech.name} name={tech.name} Icon={tech.icon} />
      ))}
    </Container>
  </>
);

export default TechnologiesSection;
