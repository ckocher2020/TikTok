import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { onScroll } from 'react-native-redash';
import Animated from 'react-native-reanimated';
import VideoPlayer from '../VideoPlayer';
import { videoList } from '../../utilities/videoList';

type VideoListProps = {
  itemNumber: Animated.Value<number>;
};

const VideoList = (props: VideoListProps) => {
  return (
    <View style={styles.container}>
      <Animated.ScrollView
        onScroll={onScroll({ y: props.itemNumber })}
        scrollEventThrottle={16}
        contentContainerStyle={{
          paddingTop: 0,
          width: '100%',
          height: '100%'
        }}
      >
        <VideoPlayer source={videoList[0].content} />
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
