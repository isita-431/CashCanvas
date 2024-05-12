// export default Contact;
import React, { useState } from 'react';
import {
  Container as commonContainer,
  Subtitle,
  Form,
  Input,
  Label,
  Button,
  ForgotPassword
} from './main/common_comp';
import { CustomH1 } from './main/custom_h1_component/custom_h1';
import styled from 'styled-components';

const Container = styled(commonContainer)`
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 650px;
`;

const initialMessageState = {
  message: ''
};

const Contact = () => {
  const [messageState, setMessageState] = useState(initialMessageState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMessageState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailTo = 'mailto:ip22@rice.edu,sm250@rice.edu';
    const subject = encodeURIComponent('Message from Contact Form');
    const body = encodeURIComponent(messageState.message);
    window.location.href = `${mailTo}?subject=${subject}&body=${body}`;
    setMessageState(initialMessageState);
  };

  const transition = {
    duration: 0.5,
    type: 'spring',
    damping: 20,
    stiffness: 100
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Container>
        <CustomH1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          data="Contact Us"
        />
        <Subtitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
        >
          Feel free to drop us a message!
        </Subtitle>
        <Subtitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
        >
          Our contact information is as follows:
        </Subtitle>
        <Form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          onSubmit={handleSubmit}
        >
          <Label>Please enter your message:</Label>
          <Input
            as="textarea"
            name="message"
            style={{ height: '150px' }}
            value={messageState.message}
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
            Send
          </Button>
        </Form>
        <ForgotPassword
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
        >
          <span>Or you can reach us directly at:</span>
          <a href="mailto:ip22@rice.edu,sm250@rice.edu">
            ip22@rice.edu, sm250@rice.edu
          </a>
        </ForgotPassword>
      </Container>
    </div>
  );
};

export default Contact;
