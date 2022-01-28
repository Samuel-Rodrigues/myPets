import React, {FC} from 'react';
import {Wrapper, BoxStart, BoxEnd} from './styles';

import {Text} from 'react-native';

type Props = {};

const Header: FC<Props> = () => {
  return (
    <Wrapper>
      <BoxStart>
        <Text>Voltar</Text>
      </BoxStart>
      <BoxEnd>
        <Text>Botao direito</Text>
      </BoxEnd>
    </Wrapper>
  );
};

export default Header;
