import React from 'react';
import {
  Container,
  Title,
  Subtitle,
  Wrapper,
  Form,
  Input,
  Label,
  Button,
  ForgotPassword
} from './main/common_comp';
import { useState } from 'react';

const initial_state = {
  email: '',
  password: ''
};

export function Reset() {
  const [state, setState] = useState(initial_state);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
    console.log(state);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      console.log(state);
    }, 100);
    setState(initial_state);
  };

  const transition = {
    duration: 0.5,
    type: 'spring',
    damping: 20,
    stiffness: 100
  };

  return (
    <Container>
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
      >
        Welcome To Cash Canvas
      </Title>
      <Subtitle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
      >
        Please reset your password
      </Subtitle>
      <ForgotPassword
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
      >
        <span>Not a user?</span>
        <a href="signup">Signup</a>
      </ForgotPassword>
      <Wrapper>
        <Form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          onSubmit={handleSubmit}
        >
          <Label>Enter your Email</Label>
          <Input
            type="email"
            name="email"
            value={state.email}
            onChange={handleInputChange}
            placeholder="email"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={transition}
          />
          <Label>Enter your Password</Label>
          <Input
            type="password"
            name="password"
            value={state.password}
            onChange={handleInputChange}
            placeholder="password"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={transition}
          />
          <Label>Confirm your Password</Label>
          <Input
            type="password"
            name="confirmPassword"
            placeholder="confirm Password"
            value={state.confirmPassword}
            onChange={handleInputChange}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={transition}
          />
          <Button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
          >
            Submit
          </Button>
        </Form>
      </Wrapper>
    </Container>
  );
}
