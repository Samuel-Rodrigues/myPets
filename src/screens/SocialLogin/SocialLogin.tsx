import React from 'react';
import { useAuth } from '../../hooks/auth';

import {
  Wrapper,
  FormContent,
  BoxLogo,
  TitleLogo,
  Text,
  BoxInput,
  Scroll,
  KeyboardAvoiding,
} from './styles';

import { Logo, SocialLoginButton } from '@components/';

function SocialLogin() {
  const data = useAuth();
  console.warn(data);

  return (
    <KeyboardAvoiding>
      <Scroll keyboardShouldPersistTaps="handled">
        <Wrapper>
          <BoxLogo>
            <Logo />
            <TitleLogo>My Pets</TitleLogo>
            <Text>Encontre um pet para adoção</Text>
          </BoxLogo>
          <FormContent>
            <BoxInput>
              <SocialLoginButton socialType="google" />
            </BoxInput>
            <BoxInput>
              <SocialLoginButton socialType="apple" />
            </BoxInput>
          </FormContent>
        </Wrapper>
      </Scroll>
    </KeyboardAvoiding>
  );
}

export default SocialLogin;
