import React, {FC} from 'react';
import {TextInput} from 'react-native-paper';

type Props = React.ComponentProps<typeof TextInput> & {};

const Input: FC<Props> = ({...rest}) => {
  return <TextInput {...rest} />;
};

export default Input;
