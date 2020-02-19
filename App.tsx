/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import React from 'react';
import {View} from 'react-native';
import VideoList from 'components/VideoList';
import Animated from 'react-native-reanimated';

export const Parent = () => {
  // Create an "y" animated value and pass it down to the children
  const itemNumber = new Animated.Value(0);

  return (
    <View>
      <VideoList itemNumber={itemNumber} />
    </View>
  );
};

export default App;
