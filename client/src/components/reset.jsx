import React from 'react';
import { FormContainer, Input, SubmitButton } from './common_comp';
import { Marginer } from './marginer';
import {
  BoxContainer,
  HeaderContainer,
  TopContainer,
  BackDrop,
  InnerContainer,
  HeaderText,
  SmallText
} from './boxcontainer';

// eslint-disable-next-line no-unused-vars
export function Reset(props) {
  return (
    <>
      <BoxContainer>
        <TopContainer>
          <BackDrop />
          <HeaderContainer>
            <HeaderText>Welcome To</HeaderText>
            <HeaderText>CashCanvas</HeaderText>
            <SmallText>Please reset your password to continue</SmallText>
          </HeaderContainer>
        </TopContainer>
        <InnerContainer>
          <FormContainer>
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Input type="password" placeholder="Confirm Password" />
          </FormContainer>
          <Marginer direction="vertical" margin={10} />
          <Marginer direction="vertical" margin="1.6em" />
          <SubmitButton type="submit">Reset</SubmitButton>
          <Marginer direction="vertical" margin="1em" />
        </InnerContainer>
      </BoxContainer>
    </>
  );
}

export default Reset;
