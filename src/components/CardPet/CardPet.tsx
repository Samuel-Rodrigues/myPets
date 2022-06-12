import React, { FC } from 'react';

import { GENDER_ENUM } from '@utils/';
import {
  Wrapper,
  Name,
  Image,
  BoxIcons,
  BoxImagem,
  Gender,
  Age,
  IconPaw,
  IconShare,
  IconHeart,
} from './styles';

type Props = { pet: Pet };

const CardPet: FC<Props> = ({ pet: { age, name, gender, imageURL } }) => {
  return (
    <Wrapper>
      <BoxImagem>
        <Name>{name}</Name>
        <Gender>{gender && GENDER_ENUM[gender]}</Gender>
        <Age>{age.value} Meses</Age>
        <Image
          source={{
            uri: imageURL,
          }}
        />
      </BoxImagem>
      <BoxIcons>
        <IconHeart />
        <IconPaw />
        <IconShare />
      </BoxIcons>
    </Wrapper>
  );
};

export default CardPet;
