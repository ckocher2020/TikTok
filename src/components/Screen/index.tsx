import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SCREEN_HEIGHT } from '../../utils/constants';
import VideoList from '../VideoList';

const Screen = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleChangeVideoIndex = (index: number) => {
    setCurrentVideoIndex(index);
  };

  return (
    <View style={styles.container}>
      <VideoList
        currentVideoIndex={currentVideoIndex}
        handleChangeVideoIndex={handleChangeVideoIndex}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%'
  }
});

export default Screen;
