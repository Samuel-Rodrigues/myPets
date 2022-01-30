import styled from 'styled-components/native';
import {VariantTextType} from './index';

import {RFValue} from '@utils/';

type TextProps = {
  variant: VariantTextType;
};

export const Wrapper = styled.Text<TextProps>`
  font-family: ${({variant, theme}) =>
    variant === 'title'
      ? theme.fonts.title.fontFamily
      : variant === 'body'
      ? theme.fonts.body.fontFamily
      : theme.fonts.info.fontFamily};

  font-size: ${({variant, theme}) =>
    variant === 'title'
      ? RFValue(theme.fonts.title.fontSize)
      : variant === 'body'
      ? RFValue(theme.fonts.body.fontSize)
      : RFValue(theme.fonts.info.fontSize)}px;
`;
