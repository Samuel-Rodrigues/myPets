import React, {FC} from 'react';
import {Wrapper} from './styles';

type Props = {name: string; size: number; color: string};

const Icon: FC<Props> = ({color, name, size}) => {
  return <Wrapper color={color} name={name} size={size} />;
};

export default Icon;
