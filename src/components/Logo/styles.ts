import styled from 'styled-components/native';

import {RFValue} from '@utils/';

export const Wrapper = styled.View`
  background-color: ${({theme}) => theme.colors.primary};

  border-radius: ${RFValue(120)}px;
`;

export const Icon = styled.Image`
  width: ${RFValue(120)}px;
  height: ${RFValue(120)}px;
`;
