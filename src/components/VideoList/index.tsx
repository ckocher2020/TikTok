import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { onScroll } from 'react-native-redash';
import Animated from 'react-native-reanimated';
import VideoPlayer from '../VideoPlayer';

type VideoListProps = {};

const VideoList = () => {
  const itemNumber = new Animated.Value(0);
  const vimeoIds = [
    392619248,
    392619263,
    392619282,
    392619298,
    392619309,
    392619319,
    392619331,
    392619490
  ];

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        onScroll={onScroll({ y: itemNumber })}
        scrollEventThrottle={16}
        contentContainerStyle={{}}
      >
        {vimeoIds.map(vimeoId => (
          <VideoPlayer vimeoId={vimeoId} key={vimeoId} />
        ))}
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%'
  }
});

export default VideoList;
