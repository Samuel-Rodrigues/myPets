import React, { FC } from 'react';
import { Wrapper, Body } from './styles';

import Header from '../Header';

const ScreensWrapper: FC = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Body>{children}</Body>
    </Wrapper>
  );
};

export default ScreensWrapper;
