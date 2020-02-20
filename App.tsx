/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import VideoList from './src/components/VideoList';
import Animated from 'react-native-reanimated';

export const App = () => {
  const itemNumber = new Animated.Value(0);

  return (
    <View style={styles.container}>
      <VideoList itemNumber={itemNumber} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  }
});

export default App;
