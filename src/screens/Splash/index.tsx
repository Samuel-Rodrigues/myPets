import React, { FC } from 'react';

import { Wrapper } from './styles';

import { Logo } from '@components/';

type Props = {};

const Splash: FC<Props> = () => {
  return (
    <Wrapper>
      <Logo size="medium" />
    </Wrapper>
  );
};

export default Splash;
