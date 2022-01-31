import React, {FC} from 'react';
import {RectButtonProps} from 'react-native-gesture-handler';

import {Wrapper, TextButton} from './styles';

type Props = {title: string} & RectButtonProps;

const Button: FC<Props> = ({title, ...rest}) => {
  return (
    <Wrapper {...rest}>
      <TextButton>{title}</TextButton>
    </Wrapper>
  );
};

export default Button;
