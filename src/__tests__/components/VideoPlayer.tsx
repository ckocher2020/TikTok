import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from '../../components/VideoPlayer';
import { vimeoIds } from '../../utils/constants';

it('VideoPlayer renders correctly with defaults', () => {
  const videoPlayer = renderer
    .create(<VideoPlayer index={0} vimeoId={vimeoIds[0]} playable={false} />)
    .toJSON();

  expect(videoPlayer).toMatchSnapshot();
});
