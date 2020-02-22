import React, { useRef, useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';
import Animated from 'react-native-reanimated';
import { CommentType } from '../../utils/types';
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

  useEffect(() => {
    setIsCommentBoxVisable(videoComments && videoComments.length > 0);
    if (!commentListRef.current || !commentListRef.current.getNode) {
      return;
    }
    commentListRef.current.getNode().scrollToEnd({
      animated: true
    });
  }, [videoComments]);

  const handleChangeComment = (newComment: string) => {
    setComment(newComment);
  };

  const handlePostComment = () => {
    if (!comment.length || !comment.trim().length) {
      return;
    }
    addVideoComment(vimeoId, comment);
    setIsCommentBoxVisable(true);
    setComment('');
  };

  const handleChangeCommentBoxVisable = () => {
    setIsCommentBoxVisable(visable => !visable);
  };

  if (!videoComments) return null;

  return (
    <View
      style={{ ...styles.container, height: isCommentBoxVisable ? 200 : 45 }}
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
    paddingTop: 8,
    height: 200,
    zIndex: 2,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 1)'
  },
  commentListBox: {
    flex: 1,
    marginBottom: 45
  },
  commentInputContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 45,
    zIndex: 3,
    flexDirection: 'row'
  },
  commentInput: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
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
    backgroundColor: 'rgba(255, 255, 255, 0.1)'
  },
  commentsButtonIcon: {
    width: 45,
    height: 45
  }
});

export default CommentBox;
