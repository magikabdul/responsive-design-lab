import React from 'react';
import styled from 'styled-components';
import SectionTitle from 'components/atoms/SectionTitle/SectionTitle';
import contactImg from 'assets/message.gif';
import InputField from 'components/molecules/InputField/InputField';

const Container = styled.div`
  margin: 3rem auto;
  width: 80%;

  @media only screen and (min-width: 1000px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Image = styled.img`
  display: none;
  margin: 0 auto;
  @media only screen and (min-width: 1000px) {
    display: block;
  }
`;

const Form = styled.form`
  width: 100%;
`;

const Button = styled.button`
  background: ${({theme}) => theme.gradient.main};
  border: none;
  color: white;
  width: 50%;
  font-size: 1rem;
  padding: 0.5rem;
  margin: 0 auto;
  display: block;
  border-radius: 1rem;
  cursor: pointer;
  transition: all 3s ease-in-out;
  outline: none;

  &:hover {
    background: ${({theme}) => theme.gradient.secondary};
  }
`;

const ContactSection = () => (
  <>
    <SectionTitle begin="Send Me A" end="Message"/>
    <Container>
      <div>
        <Image src={contactImg} alt="email"/>
      </div>
      <Form onSubmit={(e) => e.preventDefault()} noValidate>
        <InputField name="Name"/>
        <InputField name="Email"/>
        <InputField name="Message" textarea/>
        <Button>submit</Button>
      </Form>
    </Container>
  </>
);

export default ContactSection;

