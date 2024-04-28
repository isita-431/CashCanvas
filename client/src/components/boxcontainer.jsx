import React from 'react';
import styled from 'styled-components';
import { LoginForm } from './login';
import { motion } from 'framer-motion';

export const ParentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const BoxContainer = styled.div`
  width: 450px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  //   justify-content: center;
  //   align-items: center;
  //   align-content: center;
`;

export const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

export const BackDrop = styled(motion.div)`
  display: flex;
  width: 170%;
  position: absolute;
  flex-direction: column;
  border-radius: 100%;
  height: 550px;
  transform: rotate(60deg);
  top: -400px;
  left: -170px;
  background: rgb(63, 94, 251);
  background: radial-gradient(
    circle,
    rgba(63, 94, 251, 1) 0%,
    rgba(167, 81, 172, 1) 55%,
    rgba(197, 77, 149, 1) 71%,
    rgba(216, 75, 135, 1) 81%,
    rgba(233, 73, 122, 1) 90%,
    rgba(252, 70, 107, 1) 100%
  );
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const HeaderText = styled.h2`
  font-size: 45px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  text-align: right;
  margin: 0;
`;

export const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 11px;
  z-index: 10;
  margin: 0;
  text-align: right;
  margin-top: 7px;
`;

// @ts-ignore
// eslint-disable-next-line no-unused-vars
export const InnerContainer = styled.div`
  top: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 2.3em;
`;

// export const backdropVariants = {
//   expanded: {
//     width: '160%',
//     height: '550px',
//     borderRadius: '50%',
//     transform: 'rotate(60deg)'
//   },
//   collapsed: {
//     width: '160%',
//     height: '550px',
//     borderRadius: '50%',
//     transform: 'rotate(60deg)'
//   }
// };

// eslint-disable-next-line no-unused-vars
export function AccountBox(props) {
  // eslint-disable-next-line no-unused-vars
  const [isExpanded, setExpanded] = React.useState(false);
  return (
    <BoxContainer>
      <TopContainer>
        <BackDrop
        // initial={false}
        // animate={isExpanded ? 'expanded' : 'collapsed'}
        // variants={backdropVariants}
        />
        <HeaderContainer>
          <HeaderText>Welcome</HeaderText>
          <HeaderText>Back</HeaderText>
          <SmallText>Please sign-in to continue!</SmallText>
        </HeaderContainer>
      </TopContainer>
      <InnerContainer>
        <LoginForm></LoginForm>
      </InnerContainer>
    </BoxContainer>
  );
}
