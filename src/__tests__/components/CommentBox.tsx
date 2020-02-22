import 'react-native';
import React, { useState } from 'react';
import renderer from 'react-test-renderer';
import CommentBox from '../../components/CommentBox';
import { vimeoIds } from '../../utils/constants';
import { CommentType } from '../../utils/types';

it('CommentBox renders correctly with defaults', () => {
  const [videoComments, setVideoComments] = useState([] as CommentType[]);

  const handleAddVideoComment = (comment: string) => {
    setVideoComments([
      ...videoComments,
      {
        sender: 'James',
        content: comment,
        date: '6:50 am'
      } as CommentType
    ]);
  };

  const commentBox = renderer
    .create(
      <CommentBox
        vimeoId={vimeoIds[0]}
        videoComments={videoComments}
        addVideoComment={handleAddVideoComment}
      />
    )
    .toJSON();

  expect(commentBox).toMatchSnapshot();
});
