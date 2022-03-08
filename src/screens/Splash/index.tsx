import React, {FC} from 'react';
import {Button, StyleSheet, Dimensions} from 'react-native';
import {Wrapper} from './styles';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

type Props = {};

const WIDTH = Dimensions.get('window').width;

const Splash: FC<Props> = () => {
  const animation = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(animation.value, {
            duration: 500,
            easing: Easing.ease,
          }),
        },
      ],
    };
  });

  const handleAnimationPosition = () => {
    animation.value = Math.random() * (WIDTH - 100);
  };

  return (
    <Wrapper>
      <Animated.View style={[styled.box, animatedStyles]} />

      <Button title="Oioi" onPress={handleAnimationPosition} />
    </Wrapper>
  );
};

export default Splash;

const styled = StyleSheet.create({
  box: {width: 100, height: 100, backgroundColor: 'red'},
});
