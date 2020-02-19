import React, {useRef} from 'react';
import {StyleSheet} from 'react-native';
import Video from 'react-native-video';

// Within your render function, assuming you have a file called
// "background.mp4" in your project. You can include multiple videos
// on a single screen if you like.

const VideoBox = () => {
  const playerRef = useRef(null);

  const onBuffer = () => {};
  const onVideoError = () => {};
  return (
    <Video
      source={{uri: 'background'}} // Can be a URL or a local file.
      ref={playerRef}
      onBuffer={onBuffer} // Callback when remote video is buffering
      onError={onVideoError} // Callback when video cannot be loaded
      style={styles.backgroundVideo}
    />
  );
};

var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default VideoBox;
