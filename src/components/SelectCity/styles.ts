import styled from 'styled-components/native';

import Icon from '../Icon';
import { BaseRecButton, Typography } from '@components/';
import { RFValue } from '@utils/';

export const Wrapper = styled(BaseRecButton)`
  flex-direction: row;
  height: ${RFValue(50)}px;

  border-radius: ${RFValue(10)}px;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${RFValue(10)}px;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const TextCity = styled(Typography).attrs({ variant: 'title' })`
  color: ${({ theme }) => theme.colors.text};
`;

export const TextLocation = styled(Typography).attrs({ variant: 'body' })`
  color: ${({ theme }) => theme.colors.text};
`;

export const IconLocation = styled(Icon).attrs(({ theme }) => ({
  name: 'location',
  color: theme.colors.primary,
  size: 24,
}))``;

export const IconFilter = styled(Icon).attrs(({ theme }) => ({
  name: 'filter',
  color: theme.colors.primary,
  size: 24,
}))``;

export const BoxData = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BoxText = styled.View`
  margin-left: ${RFValue(5)}px;
`;
