import React, { useRef } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Video from 'react-native-video';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

// Within your render function, assuming you have a file called
// "background.mp4" in your project. You can include multiple videos
// on a single screen if you like.
type VideoBoxProps = {
  source: number;
};

const VideoBox = (props: VideoBoxProps) => {
  const playerRef = useRef(null);

  return (
    <Video
      source={props.source} // Can be a URL or a local file.
      ref={playerRef}
      resizeMode="stretch"
      style={styles.scrollPage}
    />
  );
};

var styles = StyleSheet.create({
  scrollPage: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    padding: 0
  }
});

export default VideoBox;
