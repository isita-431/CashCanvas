import React, { useState } from 'react';
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

const initial_state = {
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
};

export default function Signup() {
  const [state, setState] = useState(initial_state);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
    console.log(state);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
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
        Please sign-up to continue
      </Subtitle>
      <ForgotPassword
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
      >
        <span>Already a user?</span>
        <a href="login">Sign-in</a>
      </ForgotPassword>
      <Wrapper>
        <Form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          onSubmit={handleSubmit}
        >
          <Label>Enter your name</Label>
          <Input
            type="text"
            name="name"
            placeholder="username"
            value={state.name} // Corrected state property name
            onChange={handleInputChange}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={transition}
          />
          <Label>Enter your email</Label>
          <Input
            type="email"
            name="email"
            placeholder="email"
            value={state.email}
            onChange={handleInputChange}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={transition}
          />
          <Label>Enter your Password</Label>
          <Input
            type="password"
            name="password"
            placeholder="password"
            value={state.password}
            onChange={handleInputChange}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={transition}
          />
          <Label>Confirm Password</Label>
          <Input
            type="password"
            name="confirmPassword"
            placeholder="confirm password"
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
