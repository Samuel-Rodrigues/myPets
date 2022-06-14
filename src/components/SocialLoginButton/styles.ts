import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import BaseRecButton from '../BaseRecButton';
import Typography from '../Typography';

export const Wrapper = styled(BaseRecButton)`
  height: ${RFValue(56)}px;
  border-radius: ${RFValue(5)}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  background-color: ${({ theme }) => theme.colors.shape};
`;

export const ImageContainer = styled.View`
  padding: ${RFValue(16)}px;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-color: ${({ theme }) => theme.colors.background};
  border-right-width: 1px;
`;

export const Title = styled(Typography).attrs({ variant: 'title' })`
  flex: 1;
  text-align: center;
  color: ${({ theme }) => theme.colors.primaty_dark};
`;
