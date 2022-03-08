import styled from 'styled-components/native';

import Typography from '../Typography';
import Icon from '../Icon';

import {RFValue} from '../../utils/modules';

export const Wrapper = styled.View`
  background-color: ${({theme}) => theme.colors.shape};

  flex-direction: row;
  height: ${RFValue(160)}px;
  border-radius: ${RFValue(20)}px;
`;

export const BoxImagem = styled.View`
  flex: 1;
  width: 80%;
  height: 100%;

  position: relative;
`;

export const Image = styled.Image.attrs({resizeMode: 'cover'})`
  flex: 1;
  border-radius: ${RFValue(20)}px;
  border-radius: ${RFValue(20)}px;
`;

export const BoxIcons = styled.View`
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  width: 20%;
`;

export const Name = styled(Typography).attrs({variant: 'title'})`
  color: ${({theme}) => theme.colors.shape};

  position: absolute;
  z-index: 9999;

  border-radius: ${RFValue(10)}px;
  box-shadow: 1px 1px 1px ${({theme}) => theme.colors.black};
  background-color: rgba(000, 000, 000, 0.2);
  elevation: 10px;

  left: 30;
  bottom: 30;
`;

export const Gender = styled(Typography).attrs({variant: 'body'})`
  color: ${({theme}) => theme.colors.shape};

  position: absolute;
  z-index: 9999;

  border-radius: ${RFValue(10)}px;

  box-shadow: 1px 1px 1px ${({theme}) => theme.colors.black};
  background-color: rgba(000, 000, 000, 0.2);
  elevation: 10px;

  right: 30;
  bottom: 50;
`;

export const Age = styled(Typography).attrs({variant: 'body'})`
  color: ${({theme}) => theme.colors.shape};

  position: absolute;
  z-index: 9999;

  box-shadow: 1px 1px 1px ${({theme}) => theme.colors.black};
  border-radius: ${RFValue(10)}px;

  background-color: rgba(000, 000, 000, 0.2);
  elevation: ${RFValue(10)}px;

  right: 30;
  bottom: 30;
`;

export const Breed = styled(Typography).attrs({variant: 'body'})``;

export const IconHeart = styled(Icon).attrs(({theme}) => ({
  color: theme.colors.attention,
  size: 20,
  name: 'heart',
}))``;

export const IconPaw = styled(Icon).attrs(({theme}) => ({
  color: theme.colors.success,
  size: 20,
  name: 'ios-paw-sharp',
}))``;

export const IconShare = styled(Icon).attrs(({theme}) => ({
  color: theme.colors.primary,
  size: 20,
  name: 'ios-share-sharp',
}))``;

// name="ios-paw-sharp" size={24} color="red"
