/* eslint-disable no-unused-vars */
import React from 'react';
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton
} from './common_comp';
import { Marginer } from './marginer';
import { CenteredContainer } from './common_comp';
import { useState } from 'react';
import styled from 'styled-components';

const FieldContainer = styled.div`
  border: 0.5px solid #ccc;
  padding: 1em;
  margin-bottom: 1em;
`;

const initial_state = {
  email: '',
  password: ''
};

// eslint-disable-next-line no-unused-vars
export function LoginForm(props) {
  // const { switchToSignup } = useContext(AccountContext);
  const [state, setState] = useState(initial_state);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
    console.log(state);
  };
  const clear_state = () => {
    setState(initial_state);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      console.log(state);
    }, 100);
  };

  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        <FieldContainer>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleInputChange}
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleInputChange}
          />
        </FieldContainer>
        <Marginer direction="vertical" margin="1em" />
        {/* <Marginer direction="vertical" margin="1.6em" /> */}
        <CenteredContainer>
          <MutedLink href="#">
            Forgot your password? <BoldLink href="reset">Reset it</BoldLink>
          </MutedLink>
        </CenteredContainer>
        <SubmitButton type="submit">Signin</SubmitButton>
        {/* <Marginer direction="vertical" margin="1em" /> */}
      </FormContainer>
      <CenteredContainer>
        <MutedLink href="#">
          Not a member?
          <BoldLink href="signup">Signup</BoldLink>
        </MutedLink>
      </CenteredContainer>
    </>
  );
}
