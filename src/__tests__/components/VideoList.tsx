import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import VideoList from '../../components/VideoList';

it('renders correctly with defaults', () => {
  const videoList = renderer
    .create(
      <VideoList currentVideoIndex={0} handleChangeVideoIndex={() => {}} />
    )
    .toJSON();
  expect(videoList).toMatchSnapshot();
});
