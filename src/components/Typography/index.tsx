import React, {FC} from 'react';
import {Text} from 'react-native';

type Props = {};

const Typography: FC<Props> = ({children, ...rest}) => {
  return <Text {...rest}>{children}</Text>;
};

export default Typography;
