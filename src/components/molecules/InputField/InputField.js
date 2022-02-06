import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  font-size: 1rem;
`;

const Label = styled.label`
  margin-bottom: .2rem;
  color: ${({ theme }) => theme.color.text.primary};
`;

const Input = styled.input`
  padding: 0.5rem;
  border-radius: 1rem;
  outline: none;
  border: ${({ theme }) => `1px solid ${theme.color.text.primary}` };
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  border-radius: 1rem;
  border: ${({ theme }) => `1px solid ${theme.color.text.primary}` };
`;

const InputField = ({name, textarea}) => (
  <Container>
    <Label htmlFor={name}>{name}</Label>
    {textarea ? <TextArea type="text" name={name} id={name} rows={10}/> : <Input type="text" name={name} id={name}/>}
  </Container>
);

export default InputField;
