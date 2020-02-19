import * as React from 'react';
import { Image } from 'react-native';
import { onScroll } from 'react-native-redash';
import Animated from 'react-native-reanimated';

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
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((v, k) => (
        <Image
          style={{ width: '100%', height: 200, marginTop: 50 }}
          key={k + ''}
          source={{ uri: 'https://picsum.photos/200/300' }}
        />
      ))}
    </Animated.ScrollView>
  );
};

export default VideoList;
