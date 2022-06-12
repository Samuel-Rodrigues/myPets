import React, { FC } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { ButtonWrapper, TextButton, Wrapper } from './styles';

type Props = { title: string } & RectButtonProps;

const Button: FC<Props> = ({ title, ...rest }) => {
  return (
    <Wrapper>
      <ButtonWrapper {...rest}>
        <TextButton>{title}</TextButton>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Button;
