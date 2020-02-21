import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { CommentType } from '../../utils/types';

const CommentItem = ({ comment }: { comment: CommentType }) => (
  <View style={styles.container}>
    <View style={styles.avatarContainer}>
      <Image
        style={styles.avatarImage}
        source={require('../../../assets/avatar.png')}
      />
    </View>
    <View style={styles.commentContainer}>
      <Text style={styles.commentText}>{comment.content}</Text>
      <Text style={styles.dateText}>{comment.date}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row',
    marginBottom: 6
  },
  avatarContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatarImage: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  commentContainer: {
    flex: 1,
    paddingLeft: 5,
    flexDirection: 'row',
    alignItems: 'baseline'
  },
  commentText: {
    flex: 1,
    fontSize: 18,
    color: 'black'
  },
  dateText: {
    marginLeft: 10,
    color: 'rgba(0, 0, 0, 0.5)',
    alignSelf: 'flex-end'
  }
});

export default CommentItem;
