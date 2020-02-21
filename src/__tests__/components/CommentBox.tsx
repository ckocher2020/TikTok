import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import CommentBox from '../../components/CommentBox';
import { vimeoIds } from '../../utils/constants';

it('renders correctly with defaults', () => {
  const commentBox = renderer
    .create(
      <CommentBox
        vimeoId={vimeoIds[0]}
        videoComments={[]}
        addVideoComment={() => {}}
      />
    )
    .toJSON();
  expect(commentBox).toMatchSnapshot();
});
