import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { Typography, Input as BaseInput } from '@components/';
import { RFValue } from '@utils/';

export const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.secondary};

  flex: 1;
  justify-content: space-evenly;
`;

export const KeyboardAvoiding = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === 'ios' ? 'padding' : undefined,
})`
  flex: 1;
`;

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: { flex: 1 },
})``;

const BaseView = styled.View`
  padding: 0 ${RFValue(35)}px;
`;

export const BoxLogo = styled(BaseView)`
  justify-content: center;
  align-items: center;
`;

export const TitleLogo = styled(Typography).attrs({ variant: 'titleLogo' })`
  color: ${({ theme }) => theme.colors.primary};
`;

export const Text = styled(Typography).attrs({ variant: 'title' })`
  color: ${({ theme }) => theme.colors.primary_ligth};
  text-align: center;
`;

export const BoxInput = styled.View`
  margin-bottom: ${RFValue(10)}px;
`;

export const Input = styled(BaseInput).attrs(({ theme }) => ({
  activeUnderlineColor: theme.colors.primaty_dark,
  placeholderTextColor: theme.colors.primary_ligth,
  theme: {
    colors: {
      placeholder: theme.colors.primary,
      text: theme.colors.primaty_dark,
      primary: theme.colors.primary,
      background: theme.colors.tertiary,
    },
  },
}))`
  border-radius: ${RFValue(10)}px;
  margin-bottom: ${RFValue(2)}px;
`;

export const BoxTextForgotPass = styled.View`
  margin-top: ${RFValue(15)}px;
`;

export const FormContent = styled(BaseView)``;

export const ButtonGoIn = styled.TouchableOpacity``;
