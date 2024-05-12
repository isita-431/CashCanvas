import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  text-align: center;
`;

export const Title = styled(motion.h1)`
  margin-bottom: 20px;
  color: grey;
`;

export const Subtitle = styled(motion.p)`
  margin-bottom: 20px;
`;

export const Wrapper = styled.div`
  max-width: 650px;
  margin: 0 auto;
`;

export const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 2px solid #007bff;
  border-radius: 8px;
  background-color: #f8f9fa;
`;

export const Input = styled(motion.input)`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

export const Label = styled(motion.label)`
  margin-bottom: 5px;
  text-align: left;
  width: 100%;
`;

export const Button = styled(motion.button)`
  margin-top: 10px;
  padding: 8px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const ForgotPassword = styled.div`
  margin-top: 20px;
`;
