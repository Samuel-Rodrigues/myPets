import styled from 'styled-components/native';
import {Platform} from 'react-native';

import {RFValue} from '@utils/';

export const Wrapper = styled.View`
  background-color: ${({theme}) => theme.colors.primary};

  border-radius: ${RFValue(100)}px;

  padding: ${RFValue(3)}px;

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

export const Icon = styled.Image`
  width: ${RFValue(150)}px;
  height: ${RFValue(150)}px;
`;
