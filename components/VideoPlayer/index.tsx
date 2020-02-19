import React, { useRef } from 'react';
import { StyleSheet } from 'react-native';
import Video from 'react-native-video';

// Within your render function, assuming you have a file called
// "background.mp4" in your project. You can include multiple videos
// on a single screen if you like.
type VideoBoxProps = {
  source: string;
};

const VideoBox = (props: VideoBoxProps) => {
  const playerRef = useRef(null);

  const onBuffer = () => {};
  const onVideoError = () => {};
  return (
    <Video
      source={{
        uri:
          'http://movietrailers.apple.com/movies/wb/justiceleague/justice-league-comic-con_h720p.mov'
      }} // Can be a URL or a local file.
      ref={playerRef}
      onBuffer={onBuffer} // Callback when remote video is buffering
      onError={onVideoError} // Callback when video cannot be loaded
      style={styles.backgroundVideo}
    />
  );
};

var styles = StyleSheet.create({
  backgroundVideo: {
    top: 0,
    left: 0,
    width: 400,
    height: 400
  }
});

export default VideoBox;
