import React, { FC } from 'react';
import { Wrapper } from './styles';

export type VariantTextType = 'title' | 'body' | 'info' | 'titleLogo';

type Props = { variant?: VariantTextType };

const Typography: FC<Props> = ({ children, variant = 'title', ...rest }) => {
  return (
    <Wrapper variant={variant} {...rest}>
      {children}
    </Wrapper>
  );
};

export default Typography;
