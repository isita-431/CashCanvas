import React from 'react';
import {
  BoldLink,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton
} from './common_comp';
import { Marginer } from './marginer';
import { CenteredContainer } from './common_comp';
import {
  BoxContainer,
  HeaderContainer,
  TopContainer,
  BackDrop,
  InnerContainer,
  HeaderText,
  SmallText
} from './boxcontainer';

// import { AccountContext } from './accountContext';

// eslint-disable-next-line no-unused-vars
export function signup(props) {
  // const { switchToSignup } = useContext(AccountContext);
  return (
    <>
      <BoxContainer>
        <TopContainer>
          <BackDrop />
          <HeaderContainer>
            <HeaderText>Welcome To</HeaderText>
            <HeaderText>CashCanvas</HeaderText>
            <SmallText>Please sign-up to continue!</SmallText>
          </HeaderContainer>
        </TopContainer>
        <InnerContainer>
          <FormContainer>
            <Input type="text" placeholder="Your Name" />
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Input type="password" placeholder="Confirm Password" />
          </FormContainer>
          <Marginer direction="vertical" margin={10} />
          <Marginer direction="vertical" margin="1.6em" />
          <SubmitButton type="submit">Reset</SubmitButton>
          <Marginer direction="vertical" margin="1em" />
          <CenteredContainer>
            <MutedLink href="#">
              Already a member?
              <BoldLink href="login"> Signin</BoldLink>
            </MutedLink>
          </CenteredContainer>
        </InnerContainer>
      </BoxContainer>
    </>
  );
}

export default signup;
