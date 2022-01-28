import React, {FC} from 'react';
import {Wrapper, Name, Breed, ImageContent, BoxIcons} from './styles';

type Props = {pet: Pet};

const CardPet: FC<Props> = () => {
  return (
    <Wrapper>
      <ImageContent
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Siberian_wild_dog.png',
        }}
      />
      <BoxIcons>
        <Name>S2</Name>
        <Name>Pata</Name>
        <Breed>Compar</Breed>
      </BoxIcons>
    </Wrapper>
  );
};

export default CardPet;
