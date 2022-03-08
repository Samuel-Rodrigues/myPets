import React, {FC} from 'react';
import {Wrapper} from './styles';

type Props = {
  type?: 'error' | 'info';
  message?: string;
  show?: boolean;
};

const HelperText: FC<Props> = ({type = 'error', message, show = true}) => {
  return (
    <>
      {show && (
        <Wrapper type={type} visible>
          {message}
        </Wrapper>
      )}
    </>
  );
};

export default HelperText;
