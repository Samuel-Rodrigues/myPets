import React, {FC} from 'react';
import {FlatList} from 'react-native';

import {
  ButtonAdd,
  ScreensWrapper,
  CardPet,
  CardButtonFilter,
} from '@components/';

import {BoxCardPet, CardPetContent, BoxCardFilter, Select} from './styles';

type Props = {};

const Home: FC<Props> = () => {
  return (
    <ScreensWrapper>
      <Select />
      <BoxCardFilter>
        <CardButtonFilter specie="DOG" />
        <CardButtonFilter specie="CAT" />
        <CardButtonFilter specie="BIRD" />
        <CardButtonFilter specie="OTHER" />
      </BoxCardFilter>
      <BoxCardPet>
        <FlatList<Pet>
          data={[
            {
              name: 'Shushi',
              age: {type: 'year', value: 4},
              gender: 'male',
              imageURL:
                'https://img.migalhas.com.br/gf_base/empresas/MIGA/imagens/C386DAA5881D7AAA9BDE57C772F7604E92DD_cachorro.jpg',
            },
            {
              name: 'João',
              age: {type: 'month', value: 2},
              gender: 'male',
              imageURL:
                'https://cdn.better-pets.net/3172281/qu_hacer_si_encuentro_un_gato_abandonado_2.jpg.webp',
            },
          ]}
          renderItem={({item}) => (
            <CardPetContent>
              <CardPet pet={item} />
            </CardPetContent>
          )}
        />
        <ButtonAdd />
      </BoxCardPet>
    </ScreensWrapper>
  );
};
export default Home;
