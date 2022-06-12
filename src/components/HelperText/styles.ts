import styled from 'styled-components/native';
import { HelperText } from 'react-native-paper';
import { RFValue } from '@utils/';

export const Wrapper = styled(HelperText)`
  background-color: ${({ theme }) => theme.colors.secondary};

  margin: 0 ${RFValue(3)}px;
  padding: 0;
`;
