import styled from 'styled-components';
import {Platform} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {RectButton, RFValue} from '@utils/';
import Typography from '../Typography';

export const Wrapper = styled(GestureHandlerRootView)``;

export const ButtonWrapper = styled(RectButton)`
  background-color: ${({theme}) => theme.colors.primary};

  padding: ${RFValue(15)}px;
  border-radius: ${RFValue(26)}px;

  box-shadow: 0 10px 10px
    ${({theme}) =>
      Platform.OS === 'android' ? theme.colors.black : theme.colors.primary};
  shadow-radius: 7;
  shadow-opacity: 0.6;

  box-shadow-offset: {
    height: ${RFValue(20)}px;
    width: ${RFValue(20)}px;
  }
  elevation: ${RFValue(7)}px;
`;

export const TextButton = styled(Typography).attrs({variant: 'title'})`
  color: ${({theme}) => theme.colors.shape};
  font-weight: bold;
  text-align: center;
`;
