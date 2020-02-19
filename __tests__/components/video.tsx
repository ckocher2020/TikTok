import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import VideoBox from 'components/VideoPlayer';

it('renders correctly with defaults', () => {
  const button = renderer.create(<VideoBox />).toJSON();
  expect(button).toMatchSnapshot();
});
