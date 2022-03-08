import styled from 'styled-components/native';
import {Platform} from 'react-native';

import Typography from '../Typography';

import {getStatusBarHeight, RFValue} from '@utils/';

export const Wrapper = styled.View`
  background-color: ${({theme}) => theme.colors.primary};

  padding: ${Platform.OS === 'ios' ? getStatusBarHeight() + 20 : 0}px
    ${RFValue(35)}px 0;
  flex-direction: row;
  height: ${RFValue(120)}px;
  justify-content: space-around;

  align-items: center;
`;

export const BoxStart = styled.View`
  align-items: flex-start;
  width: 50%;
`;

export const UserName = styled(Typography).attrs({variant: 'title'})`
  color: ${({theme}) => theme.colors.secondary};
`;

export const Perfil = styled(Typography).attrs({variant: 'body'})`
  color: ${({theme}) => theme.colors.secondary};
`;

export const BoxEnd = styled.View`
  width: 50%;
  align-items: flex-end;
`;

export const Avatar = styled.Image`
  width: ${RFValue(45)}px;
  height: ${RFValue(45)}px;
  border-radius: ${RFValue(23)}px;
`;
