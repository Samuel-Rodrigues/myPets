import styled from 'styled-components/native';
import {Typography, Input as BaseInput} from '@components/';
import {RFValue} from '@utils/';

export const Wrapper = styled.View`
  background-color: ${({theme}) => theme.colors.secondary};

  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

const BaseView = styled.View`
  padding: ${RFValue(20)}px;
`;

export const BoxLogo = styled(BaseView)`
  justify-content: center;
  align-items: center;
`;

export const TitleLogo = styled(Typography).attrs({variant: 'titleLogo'})`
  color: ${({theme}) => theme.colors.primary};
`;

export const SubTitleLogo = styled(Typography).attrs({variant: 'title'})`
  color: ${({theme}) => theme.colors.primary_ligth};
`;

export const Input = styled(BaseInput).attrs(({theme}) => ({
  underlineColor: theme.colors.primary_ligth,
  activeUnderlineColor: theme.colors.primary,
  placeholderTextColor: theme.colors.primary_ligth,
}))`
  background-color: ${({theme}) => theme.colors.tertiary};

  border-radius: ${RFValue(10)}px;
  margin-bottom: ${RFValue(10)}px;
`;

export const FormContent = styled(BaseView)``;

export const ButtonGoIn = styled.TouchableOpacity``;

export const ForgotPass = styled(Typography)``;
