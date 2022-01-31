import styled from 'styled-components';

import {RectButton, RFValue} from '@utils/';
import Typography from '../Typography';

export const Wrapper = styled(RectButton)`
  background-color: ${({theme}) => theme.colors.primary};

  padding: ${RFValue(15)}px;
  border-radius: ${RFValue(26)}px;
`;

export const TextButton = styled(Typography).attrs({variant: 'title'})`
  color: ${({theme}) => theme.colors.shape};
  font-weight: bold;
  text-align: center;
`;
