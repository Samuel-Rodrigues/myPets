import React, { FC } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { SPECIES_ENUM } from '@utils/';
import { Wrapper, Title } from './styles';

type Props = { specie: keyof typeof SPECIES_ENUM };

const CardButtonFilter: FC<Props> = ({ specie }) => {
  const pressCard = async () => {
    try {
    } catch {}
  };
  return (
    <GestureHandlerRootView>
      <Wrapper specie={specie} onPress={pressCard}>
        <Title specie={specie}>{SPECIES_ENUM[specie]}</Title>
      </Wrapper>
    </GestureHandlerRootView>
  );
};

export default CardButtonFilter;
