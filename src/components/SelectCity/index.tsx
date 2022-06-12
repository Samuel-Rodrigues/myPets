import React, { FC } from 'react';
import {
  Wrapper,
  TextCity,
  IconLocation,
  BoxData,
  IconFilter,
  TextLocation,
  BoxText,
} from './styles';

type Props = {};

const SelectCity: FC<Props> = ({ ...rest }) => {
  return (
    <Wrapper {...rest}>
      <BoxData>
        <IconLocation />
        <BoxText>
          <TextLocation>Localização</TextLocation>
          <TextCity>Fortaleza, CE</TextCity>
        </BoxText>
      </BoxData>
      <BoxData>
        <IconFilter />
      </BoxData>
    </Wrapper>
  );
};

export default SelectCity;
