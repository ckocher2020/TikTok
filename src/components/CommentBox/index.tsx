import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Text,
  TextInput
} from 'react-native';
import { Content } from 'native-base';
import { CommentType } from '../../utils/types';
import Animated from 'react-native-reanimated';
import CommentItem from '../CommentItem';

type CommentBoxProps = {
  vimeoId: number;
  videoComments: CommentType[];
  addVideoComment: Function;
};

const CommentBox = (props: CommentBoxProps) => {
  const { videoComments, addVideoComment, vimeoId } = props;

  const offsetY = new Animated.Value(0);
  const commentListRef = useRef({} as any);

  const [comment, setComment] = useState('');

  const handleChangeComment = (newComment: string) => {
    setComment(newComment);
  };

  const handlePostComment = () => {
    if (!comment.length || !comment.trim().length) {
      return;
    }
    addVideoComment(vimeoId, comment);
  };

  return (
    <View style={styles.container}>
      <View style={styles.commentListBox}>
        <Animated.ScrollView
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: offsetY } } }],
            { useNativeDriver: true }
          )}
          scrollEventThrottle={16}
          ref={commentListRef}
        >
          {videoComments.map((comment, index) => (
            <CommentItem comment={comment} />
          ))}
        </Animated.ScrollView>
      </View>
      <View style={styles.commentInputContainer}>
        <TextInput
          style={styles.commentInput}
          value={comment}
          onEndEditing={handlePostComment}
          onChangeText={handleChangeComment}
        />
        <TouchableOpacity
          style={styles.commentSendButton}
          onPress={handlePostComment}
        >
          <Text style={styles.commentSendButtonIcon}>{'Send'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%'
  },
  commentListBox,
  commentInputContainer,
  commentInput,
  commentSendButton,
  commentSendButtonIcon
});

export default CommentBox;
