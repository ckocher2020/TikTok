import 'react-native';
import React, { useState } from 'react';
import renderer from 'react-test-renderer';
import VideoList from '../../components/VideoList';

it('VideoList renders correctly with defaults', () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleChangeVideoIndex = (index: number) => {
    setCurrentVideoIndex(index);
  };

  const videoList = renderer
    .create(
      <VideoList
        currentVideoIndex={currentVideoIndex}
        handleChangeVideoIndex={handleChangeVideoIndex}
      />
    )
    .toJSON();

  expect(videoList).toMatchSnapshot();
});
