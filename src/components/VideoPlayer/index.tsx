import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import VideoPlayer from 'react-native-video-player';
import Animated from 'react-native-reanimated';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

type VideoBoxProps = {
  index: number;
  vimeoId: number | string;
  playable: boolean;
};

const VideoBox = (props: VideoBoxProps) => {
  const { playable, index, vimeoId } = props;

  const playerRef = useRef({} as any);
  const [vimeoInfo, setVimeoInfo] = useState({
    thumbnailUrl: '',
    videoUrl: '',
    video: {} as any
  });

  useEffect(() => {
    fetch(`https://player.vimeo.com/video/${vimeoId}/config`)
      .then(res => res.json())
      .then(res =>
        setVimeoInfo({
          thumbnailUrl: res.video.thumbs['640'],
          videoUrl:
            res.request.files.hls.cdns[res.request.files.hls.default_cdn].url,
          video: res.video
        })
      );
  }, [vimeoId]);

  useEffect(() => {
    if (!playable && playerRef.current && playerRef.current.stop) {
      if (playerRef.current.state.isPlaying) {
        playerRef.current.stop();
      }
    }
  }, [playable]);

  if (!vimeoInfo.videoUrl.length) return null;

  return (
    <View style={styles.container}>
      <Animated.View>
        <VideoPlayer
          endWithThumbnail
          video={{ uri: vimeoInfo.videoUrl }}
          videoWidth={SCREEN_WIDTH}
          videoHeight={SCREEN_HEIGHT}
          thumbnail={{ uri: vimeoInfo.thumbnailUrl }}
          duration={vimeoInfo.video.duration}
          ref={playerRef}
          style={styles.container}
        />
      </Animated.View>
    </View>
  );
};

var styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT
  }
});

export default VideoBox;
