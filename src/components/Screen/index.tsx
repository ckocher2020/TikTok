import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { SCREEN_HEIGHT, vimeoIds } from '../../utils/constants';
import { CommentType, VideoCommentsType } from '../../utils/types';
import VideoList from '../VideoList';
import CommentBox from '../CommentBox';

const Screen = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [videoComments, setVideoComments] = useState([] as VideoCommentsType[]);

  const handleChangeVideoIndex = (index: number) => {
    setCurrentVideoIndex(index);
  };

  useEffect(() => {
    const newComments = vimeoIds.map(vimeoId => {
      return {
        vimeoId,
        comments: []
      } as VideoCommentsType;
    });
    setVideoComments(newComments);
  });

  return (
    <View style={styles.container}>
      <VideoList
        currentVideoIndex={currentVideoIndex}
        handleChangeVideoIndex={handleChangeVideoIndex}
      />
      <CommentBox videoComments={videoComments[currentVideoIndex]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%'
  }
});

export default Screen;
