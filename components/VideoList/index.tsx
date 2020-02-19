import * as React from 'react';
import { Image } from 'react-native';
import { onScroll } from 'react-native-redash';
import Animated from 'react-native-reanimated';
import VideoPlayer from '../VideoPlayer';

type VideoListProps = {
  itemNumber: Animated.Value<number>;
};

const VideoList = (props: VideoListProps) => {
  return (
    // Use onScroll to update the y value
    <Animated.ScrollView
      onScroll={onScroll({ y: props.itemNumber })}
      scrollEventThrottle={16}
      contentContainerStyle={{ paddingTop: 50 }}
    >
      <VideoPlayer source="https://youtu.be/6K5gy3RLcKc" />
    </Animated.ScrollView>
  );
};

export default VideoList;
