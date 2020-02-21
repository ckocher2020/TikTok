import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { CommentType } from '../../utils/types';

const CommentItem = ({ comment }: { comment: CommentType }) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={require('../../../assets/avatar.png')}
        />
      </View>
      <View style={styles.commentContainer}>
        <View style={styles.titleSection}>
          <Text style={styles.nameText}>{comment.sender}</Text>
          <Text style={styles.dateText}>{comment.date}</Text>
        </View>
        <View style={styles.textSection}>
          <Text style={styles.commentText}>{comment.content}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 15,
    flexDirection: 'row'
  },
  avatarContainer: {
    width: 50,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  },
  commentContainer: {
    flex: 1
  },
  titleSection: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  nameText: {
    fontWeight: '700'
  },
  dateText: {
    marginLeft: 10,
    color: 'rgba(0, 0, 0, 0.5)'
  },
  textSection: {
    padding: 5
  },
  commentText: {
    fontSize: 14,
    color: 'black'
  }
});

export default CommentItem;
