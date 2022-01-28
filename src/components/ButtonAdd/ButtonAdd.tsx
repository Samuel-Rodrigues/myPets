import React, {FC} from 'react';
import {Wrapper} from './styles';

import Typography from '../Typography';

type Props = {};

const ButtonAdd: FC<Props> = () => {
  return (
    <Wrapper>
      <Typography>+</Typography>
    </Wrapper>
  );
};

export default ButtonAdd;
