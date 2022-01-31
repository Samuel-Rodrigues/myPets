import React, {FC} from 'react';
import {DogLog} from '@assets/';
import {Wrapper, Icon} from './styles';

type Props = {};

const Logo: FC<Props> = () => {
  return (
    <Wrapper>
      <Icon source={DogLog} />
    </Wrapper>
  );
};

export default Logo;
