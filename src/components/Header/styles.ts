import styled from 'styled-components/native';
import {Platform} from 'react-native';

import {getStatusBarHeight, RFValue} from '../../utils/modules';

export const Wrapper = styled.View`
  background-color: ${({theme}) => theme.colors.primary};

  padding: ${Platform.OS === 'ios' ? getStatusBarHeight() + 20 : 0}px
    ${RFValue(20)}px 0;
  flex-direction: row;

  height: ${RFValue(100)}px;
`;

export const BoxStart = styled.View`
  justify-content: center;
  align-items: flex-start;
  flex: 1;
`;

export const BoxEnd = styled.View`
  justify-content: center;
  align-items: flex-end;
  flex: 1;
`;
