import React, {FC} from 'react';

import {RectButtonProps} from 'react-native-gesture-handler';
import {RectButton, GestureHandlerRootView} from '@utils/';

type Props = {} & RectButtonProps;

const BaseRecButton: FC<Props> = ({...rest}) => {
  return (
    <GestureHandlerRootView>
      <RectButton {...rest} />
    </GestureHandlerRootView>
  );
};

export default BaseRecButton;
