import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import CommentItem from '../../components/CommentItem';

it('CommentItem renders correctly with defaults', () => {
  const comment = {
    sender: 'James',
    date: '6: 30 am',
    content: 'Comment Item Jest'
  };
  const commentItem = renderer
    .create(<CommentItem comment={comment} />)
    .toJSON();

  expect(commentItem).toMatchSnapshot();
});
