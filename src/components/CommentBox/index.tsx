import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { VideoCommentsType } from '../../utils/types';

type CommentBoxProps = {
  videoComments: VideoCommentsType;
};

const CommentBox = (props: CommentBoxProps) => {
  const { videoComments } = props;
  useEffect(() => {
    console.log(videoComments);
  }, [videoComments]);

  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%'
  }
});

export default CommentBox;
