import React, {FC} from 'react';
import {TextInput} from 'react-native-paper';

import {ErrorText, Wrapper} from './styles';

type Props = React.ComponentProps<typeof TextInput> & {helperText?: string};

const Input: FC<Props> = ({helperText, ...rest}) => {
  return (
    <>
      <Wrapper {...rest} />
      {!!helperText && (
        <ErrorText type="error" visible>
          {helperText}
        </ErrorText>
      )}
    </>
  );
};

export default Input;
