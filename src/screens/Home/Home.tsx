import React, {FC} from 'react';
import {FlatList} from 'react-native';

import ScreensWrapper from '../../components/ScreensWrapper/ScreensWrapper';

import Input from '../../components/Input';
import CardPet from '../../components/CardPet';
import ButtonAdd from '../../components/ButtonAdd';

import {BoxCardPet, CardPetContent} from './styles';

type Props = {};

const Home: FC<Props> = () => {
  return (
    <ScreensWrapper title="Home">
      <Input mode="outlined" placeholder="Nome do pet" label="Nome do pet" />
      <BoxCardPet>
        <FlatList<Pet>
          data={[{name: 'Ragnar'}, {name: 'Ragnar filho '}]}
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
