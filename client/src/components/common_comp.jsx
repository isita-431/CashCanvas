import styled from 'styled-components';

export const AppHeader = styled.div`
  background-image: url('C:\Projects\CashCanvas\client\public\image\dollar_sign.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  // color: white;
`;

export const HeadingTag = styled.h1`
  color: grey;
  text-align: center;
`;

export const CenteredContainer = styled.div`
  margin: 0px;
  display: flex;
  justify-content: center;
`;

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  padding-top: 70px;
`;

export const FormContainer = styled.div`
  margin-top: 2em;
  top: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

export const MutedLink = styled.a`
  font-size: 12px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
  text-decoration: none;
`;

export const BoldLink = styled.a`
  font-size: 12px;
  color: rgb(63, 94, 251);
  font-weight: 500;
  text-decoration: none;
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }
  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(241, 196, 15);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 11px 40%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition:
    all,
    240ms ease-in-out;
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

  &:hover {
    filter: brightness(1.5);
  }
`;
