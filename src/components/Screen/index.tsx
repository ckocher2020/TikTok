import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { vimeoIds } from '../../utils/constants';
import { CommentType } from '../../utils/types';
import VideoList from '../VideoList';
import CommentBox from '../CommentBox';
import moment from 'moment';

const Screen = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [videoComments, setVideoComments] = useState({} as any);

  const handleChangeVideoIndex = (index: number) => {
    setCurrentVideoIndex(index);
  };

  const handleAddVideoComment = (vimeoId: number, comment: string) => {
    setVideoComments({
      ...videoComments,
      [vimeoId]: [
        ...videoComments[vimeoId],
        {
          content: comment,
          sender: 'James',
          date: moment().format('HH:mm:ss')
        } as CommentType
      ]
    });
  };

  useEffect(() => {
    const newComments = {} as any;
    vimeoIds.map(vimeoId => {
      newComments[vimeoId] = [];
    });
    setVideoComments(newComments);
  }, []);

  return (
    <View style={styles.container}>
      <VideoList
        currentVideoIndex={currentVideoIndex}
        handleChangeVideoIndex={handleChangeVideoIndex}
      />
      <CommentBox
        vimeoId={vimeoIds[currentVideoIndex]}
        videoComments={videoComments[vimeoIds[currentVideoIndex]]}
        addVideoComment={handleAddVideoComment}
      />
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
