import styled from 'styled-components/native';
import {RFValue} from '../../utils/modules';

import Typography from '../Typography';

export const Wrapper = styled.View`
  background-color: ${({theme}) => theme.colors.primary};
  flex: 1;
`;

export const Body = styled.View`
  background-color: ${({theme}) => theme.colors.background};
  border: 2px solid ${({theme}) => theme.colors.background};
  padding: 10px;
  border-top-left-radius: ${RFValue(30)}px;
  border-top-right-radius: ${RFValue(30)}px;
  padding: ${RFValue(20)}px;
  flex: 1;
`;

export const Title = styled(Typography)`
  text-align: center;
  font-size: ${RFValue(18)}px;

  margin-top: ${RFValue(10)}px;
`;
