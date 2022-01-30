import styled from 'styled-components/native';
import {Typography} from '@components/';

import {RFValue} from '../../utils/modules';

export const Wrapper = styled.View`
  background-color: ${({theme}) => theme.colors.shape};

  flex-direction: row;
  height: ${RFValue(160)}px;
  border-radius: ${RFValue(20)}px;

  align-items: center;
`;

export const ImageContent = styled.Image.attrs({resizeMode: 'cover'})`
  width: 80%;
  height: 100%;

  border-radius: ${RFValue(20)}px;
  border-radius: ${RFValue(20)}px;
`;

export const BoxIcons = styled.View`
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
`;

export const Name = styled(Typography).attrs({variant: 'body'})``;

export const Breed = styled(Typography).attrs({variant: 'body'})``;
