import React, {FC} from 'react';
import {Wrapper, Body, Title} from './styles';

import Header from '../Header';

type Props = {title: string};

const ScreensWrapper: FC<Props> = ({children, title}) => {
  return (
    <Wrapper>
      <Header />
      <Body>
        <Title variant="title">{title}</Title>
        {children}
      </Body>
    </Wrapper>
  );
};

export default ScreensWrapper;
