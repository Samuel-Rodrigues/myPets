import React from 'react';
import { Wrapper, Title, ImageContainer } from './styles';
import { IconGoogle, IconApple } from '@assets/';

type Props = { socialType: 'google' | 'apple'; onPress: () => void };

function SocialLoginButton({ socialType, onPress }: Props) {
  return (
    <Wrapper onPress={onPress}>
      <ImageContainer>
        {socialType === 'apple' && <IconApple width={40} height={40} />}
        {socialType === 'google' && <IconGoogle width={40} height={40} />}
      </ImageContainer>
      <Title>
        {socialType === 'google' && 'Entrar com google'}
        {socialType === 'apple' && 'Entrar com Apple'}
      </Title>
    </Wrapper>
  );
}

export default SocialLoginButton;
