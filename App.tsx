/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Screen from './src/components/Screen';

export const App = () => {
  return (
    <View style={styles.container}>
      <Screen />
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
