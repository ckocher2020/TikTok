import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
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
  const [isCommentBoxVisable, setIsCommentBoxVisable] = useState(false);

  const handleChangeComment = (newComment: string) => {
    setComment(newComment);
  };

  const handlePostComment = () => {
    if (!comment.length || !comment.trim().length) {
      return;
    }
    addVideoComment(vimeoId, comment);
    if (!isCommentBoxVisable) {
      setIsCommentBoxVisable(true);
    }
    setComment('');
  };

  const handleChangeCommentBoxVisable = () => {
    setIsCommentBoxVisable(visable => !visable);
  };

  if (!videoComments) return null;

  return (
    <View
      style={{ ...styles.container, height: isCommentBoxVisable ? 200 : 51 }}
    >
      {isCommentBoxVisable && (
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
              <CommentItem comment={comment} key={'comment' + index} />
            ))}
          </Animated.ScrollView>
        </View>
      )}
      <View style={styles.commentInputContainer}>
        <TouchableOpacity
          style={styles.commentsButton}
          onPress={handleChangeCommentBoxVisable}
        >
          <Image
            style={styles.commentsButtonIcon}
            source={require('../../../assets/comments.png')}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.commentInput}
          value={comment}
          onEndEditing={handlePostComment}
          onChangeText={handleChangeComment}
          placeholder="Comment"
        />
        <TouchableOpacity
          style={styles.commentSendButton}
          onPress={handlePostComment}
        >
          <Image
            style={styles.commentSendButtonIcon}
            source={require('../../../assets/sendbutton.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    height: 200,
    zIndex: 2,
    width: '100%'
  },
  commentListBox: {
    flex: 1,
    marginBottom: 50
  },
  commentInputContainer: {
    position: 'absolute',
    bottom: 6,
    width: '100%',
    height: 45,
    zIndex: 3,
    flexDirection: 'row'
  },
  commentInput: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    paddingHorizontal: 10,
    fontSize: 16
  },
  commentSendButton: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  commentSendButtonIcon: {
    width: 45,
    height: 45
  },
  commentsButton: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },
  commentsButtonIcon: {
    width: 45,
    height: 45
  }
});

export default CommentBox;
