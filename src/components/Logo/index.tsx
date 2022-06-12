import React from 'react';
import { DogLog } from '@assets/';
import { Wrapper, Icon } from './styles';

type Props = { size?: 'small' | 'medium' | 'large' };

function Logo({ size = 'large' }: Props) {
  return (
    <Wrapper>
      <Icon source={DogLog} size={size} />
    </Wrapper>
  );
}

export default Logo;
