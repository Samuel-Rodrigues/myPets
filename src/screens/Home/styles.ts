import styled from 'styled-components/native';

import { SelectCity } from '@components/';
import { RFValue } from '../../utils/modules';

export const BoxCardPet = styled.View`
  flex: 1;
`;

export const CardPetContent = styled.View`
  margin-bottom: ${RFValue(15)}px;
`;

export const BoxCardFilter = styled.View`
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: ${RFValue(15)}px;
`;

export const Select = styled(SelectCity)`
  margin-bottom: ${RFValue(15)}px;
`;
