import React, { useRef } from 'react';
import {
  StyleSheet,
  View,
  NativeSyntheticEvent,
  NativeScrollEvent
} from 'react-native';
import Animated from 'react-native-reanimated';
import { SCREEN_HEIGHT, vimeoIds, DELTA } from '../../utils/constants';
import VideoPlayer from '../VideoPlayer';

type VideoListProps = {
  currentVideoIndex: number;
  handleChangeVideoIndex: Function;
};

const VideoList = (props: VideoListProps) => {
  const { currentVideoIndex, handleChangeVideoIndex } = props;

  const offsetY = new Animated.Value(0);
  const scrollViewRef = useRef({} as any);

  const handleScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const newFloatIndex = event.nativeEvent.contentOffset.y / SCREEN_HEIGHT;
    let newIndex = Math.round(newFloatIndex);

    handleChangeVideoIndex(newIndex);

    scrollViewRef.current.getNode().scrollTo({
      x: 0,
      y: newIndex * SCREEN_HEIGHT,
      animated: true
    });
  };

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: offsetY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        onMomentumScrollEnd={handleScrollEnd}
        onScrollEndDrag={handleScrollEnd}
        ref={scrollViewRef}
      >
        {vimeoIds.map((vimeoId, index) => (
          <VideoPlayer
            vimeoId={vimeoId}
            key={vimeoId}
            playable={index === currentVideoIndex}
            index={index}
          />
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
