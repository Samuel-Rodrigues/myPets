import React, {FC} from 'react';
import {StyleSheet} from 'react-native';

import {Wrapper} from './styles';

import {Logo} from '@components/';

type Props = {};

const Splash: FC<Props> = () => {
  return (
    <Wrapper>
      <Logo size="medium" />
    </Wrapper>
  );
};

export default Splash;

const styled = StyleSheet.create({
  box: {width: 100, height: 100, backgroundColor: 'red'},
});
