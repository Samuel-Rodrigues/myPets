import React, { FC } from 'react';

import CardPet from './CardPet';

type Props = { pet: Pet };

const CardPetContainer: FC<Props> = ({ pet }) => {
  return <CardPet pet={pet} />;
};

export default CardPetContainer;
