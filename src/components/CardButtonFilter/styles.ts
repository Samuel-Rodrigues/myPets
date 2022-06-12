import styled from 'styled-components/native';
import { Platform } from 'react-native';

import { RectButton, SPECIES_ENUM } from '@utils/';

import Typography from '../Typography';

import { RFValue } from '@utils/';

type CardProps = {
  specie: keyof typeof SPECIES_ENUM;
};

export const Wrapper = styled(RectButton)<CardProps>`
  min-height: ${RFValue(40)}px;
  min-width: ${RFValue(50)}px;
  padding: ${RFValue(8)}px;

  padding-right: ${RFValue(30)}px;

  justify-content: center;
  align-items: flex-start;
  background-color: ${({
    theme: {
      colors: { yellow, blue, green, brown },
    },
    specie,
  }) =>
    specie === 'DOG'
      ? yellow
      : specie === 'CAT'
      ? blue
      : specie === 'BIRD'
      ? green
      : brown};

  border-radius: ${RFValue(12)}px;

  box-shadow: 0.3px 0.3px 0.3px;
  shadow-color: ${({ theme }) =>
    Platform.OS === 'ios' && theme.colors.primary_ligth};
  elevation: ${RFValue(5)}px;
`;

export const Title = styled(Typography).attrs({ variant: 'body' })<CardProps>`
  color: ${({
    theme: {
      colors: { yellow_dark, blue_dark, green_dark, brown_dark },
    },
    specie,
  }) =>
    specie === 'DOG'
      ? yellow_dark
      : specie === 'CAT'
      ? blue_dark
      : specie === 'BIRD'
      ? green_dark
      : brown_dark}; ;
`;
