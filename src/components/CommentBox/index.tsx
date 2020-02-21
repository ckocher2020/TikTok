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
  commentListBox: {
    flex: 1,
    marginBottom: 40
  },
  commentInputContainer: {
    position: 'absolute',
    bottom: 0,
    height: 40,
    width: '100%'
  },
  commentInput: {
    flex: 1,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 14
  },
  commentSendButton: {
    width: 80,
    height: 40,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(33, 150, 243)'
  },
  commentSendButtonIcon: {
    fontSize: 16,
    fontWeight: '700',
    color: 'white'
  }
});

export default CommentBox;
