import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import VideoPlayer from 'react-native-video-player';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

type VideoBoxProps = {
  vimeoId: number | string;
};

const VideoBox = (props: VideoBoxProps) => {
  const playerRef = useRef(null);
  const [vimeoInfo, setVimeoInfo] = useState({
    thumbnailUrl: '',
    videoUrl: '',
    video: {} as any
  });

  useEffect(() => {
    fetch(`https://player.vimeo.com/video/${props.vimeoId}/config`)
      .then(res => res.json())
      .then(res =>
        setVimeoInfo({
          thumbnailUrl: res.video.thumbs['640'],
          videoUrl:
            res.request.files.hls.cdns[res.request.files.hls.default_cdn].url,
          video: res.video
        })
      );
  }, [props.vimeoId]);

  if (!vimeoInfo.videoUrl.length) return null;

  return (
    <VideoPlayer
      endWithThumbnail
      video={{ uri: vimeoInfo.videoUrl }}
      videoWidth={SCREEN_WIDTH}
      videoHeight={SCREEN_HEIGHT * 0.98}
      thumbnail={{ uri: vimeoInfo.thumbnailUrl }}
      duration={vimeoInfo.video.duration}
      ref={playerRef}
      style={styles.container}
    />
  );
};

var styles = StyleSheet.create({
  container: {}
});

export default VideoBox;
